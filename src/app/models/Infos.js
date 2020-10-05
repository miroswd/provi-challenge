const Sequelize = require('sequelize');

class Infos extends Sequelize.Model{
  static init(sequelize){
    super.init({
      user_id:Sequelize.STRING,
      cpf:Sequelize.STRING,
      first_name:Sequelize.STRING,
      last_name:Sequelize.STRING,
      birthday:Sequelize.STRING,
      phone_number:Sequelize.BIGINT,
      address:Sequelize.STRING,
      // document:Sequelize.STRING,
      end_points:Sequelize.INTEGER,
    },{
      sequelize
    })
    return this;
  }
}

module.exports = Infos;
