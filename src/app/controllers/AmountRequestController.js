const { v4 } = require('uuid');
const User = require('../models/User');
const AmountRequest = require('../models/AmountRequest');
const EndPoints = require('../models/EndPoints');

const orderEndPoints = require('../../utils/orderEndPoints');

class AmountRequestController {
  async store(request, response) {
    try {
      const { token, data } = request.body;
      const user = await User.findOne({ where: { id: token } });

      if (!user) throw new Error('The user does not exists');

      const findEndPointUser = await EndPoints.findOne({
        where: { user_id: token },
      });

      if (!findEndPointUser)
        throw new Error('CPF must be filled in before the other data');

      const next_end_point = await orderEndPoints(token, 'amount_requests');

      const amountRequestExists = await AmountRequest.findOne({
        where: { user_id: token },
      });

      if (amountRequestExists) throw new Error('Loan has already been made');

      await AmountRequest.create({
        id: v4(),
        user_id: token,
        loan_cents: data,
      });

      return response.status(200).json({ success: true, next_end_point });
    } catch (error) {
      return response.status(200).json({ Error: error.message });
    }
  }
}

module.exports = new AmountRequestController();
