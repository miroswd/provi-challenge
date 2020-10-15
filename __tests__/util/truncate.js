// Responsável apenas por limpar a base de teste, antes de cada teste
const database = require('../../src/app/database');

module.exports = function truncate(){
  return Promise.all(
    Object.keys(database.connection.models).map(key => {
      return database.connection.models[key].destroy({truncate:true, force:true})
    }) // Deletando todos os models da aplicação
  )
}
