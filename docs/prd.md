# 📄 Product Requirements Document (PRD)

**Projeto:** [UTF-Secret-Santa]  
**Versão:** 1.0.0  
**Status:** 🟡 Em Definição (MVP)

## 🎯 1. Visão Geral e Objetivo
A aplicação de Amigo Secreto tem como objetivo facilitar a organização de sorteios entre grupos de pessoas, eliminando a necessidade de métodos manuais (papelzinho, planilhas, etc.).

O sistema permite que um usuário crie um grupo, adicione participantes e realize automaticamente o sorteio, garantindo que cada pessoa receba um amigo secreto de forma justa e sigilosa.

## 📖 2. Glossário Ubíquo
**Grupo:** Conjunto de pessoas participantes de um sorteio.
**Participante:** Usuário incluído em um grupo.
**Sorteio:** Processo que define quem tira quem.
**Amigo Secreto:** Pessoa sorteada para um participante.
**Organizador (Admin):** Responsável por criar e gerenciar o grupo.
**Resultado:** Associação final entre participantes.
**Convite:** Forma de entrada de um participante no grupo.

## 👤 3. Atores e Permissões
**Admin do Grupo**
-  Criar grupo
-  Editar nome do grupo
-  Adicionar/remover participantes
-  Iniciar o sorteio
-  Visualizar todos os resultados

**Participante Comum**
-  Entrar no grupo
-  Visualizar seu amigo secreto
-  Atualizar seus dados (nome/email)

## 📝 4. Escopo Funcional (User Stories)
Como **Admin**, quero criar um grupo para organizar um sorteio.
Como **Admin**, quero adicionar participantes ao grupo.
Como **Admin**, quero iniciar o sorteio automaticamente.
Como **Participante**, quero visualizar quem eu tirei.
Como **Participante**, quero entrar no grupo através de convite/link.
Como **Sistema**, quero garantir que ninguém tire a si mesmo.
Como **Sistema**, quero garantir que todos os participantes sejam sorteados.

## 🛡️ 5. Regras de Negócio (Constraints)
Um grupo deve ter **no mínimo 3 participantes** para realizar o sorteio.
Um participante **não pode tirar a si mesmo**.
Cada participante **deve tirar exatamente uma pessoa**.
Um participante só pode ser sorteado **uma única vez**.
Após o sorteio, **não é permitido alterar os participantes**.
O resultado do sorteio deve ser **sigiloso (cada um vê apenas o seu)**.

## 🚫 6. Fora de Escopo (Non-goals)
Envio de SMS
Integração com redes sociais
Pagamentos ou controle de presentes
Aplicativo mobile nativo (nesta fase)
Login com autenticação complexa (OAuth, etc.)

## ⚙️ 7. Requisitos Não Funcionais (Qualidade)
-  Mobile-first (responsivo)
-  Tempo de resposta rápido (< 2s)
-  Acessibilidade básica (WCAG)
-  Segurança básica de dados (não expor resultados)
-  Compatível com navegadores modernos
-  Persistência de dados (localStorage ou backend futuro)

## 🛠️ 8. Tech Stack Principal (Diretrizes)
**Front-end**
HTML5
CSS3 (Flexbox/Grid)
JavaScript moderno (ES6+)
-  const, let
-  Arrow Functions
-  fetch / async/await

**Futuro (Escalabilidade)**
Framework: Angular (alinhado ao curso)
Backend: Node.js + Express
Banco de dados: MongoDB ou PostgreSQL
