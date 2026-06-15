import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { distinctUntilChanged } from 'rxjs';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { SidenavComponent } from '../../../components/sidenav/sidenav.component';
import { EventService } from '../../../core/services/event.service';

@Component({
  selector: 'app-create-event',
  standalone: true,
  imports: [ReactiveFormsModule, HeaderComponent, FooterComponent, SidenavComponent],
  templateUrl: './create-event.component.html',
})
export class CreateEventComponent {
  private fb = inject(FormBuilder);
  private eventService = inject(EventService);
  private router = inject(Router);

  /** Controla a abertura do menu lateral (mesmo padrão das outras telas). */
  sidenavOpen = signal(false);

  /** Estado de envio / erro do formulário. */
  saving = signal(false);
  errorMessage = signal<string | null>(null);

  /** Formulário do evento — espelha os campos do design (nome, orçamento, data). */
  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
    budget: [null as number | null, [Validators.min(0)]],
    draw_date: ['', [Validators.required]],
  });

  // [ID25] toSignal: Transforma Observable (valueChanges) em um Signal reativo
  formValues = toSignal(this.form.valueChanges, { initialValue: this.form.value });

  // [ID25] toObservable: Transforma Signal em Observable para usar operadores RxJS
  sidenavState$ = toObservable(this.sidenavOpen).pipe(
    distinctUntilChanged()
  );

  constructor() {
    // Apenas para demonstrar a reatividade RxJS <-> Sinais
    this.sidenavState$.subscribe(isOpen => {
      console.log('[RxJS] Menu lateral alterado:', isOpen);
    });
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.saving.set(true);
    this.errorMessage.set(null);

    try {
      const { name, budget, draw_date } = this.form.getRawValue();
      await this.eventService.createEvent({
        name: name.trim(),
        budget: budget ?? null,
        draw_date: draw_date || null,
      });
      this.router.navigate(['/dashboard']);
    } catch (error: any) {
      console.error('Erro ao criar evento:', error);
      // Mostra a mensagem real do Supabase para facilitar o diagnóstico.
      const detalhe = error?.message || error?.error_description || 'Erro desconhecido';
      this.errorMessage.set(`Não foi possível criar o evento: ${detalhe}`);
    } finally {
      this.saving.set(false);
    }
  }
}
