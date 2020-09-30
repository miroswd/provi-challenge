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

```
npm run start
npx sequelize db:migrate
```

<!-- Todos os dados do usuário, são únicos -->
