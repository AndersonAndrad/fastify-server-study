# Fastify-server-study
## How to configure the project

first clone the repository

```
git clone https://github.com/AndersonAndrad/fastify-server-study.git
```

second execute the command

```
yarn install or npm install
```

third copy and past .env.example and rename to .env

switch to your bank parameters, postgres being

fourth execute the commands

```
yarn knex migrate:up or npm knex migrate:up
```

*remember to configure your database, with postgres*

### Test

to execute all tests execute the command

```
yarn test or npm test
```

## Routes

/user

### send

```
{
name: string
email: string
password_hash: string
}
```

### return

```
{
id: string,
name: string,
email: string
}
```

