# 📄 Product Requirements Document (PRD)

**Projeto:** WishDraw
**Versão:** 1.0.0
**Status:** 🟡 Em Definição (MVP)

---

## 🎯 1. Visão Geral e Objetivo

O **WishDraw** é uma aplicação web/mobile para organizar sorteios de amigo oculto de forma simples, rápida e divertida.

### Problema

Organizar amigo oculto manualmente é confuso, sujeito a erros e pouco escalável (principalmente em grupos grandes ou remotos).

### Objetivo

Permitir que usuários:

- Criem grupos
- Convidem participantes
- Realizem sorteios automáticos
- Compartilhem resultados de forma privada
- Gerenciem listas de desejos

---

## 📖 2. Glossário Ubíquo

- **Grupo:** Conjunto de pessoas participando de um amigo oculto
- **Participante:** Usuário dentro de um grupo
- **Sorteio:** Processo automático que define quem tira quem
- **Amigo Oculto:** Pessoa sorteada por um participante
- **Lista de Desejos (Wish):** Itens que o participante gostaria de ganhar
- **Restrição:** Regra que impede certas combinações no sorteio (ex: não tirar a si mesmo ou parceiros)

---

## 👤 3. Atores e Permissões

### 👑 Admin do Grupo

- Criar grupo
- Definir regras
- Convidar/remover participantes
- Iniciar sorteio
- Reexecutar sorteio (antes da divulgação)

### 🙋 Participante

- Entrar no grupo via convite/link
- Preencher lista de desejos
- Visualizar quem tirou (apenas após sorteio)
- Editar perfil

---

## 📝 4. Escopo Funcional (User Stories)

### 🔐 Autenticação

- Como usuário, quero me cadastrar com email ou Google
- Como usuário, quero fazer login/logout

### 👥 Gestão de Grupos

- Como usuário, quero criar um grupo de amigo oculto
- Como admin, quero convidar pessoas via link
- Como participante, quero entrar em um grupo via link

### 🎁 Lista de Desejos

- Como participante, quero adicionar itens à minha lista de desejos
- Como participante, quero editar/remover itens
- Como participante, quero visualizar a lista de quem tirei

### 🎲 Sorteio

- Como admin, quero iniciar o sorteio automaticamente
- Como sistema, devo garantir que ninguém tire a si mesmo
- Como sistema, devo respeitar restrições definidas
- Como participante, quero ver apenas o meu resultado

### 🔒 Privacidade

- Como participante, quero que meu amigo oculto seja secreto
- Como sistema, devo garantir que os dados sejam isolados por usuário

### 🔔 Notificações (MVP simples)

- Como usuário, quero ser notificado quando o sorteio acontecer

---

## 🛡️ 5. Regras de Negócio (Constraints)

- Um grupo deve ter **mínimo de 3 participantes**
- Um participante **não pode tirar a si mesmo**
- Sorteio deve ser **único por rodada**
- Após o sorteio:
  - Não é possível alterar participantes

- Restrições devem ser respeitadas (ex: A não pode tirar B)
- Cada participante vê apenas:
  - Quem ele tirou
  - Lista de desejos dessa pessoa

---

## 🚫 6. Fora de Escopo (Non-goals)

- ❌ Pagamentos
- ❌ Marketplace de presentes
- ❌ Versão offline

---

## ⚙️ 7. Requisitos Não Funcionais (Qualidade)

- 📱 **Mobile-first**
- 🔒 Dados sensíveis protegidos
- Responsivo
- ⚡ 1s para ações principais
- Escalável para grupos grandes (1000+ usuários)

---

## 🛠️ 8. Tech Stack Principal (Diretrizes)

### Frontend

- Angular 21+
- TailwindCSS

### Banco de Dados

- Supabase

### Autenticação

- Supabase Auth

### Infraestrutura

- Railway (frontend)
- Railway (backend + DB)
