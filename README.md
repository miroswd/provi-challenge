<h1 align="center"> Desafio Provi</h1>


<p align="center">Arquivo JSON, para importar no Insomnia. Possui as rotas já definidas.</p>
<p align="center">
<a href="https://insomnia.rest/run/?label=Provi&uri=https%3A%2F%2Fgithub.com%2Fmiroswd%2Fprovi-challenge%2Fblob%2Fmaster%2FInsomnia-file.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

- Ao criar um usuário, no Insomnia, é necessário copiar o <b>token</b> e acessar 'Manage Environments' ou usar o atalho CTRL+E

### Requisitos

- Node.JS Instalado
- Docker Instalado

### Rodando o Docker

```
sudo docker run \
--name provi \
-e POSTGRES_USER=provi \
-e POSTGRES_PASSWORD=provi \
-e POSTGRES_DB=provi \
-p 5438:5432 \
-d \
postgres
```

### Inicialização

- Necessário configurar as variáveis ambiente.
- Criar uma database
- O arquivo <a href="https://github.com/miroswd/provi-challenge/blob/master/example.env">example.env</a> deve ser renomeado para '.env'
- Você pode passar as credenciais após o sinal de igual.

```
# Server - Porta em que a aplicação irá rodar
PORT=

# DATABASE
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_DB=
DATABASE_PORT=
DATABASE_HOST=
```

### Rodando a aplicação

```
npm i
```

```
npm run start
```

```
npx sequelize db:migrate
```

### Criando novos end-points

- Necessário criar um novo campo na tabela end-points:
- O type deve ser BOOLEAN
- O defaultValue deve ser false

<h6>Exemplo:</h6>

```js
module.exports = {
 up: (queryInterface, Sequelize) => {
   return queryInterface.addColumn('end_points', 'document', {
     type:Sequelize.BOOLEAN,
     allowNull:false,
     defaultValue:false
   });
 },

 down: (queryInterface, Sequelize) => {
   return queryInterface.removeColumn('end_points','document');
 }
};
```

- No <a href="https://github.com/miroswd/provi-challenge/blob/master/src/app/models/EndPoints.js">Model/EndPoints</a> deve ser adicionado o nome do novo campo e o tipo Boolean

### Novos dados

- Se for um campo sem uma lógica específica, basta usar o <a href="https://github.com/miroswd/provi-challenge/blob/master/src/app/controllers/Info-GenericInfosController.js">GenericInfosController</a> como Controller

- Nas <a href="https://github.com/miroswd/provi-challenge/blob/master/src/routes.js">Rotas</a> de informação do usuário:

```js
'/users/infos/parametro'
``` 

- Se for um dado que não exige lógica, basta passar o campo que será preenchido na tabela, exemplo: 'escolaridade', como parâmetro

```js
'/users/infos/escolaridade'
``` 

