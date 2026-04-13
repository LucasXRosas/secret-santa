---
permalink: /index.html
---

# Wish Draw

**Status do Sistema:**
[![CI - Develop (Laboratório](https://img.shields.io/badge/status-%F0%9F%9F%A1%20Em%20Desenvolvimento-yellow)](https://github.com/LucasXRosas/secret-santa/blob/develop)
[![CI - Main (Produção)](https://img.shields.io/badge/version-1.0.0-blue)]()

👨‍💻 **Autores:** [Felipe Da Silva Fadel, Lucas Rosa]

Uma aplicação moderna e intuitiva para organizar sorteios de Amigo Secreto, eliminando a necessidade de papéis e garantindo o sigilo total do sorteio.

---

## 🚀 Visão Geral

O **Wish Draw** facilita a organização de grupos para o tradicional sorteio de final de ano. Um organizador cria o grupo, adiciona os participantes e o sistema realiza o sorteio automaticamente seguindo regras de negócio rigorosas para garantir justiça e anonimato.

## ✨ Funcionalidades Principais

- **Gestão de Grupos:** Criação e edição de grupos pelo usuario.
- **Participantes:** Adição rápida de participantes via convite ou link.
- **Sorteio Automático:** Algoritmo que garante que ninguém tire a si mesmo e que todos tenham um par.
- **Sigilo Total:** Cada participante visualiza apenas o seu próprio amigo secreto.
- **Acessibilidade & Responsividade:** Interface mobile-first desenvolvida com foco na experiência do usuário.

## 🛠️ Stack Tecnológica

O projeto utiliza as tecnologias mais recentes do ecossistema web:

- **Framework:** [Angular 21+](https://angular.dev/) (Standalone Components & Signals)
- **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Spartan UI](https://www.spartan.ng/) & [Lucide Angular](https://lucide.dev/)
- **Backend as a Service:** [Supabase](https://supabase.com/) (Auth & Banco de Dados)
- **Linguagem:** TypeScript

## 🛡️ Regras de Negócio

1. Mínimo de **3 participantes** por grupo.
2. Um participante **nunca** pode tirar a si mesmo.
3. Cada pessoa tira exatamente **uma** pessoa e é tirada por apenas **uma** pessoa.
4. Após o início do sorteio, a lista de participantes torna-se imutável.

## 📝 Documentação Adicional

Para detalhes mais técnicos e especificações de produto, consulte a pasta `docs/`:

- [PRD - Product Requirements Document](docs/prd.md)
- [SDD - Software Design Document](docs/sdd.md)

---


## 🚀 4. Quick Start (Como Executar)

**1. Clone o repositório:**

    git clone https://github.com/LucasXRosas/secret-santa
    cd secret-santa

**2. Instale as dependências:**
Como é um Monorepo, você precisa instalar os pacotes em cada camada:

    # Terminal 2 - Iniciar o Frontend Angular
    cd apps/web
    npm install
    npm run start

    # Terminal 3 - Compilar a Extensão
    cd apps/extension
    npm install
    npm run build

**3. Variáveis de Ambiente:**
Não esqueça de copiar o arquivo `.env.example` para `.env` dentro da pasta `apps/api` e configurar a `DATABASE_URL` do seu PostgreSQL.

Desenvolvido com ❤️ para facilitar suas festas de final de ano.
