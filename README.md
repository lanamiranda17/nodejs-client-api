# Client API | Node.js

API REST para gerenciamento de clientes, desenvolvida com **Node.js, Express e PostgreSQL**, permitindo realizar operações de cadastro, consulta, atualização e exclusão de registros.

O projeto utiliza uma estrutura em camadas para separar o tratamento das requisições HTTP, a lógica da aplicação e o acesso ao banco de dados.

---

## Tecnologias

- **Node.js** — Ambiente de execução JavaScript
- **Express.js** — Framework para construção da API REST
- **PostgreSQL** — Banco de dados relacional
- **node-postgres (pg)** — Integração com PostgreSQL
- **HTML** — Formulário básico para cadastro de clientes

## Funcionalidades

A aplicação implementa operações CRUD para gerenciamento de clientes:

- Cadastro de clientes
- Listagem de todos os clientes
- Consulta de cliente por CPF
- Atualização de dados cadastrais
- Exclusão de clientes
- Persistência dos dados em PostgreSQL

## Endpoints

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/cliente` | Lista todos os clientes |
| `GET` | `/cliente/:cpf` | Consulta um cliente pelo CPF |
| `POST` | `/cliente` | Cadastra um novo cliente |
| `PUT` | `/cliente/:cpf` | Atualiza os dados de um cliente |
| `DELETE` | `/cliente/:cpf` | Remove um cliente |

### Exemplo de requisição

Cadastro de cliente:

```http
POST /cliente
Content-Type: application/json
```

```json
{
  "cpf": "12345678909",
  "nome": "Maria Silva",
  "nasc": "2000-05-15",
  "salario": 3500.00
}
```

*Os dados acima são apenas ilustrativos.*

---

## Estrutura do Projeto

```text
├── controllers/
│   └── ClienteController.js
├── repositories/
│   ├── ClienteRepository.js
│   └── bd.js
├── routes/
│   └── ClienteRoute.js
├── services/
│   └── ClienteServices.js
├── view/
│   └── cadastro.html
├── index.js
├── package.json
└── package-lock.json
```

A aplicação segue uma separação de responsabilidades:

- **Routes:** definição dos endpoints HTTP.
- **Controllers:** recebimento e tratamento das requisições.
- **Services:** camada destinada à lógica da aplicação.
- **Repositories:** acesso aos dados e execução de consultas SQL.

## Como Executar

### Pré-requisitos

- Node.js e npm
- PostgreSQL

### 1. Clone o repositório

```bash
git clone https://github.com/lanamiranda17/ApiCliente.git
cd ApiCliente
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

Configure uma instância PostgreSQL e copie o arquivo de exemplo para criar sua configuração local:

```bash
cp .env.example .env
```

Preencha no arquivo `.env` as variáveis `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD` e `DB_NAME` com as credenciais da sua instância PostgreSQL.

O projeto utiliza uma tabela `cliente` com os campos `cpf`, `nome`, `nasc` e `salario`.

### 4. Inicie a aplicação

```bash
node index.js
```

O servidor estará disponível em:

`http://localhost:3000`

### 5. Acesse o formulário de cadastro

Para utilizar a interface HTML básica de cadastro, acesse:

`http://localhost:3000/cadastro.html`

Os demais endpoints podem ser testados utilizando ferramentas como Postman ou Insomnia.

---

## Sobre o Desenvolvimento

O projeto foi desenvolvido como exercício prático de construção de APIs REST, com foco na aplicação de conceitos de comunicação HTTP, operações CRUD, organização em camadas e integração com bancos de dados relacionais, durante um workshop prático de desenvolvimento backend na Universidade Federal de Lavras (UFLA).