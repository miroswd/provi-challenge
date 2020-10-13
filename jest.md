### JEST

- TDD => Test Driven Development


```
npm i jest --save-dev
npx jest --init # y node y y
```

- Coverage, mostra quanto do código ainda falta testar e o que testar
- Clear mock, limpa as variáveis


tocar o bail para 1, quando falhar em 1 teste, já para de executar os testes
clearMock true
collectCoverage true
collectCoverageFrom, local dos arquivos que serão testes ['src/app/**/*.js]
coverageDirectory coverage

coverageReporters, apenas text e lcov
testMatch, local dos testes "**/__tests__/**/*.test.js"

por padrão o jest usa commomJS, mas existe um plugin do sucrase para usar import/export


### Adicionando a intellisense do jest

```
npm i @types/jest --save-dev
```


### Variáveis de ambiente

- Por padrão, quando rodamos os testes não é bacana usar o mesmo db q esta usando na aplicação
- Por isso, criamos o .env.test

DB_DIALECT=sqlite

o sqlite cria um arquivo de banco de dados, q é armazenado junto à aplicação
não é necessário instalar nada

no configs/database, incluir
```js
{
  dialect: process.env.DB_DIALECT || 'postgres',
  storage: './__tests__/database.sqlite',
}
```

criando um arquivo src/bootstrap.js somente para carregar as variáveis ambientes

### Teste de criação de usuário

No packacge.json
pretest: roda antes do script de test

```json
{
  "pretest": "NODE_ENV=test sequelize db:migrate",
  "test": "NODE_ENV=test jest",
  "posttest": "NODE_ENV=test sequelize db:migrate:undo:all",
}
```

supertest -D /lib para fazer chamadas, tipo o axios, porem para test
