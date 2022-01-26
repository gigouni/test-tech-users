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

## Getting started

## Development details

- Free technos & libs until it match Node.js / TypeScript and allow a GraphQL API integration.
  - Look for a convenient files structure and found out about [NestJS](https://github.com/nestjs/nest) (framework)
    - Generate in a minute a working stack following standards/conventions
    - Integrate tools to improve development workflow
    - New techno for me, a risk but also a way to challenge myself using a new framework which could be useful for Casap (_let's have fun!_)
      - Proof of ability about reading documentation, assuming and using the content of a documentation for a task/project
    - Provide a bunch of [working examples](https://github.com/nestjs/nest/tree/master/sample)
      - Ease the development
      - Provide good code quality pattern
      - Provide an impressive technical documentation about security practises
      - Is approved by the community!

Test started the 26th of January, 2022 at 06h PM.

## Objectives

- Generate the NestJS stack [following its documentation](https://docs.nestjs.com/)

```shell
npm i -g @nestjs/cli
nest new project-name
```

- Add the GraphQL schema and its API resolvers
- Add a `docker-compose.yml` to have a side Mongo-in-Docker container
- Add tests using jest (_used by Casap for its own tests suites_)
- Add an auth endpoint

## Environment details

- Windows 10
- VS Code 1.63.2
- Node.js v14.17.1 && npm v6.14.13

## How to use

### Installation

```bash
npm install
```

### Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

### Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```
