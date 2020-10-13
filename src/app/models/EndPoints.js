const Sequelize = require('sequelize');

class EndPoints extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.STRING,
        cpf: Sequelize.BOOLEAN,
        full_name: Sequelize.BOOLEAN,
        birthday: Sequelize.BOOLEAN,
        phone_number: Sequelize.BOOLEAN,
        address: Sequelize.BOOLEAN,
        amount_requests: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

module.exports = EndPoints;
