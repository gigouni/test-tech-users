<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
  <a href="https://info.casap.com/" target="blank"><img src="https://maddyness.twic.pics/2021/11/Capture-decran-2021-11-26-a-11.05.03.png" width="120" alt="Casap Logo" /></a>
</p>

<p align="center">Technical test to join <a href="https://info.casap.com/" target="_blank">the awesome Casap company</a>.</p>

<p align="center">
    <a href="#" target="_blank"><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" /></a>
    <a href="#" target="_blank"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" /></a>
    <a href="#" target="_blank"><img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" /></a>
</p>

<!-- TOC -->

- [1. Getting started](#1-getting-started)
    - [1.1. Development details](#11-development-details)
    - [1.2. Objectives](#12-objectives)
    - [1.3. Environment details](#13-environment-details)
    - [1.4. How to use](#14-how-to-use)
        - [1.4.1. Installation](#141-installation)
        - [1.4.2. Running the app](#142-running-the-app)
        - [1.4.3. Test](#143-test)
- [2. Technical choices](#2-technical-choices)
    - [2.1. GraphQL](#21-graphql)
        - [2.1.1. Resolvers](#211-resolvers)
    - [2.2. Workflow](#22-workflow)
        - [2.2.1. Starting](#221-starting)
        - [2.2.2. Using](#222-using)
- [3. End of the test](#3-end-of-the-test)
    - [3.1. Time's up](#31-times-up)
    - [3.2. Remain to do](#32-remain-to-do)
- [4. Online resources](#4-online-resources)

<!-- /TOC -->

# 1. Getting started

## 1.1. Development details

- Free technos & libs until it matches Node.js / TypeScript and allow a GraphQL API integration.
  - Look for a convenient files structure and found out about [NestJS](https://github.com/nestjs/nest) (framework)
    - New techno for me, a risk but also a way to challenge myself using a new framework which could be useful for Casap (_let's have fun!_)
      - Proof of ability about reading documentation, assuming and using the content of a documentation for a task/project
    - Generate in a minute a working stack following standards/conventions
    - Integrate tools to improve development workflow
    - Provide a bunch of [working examples](https://github.com/nestjs/nest/tree/master/sample)
      - Ease the development
      - Provide good code quality pattern
      - Provide an impressive technical documentation about security practices
      - Is approved by the community!

## 1.2. Objectives

- Generate the NestJS stack [following its documentation](https://docs.nestjs.com/)

```shell
npm i -g @nestjs/cli
nest new project-name
```

- Add the GraphQL schema and its API resolvers to
  - Create an user (props: _id_, firstName, lastName, email, password)
  - Edit an user
  - Delete an user
- Add a `docker-compose.yml` to have a side Mongo-in-Docker container to store data
- Add tests using [jest](https://jestjs.io/fr/) (_used by Casap for its own tests suites_)
- Add an auth endpoint

## 1.3. Environment details

- Windows 10
- VS Code 1.63.2
- Node.js v14.17.1 && npm v6.14.13
- GitHub forked repo
  - Cannot switch its visibility to private after the fork: _"For security reasons, you cannot change the visibility of a fork."_

## 1.4. How to use

### 1.4.1. Installation

```bash
npm install
```

### 1.4.2. Running the app

```bash
# starting the database
npm run start:db

# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod

# stopping the db
npm run stop:db
```

GraphQL playground available at [localhost:3000](http://localhost:3000/graphql).

### 1.4.3. Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

# 2. Technical choices

## 2.1. GraphQL

**Source**: [https://docs.nestjs.com/graphql/quick-start#overview](https://docs.nestjs.com/graphql/quick-start#overview)

The chosen GraphQL approach will be the code-first one. It use decorators and TypeScript classes to generate the corresponding GraphQL schema. This approach is useful if you prefer to work exclusively with TypeScript and avoid context switching between language syntaxes.

Generate the schema using the Nest generator

```shell
nest g resource users
```

And adapt it to the current context.

### 2.1.1. Resolvers

You can found examples of working resolvers to play with the playground within the [QUERIES.md](./QUERIES.md) and [MUTATIONS.md](./MUTATIONS.md) files.
Two queries, `users` and `user` have been added to improve the application usage.

## 2.2. Workflow

Let's get an overview of the workflow when we're requesting the app API (example: create a user).

### 2.2.1. Starting

- start of the application
- `src/main.ts`: init the app
- `src/app.module.ts`: start the app and open the GraphQL endpoints to introspection
- app ready!

### 2.2.2. Using

- request (query/mutation) received: the `src/app.module.ts -> GraphQLModule` will forward the request to the endpoint
- `src/users/users.resolver.ts`: detect the mutation and forward it to the `createUser` function
- `src/users/users.resolver.ts -> createUser`: capture the user input and use the `UserService` class to update the database
- `src\users\users.service.ts -> createUser`: create the user in database based on its model and return it
- `src/users/users.resolver.ts`: return the created user data to the API
- end of the request workflow

# 3. End of the test

## 3.1. Time's up

- Test started the 26th of January, 2022 at 18h00.
- Break time at 19h50 during 1h20 (dinner time + coffee reloading + Docker install).
- End of the test at 23h20 to respect the 4h timing and cleaning of the project before the final push.

## 3.2. Remain to do

- Use [Schema based validation pipes](https://docs.nestjs.com/pipes#schema-based-validation)
- Implement the auth API: https://github.com/nestjs/nest/tree/master/sample/19-auth-jwt (_REST sample_)
- Add some tests suites and finish to fix the `src\users\users.service.spec.ts` one
- Improve the logs to ease the debug/maintainability thru a [custom implementation](https://docs.nestjs.com/techniques/logger#custom-implementation)

# 4. Online resources

- NestJS documentation: https://docs.nestjs.com/
- NestJS GitHub repository: https://github.com/nestjs/nest
