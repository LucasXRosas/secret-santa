# 🎁 Secret Santa App (Amigo Secreto)

![Status](https://img.shields.io/badge/status-%F0%9F%9F%A1%20Em%20Desenvolvimento-yellow)
![Version](https://img.shields.io/badge/version-1.0.0-blue)

Uma aplicação moderna e intuitiva para organizar sorteios de Amigo Secreto, eliminando a necessidade de papéis e garantindo o sigilo total do sorteio.

---

## 🚀 Visão Geral

O **Secret Santa App** facilita a organização de grupos para o tradicional sorteio de final de ano. Um organizador cria o grupo, adiciona os participantes e o sistema realiza o sorteio automaticamente seguindo regras de negócio rigorosas para garantir justiça e anonimato.

## ✨ Funcionalidades Principais

- **Gestão de Grupos:** Criação e edição de grupos pelo Administrador.
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

Desenvolvido com ❤️ para facilitar suas festas de final de ano.
