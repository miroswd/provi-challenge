module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('end_points', { 
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
        onUpdate:'CASCADE'
      },
      cpf:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },
      full_name:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },
      birthday:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },
      phone_number:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },
      address:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },
      amount_requests:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },
      created_at:{
        type:Sequelize.DATE,
        allowNull:false
      },
      updated_at:{
        type:Sequelize.DATE,
        allowNull:false
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('end_points');
  }
};
