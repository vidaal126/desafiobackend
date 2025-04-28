<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Sistema NestJS

Este é um projeto desenvolvido com NestJS, que visa oferecer uma solução robusta e escalável.

## Tecnologias utilizadas

- **NestJS**: Framework para Node.js.
- **Docker**: Para contêineres.
- **Prisma**: ORM para interação com o banco de dados.

## Ajustes feitos

- Configuração do **Docker** para garantir a portabilidade do ambiente.
- Integração com o **Prisma ORM** para facilitar as operações com o banco de dados.
- Implementações de endpoints REST.

## Como rodar o projeto

### 1. **Instalar dependências**

Primeiro, instale as dependências do projeto:

```bash
$ npm install
```

## Configuração do Banco de Dados

Para rodar o projeto, o banco de dados deve estar configurado corretamente. Caso você esteja utilizando o Docker, pode rodar o banco de dados da seguinte forma:

## 3. Rodar o Docker

Se o banco de dados estiver configurado em um container Docker, execute o comando abaixo para iniciar o Docker:

docker-compose up -d

# Rodar o projeto

npm run start:dev

# documentação de API //ainda não implementado

A documentação da API pode ser acessada pelo Swagger, disponível em http://localhost:3000/docs após rodar o projeto.

# Estrutura do projeto

.
├── docker-compose.yml
├── eslint.config.mjs
├── nest-cli.json
├── package.json
├── package-lock.json
├── prisma
│ ├── migrations
│ │ ├── 20250414010658_relation_tables
│ │ ├── 20250418231117_add_default_agency
│ │ ├── 20250419234722_fix_internal_account_type
│ │ ├── 20250423025448_add_default_total_value
│ │ └── migration_lock.toml
│ └── schema.prisma
├── README.md
├── src
│ ├── accounts
│ │ ├── accounts.module.ts
│ │ └── accounts.service.ts
│ ├── app.module.ts
│ ├── auth
│ │ ├── auth.controller.ts
│ │ ├── auth.module.ts
│ │ ├── auth.service.ts
│ │ └── dto
│ ├── cart
│ │ ├── cart.controller.ts
│ │ ├── cart.module.ts
│ │ ├── cart.service.ts
│ │ └── dto
│ ├── main.ts
│ ├── prisma
│ │ ├── prisma.module.ts
│ │ └── prisma.service.ts
│ ├── products
│ │ ├── dto
│ │ ├── products.controller.ts
│ │ ├── products.module.ts
│ │ └── products.service.ts
│ └── users
│ ├── dto
│ ├── users.controller.ts
│ ├── users.module.ts
│ └── users.service.ts
├── tasks.md
├── test
│ ├── app.e2e-spec.ts
│ └── jest-e2e.json
├── tsconfig.build.json
├── tsconfig.json
└── utils
└── bcrypt.ts

# Configurações adicionais

Variáveis de ambiente

Certifique-se de que as variáveis de ambiente estão configuradas corretamente para que o projeto funcione de maneira adequada. Você pode definir essas variáveis no arquivo .env.
