module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('infos','address', {
        type:Sequelize.STRING,
        references:{model:'addresses',key:'id'},
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
     });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('infos','address')
  }
}