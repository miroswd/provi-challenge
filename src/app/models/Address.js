const Sequelize = require('sequelize');

class Address extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.STRING,
        cep: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

module.exports = Address;
