NodeJS & TypeScript Template
=========================================
## Overview
Node-TS is a base template created to help start new backend projects using NodeJS and TypeScript.
The main objective is helping new projects start feature development by providing a base architecture and basic services setup, using standard tooling and best practices.

## Architecture & Folder structure
The project is structured using a layered architecture, separating Persistence, Business logic and Routing. Specifically, Repositories, Services and Routers

Models are used to define your database entities and are passed through layers before. Then, serializers are in charge of exposing the correct data to the end user (so, at router level in this case).

The folder structure is the following:
- `dist`: Stores all .js files built by the TypeScript compiler.
- `public`: Exposes publicly hosted files.
- `src`: Root folder for our codebase.
- `constants`: Constant definition such as status codes, enums, etc.
- `db`: Database related configurations and migration files.
- `middlewares`: Express Middlewares.
- `models`: Entity models (which are then mapped to the database).
- `repositories`: Entity Repositories, ideally, one per entity.
- `routes`: Root folder for our router, separated by version (so, `api/v1` will have all your `api/v1` exposed routes) this way you can keep more than one version up if needed.
- `serializers`: Entity json serializers.
- `utils`: Helpers such as loggers, date handling, etc.
- `validations`: Json schema validations for each entity.
- `tasks`: Used to store any standalone custom script that you would expose on your `package.json`

## Environment setup
- `Dotenv` is set up to manage environment variables locally, use the `.env.sample` file as a base and use one `.env` file per environment (so, development, test and production).
- `ormconfig` stores the base configuration for TypeORM.

## Scripts
The following scripts are provided as tooling to interact with the database, tests, builds, etc:

- `npm run lint`: Runs tslint with automatic fixes enabled.
- `npm run build`: Builds all files for release.
- `npm run dev`: Spins up the TS compiler and the backend concurrently for developing using hot reload.
- `npm run start`: Starts the backend (from the dist folder).
- `npm run db:sync`: Syncs the database, it **should not be used in production, since it can override data**.
- `npm run db:drop` Drops the database
- `npm run db:migrate` Runs migrations
- `npm run db:logsync` Compares the current db schema to see if new changes would need to be applied when running db:sync.
- `npm run db:migrate-generate`: Generates a migration by diffing the changes on your entities.
- `npm run db:migrate-create`: Generates an empty migration file.
- `npm run tests`: run tests.

## Dependencies
- `express`: http://expressjs.com/ for our routing layer.
- `typeorm`: https://github.com/typeorm/typeorm as our ORM.
- `@hapi/joi`: https://github.com/hapijs/joi for json validation.
- `pino`: https://github.com/hapijs/joi for logging.
- `dotenv`: https://github.com/motdotla/dotenv for environment management.
- `pg`: https://github.com/motdotla/dotenv PostgreSQL adapter.
- `body-parser`: https://github.com/expressjs/body-parser middleware json parsing.

### Test Dependencies
- `mocha`: https://mochajs.org/ as our testing framework.
- `chai`: http://chaijs.com assertion library.
- `sinon`: https://sinonjs.org/ for mocks and stubs.
- `supertest`: https://github.com/visionmedia/supertest for router testing.

## Roadmap
The following features are planned to be added:

- [ ] CircleCI configuration.
- [ ] Docker configuration.
- [ ] Error handling middleware.
- [ ] Session management using Passport.
- [ ] Background jobs example setup.

