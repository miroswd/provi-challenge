module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('infos', 'address', {
      type: Sequelize.STRING,
      references: { model: 'addresses', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('infos', 'address');
  },
};
