const Sequelize = require('sequelize');

class AmountRequest extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        user_id: Sequelize.STRING,
        loan_cents: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

module.exports = AmountRequest;
