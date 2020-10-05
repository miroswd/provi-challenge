require('dotenv').config() // Adicionando aqui, pois o sequelize não tem acesso à raiz do projeto

module.exports = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  port:process.env.DB_PORT,
  dialect: 'postgres',
  logging:false,
  define:{
    'timestamps':true,
    'underscored':true,
    'underscoredAll':true,
  }
}