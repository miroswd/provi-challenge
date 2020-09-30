# Desafio Provi

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
npm run start
npx sequelize db:migrate
```

<!-- Todos os dados do usuário, são únicos -->
