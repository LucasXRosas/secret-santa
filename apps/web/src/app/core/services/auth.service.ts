import { Injectable, signal, computed } from '@angular/core';
import { createClient, SupabaseClient, User } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private supabase: SupabaseClient | null = null;
  // ⚠️ Cliente com permissões administrativas - APENAS para projeto acadêmico.
  // Em produção real, a criação de usuários com service_role deve ser feita num backend seguro.
  private supabaseAdmin: SupabaseClient | null = null;
  
  // Signal para o usuário atual
  private _currentUser = signal<User | null>(null);
  readonly currentUser = this._currentUser.asReadonly();
  
  // Signal computado para verificar se está autenticado
  readonly isAuthenticated = computed(() => !!this._currentUser());

  // Promise que resolve quando a sessão inicial já foi restaurada do storage.
  // Usada pelo authGuard para não redirecionar antes da sessão carregar (ex.: F5 no /dashboard).
  private _ready!: Promise<void>;
  whenReady(): Promise<void> {
    return this._ready;
  }

  constructor() {
    this.initSupabase();
  }

  /**
   * Cliente Supabase público (autenticado). Usado por outros services
   * (ex.: EventService) para fazer queries respeitando o RLS do usuário logado.
   * Retorna null se o Supabase não estiver configurado.
   */
  get client(): SupabaseClient | null {
    return this.supabase;
  }

  private initSupabase() {
    const url = environment.supabaseUrl;
    const key = environment.supabaseKey;
    const serviceRoleKey = (environment as any).supabaseServiceRoleKey;

    if (!url || url === 'INSERIR_SUPABASE_URL' || !key || key === 'INSERIR_SUPABASE_ANON_KEY') {
      console.warn(
        '⚠️ Supabase não configurado. Por favor, configure as variáveis supabaseUrl e supabaseKey em seu arquivo environment.ts'
      );
      this._ready = Promise.resolve();
      return;
    }

    try {
      // Cliente público (para login, sessão, etc.)
      // persistSession: true => a sessão é gravada no localStorage, então o
      // usuário continua logado ao recarregar a página (F5) ou reabrir o
      // navegador. Só sai ao clicar em "Logout" ou ao limpar o cache/storage.
      // autoRefreshToken: true => renova o token automaticamente antes de expirar.
      this.supabase = createClient(url, key, {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
        },
      });
      
      // Cliente admin (para criação de usuários com e-mail auto-confirmado)
      if (serviceRoleKey && serviceRoleKey !== 'INSERIR_SUPABASE_SERVICE_ROLE_KEY') {
        this.supabaseAdmin = createClient(url, serviceRoleKey, {
          auth: {
            autoRefreshToken: false,
            persistSession: false
          }
        });
      }
      
      // Obter sessão inicial (restaurada do localStorage, se existir)
      this._ready = this.supabase.auth.getSession().then(({ data: { session } }) => {
        this._currentUser.set(session?.user ?? null);
      });

      // Escutar mudanças de estado de autenticação
      this.supabase.auth.onAuthStateChange((_event, session) => {
        this._currentUser.set(session?.user ?? null);
      });
    } catch (error) {
      console.error('Erro ao inicializar cliente Supabase:', error);
      this._ready = Promise.resolve();
    }
  }

  /**
   * Realiza login com e-mail e senha
   */
  async signIn(email: string, password: string) {
    if (!this.supabase) {
      throw new Error('Supabase não inicializado. Verifique suas credenciais.');
    }
    
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password
    });

    if (error) throw error;
    return data;
  }

  /**
   * Cadastra um novo usuário usando a Admin API (e-mail já confirmado)
   * e realiza login automaticamente em seguida.
   */
  async signUp(email: string, password: string, name: string) {
    if (!this.supabaseAdmin) {
      throw new Error('Cliente Admin do Supabase não configurado. Verifique a supabaseServiceRoleKey.');
    }

    // 1. Criar o usuário via Admin API com e-mail já confirmado
    const { data: createData, error: createError } = await this.supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: { name }
    });

    if (createError) throw createError;

    // 2. Logar automaticamente o usuário recém-criado
    return this.signIn(email, password);
  }

  /**
   * Efetua logout
   */
  async signOut() {
    if (!this.supabase) return;
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
    this._currentUser.set(null);
  }
}

