# Backend CRUD - TypeScript + Express + PostgreSQL

Este projeto é uma **API RESTful** desenvolvida com **Node.js (Express)** e **TypeScript**, conectada a um banco de dados **PostgreSQL**.

---

## Funcionalidades

- CRUD completo de usuários (Create, Read, Update, Delete)
- Estrutura organizada em **Controller + Repository**
- Conexão com banco **PostgreSQL**
- **Hot-reload** para desenvolvimento

---

## Estrutura do Projeto

/src
├─ controllers/ # Lógica das requisições
├─ repositories/ # Acesso ao banco de dados
├─ routes/ # Definição das rotas
├─ model/ # Interfaces (tipos)
├─ test/ # Testes
|─ db.ts # Conexão com banco de dados
└─ server.ts # Ponto de entrada da aplicação
.env # Variáveis de ambiente

---

## Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/) v18+
- [PostgreSQL](https://www.postgresql.org/)

---

## Configuração

1. **Clonar o repositório:**

```bash
git clone https://github.com/Gustavo-Hono/backend-typescript.git
cd backend-typescript
```

## Instalar as dependências

```bash
    npm i
```

## Banco de dados

```bash
    CREATE DATABASE mydatabase;
```

## Configurações do env

```bash
    DB_HOST=localhost
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=mydatabase
```

## Rodar projeto
```bash
    npm run dev
```