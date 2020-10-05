module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('infos', 'end_points', {
      type:Sequelize.INTEGER,
      allowNull:false,
      defaultValue:1,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('infos','end_points')
  }
};
