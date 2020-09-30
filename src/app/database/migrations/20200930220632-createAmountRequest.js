module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('amount_requests', {
      id: {
        type:Sequelize.STRING,
        unique:true,
        primaryKey:true,
        allowNull:false,
      },
      user_id:{
        type:Sequelize.STRING,
        references:{model:'users',key:'id'},
        unique:true,
        allowNull:false,
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      },
      loan_cents:{
        type:Sequelize.BIGINT,
        allowNull:false,
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false
      }
     });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('amount_requests');
  }
};
