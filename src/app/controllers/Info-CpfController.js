// Controller para informações do user que não tem uma lógica diferente
const { v4 } = require('uuid');
const Infos = require('../models/Infos');
const User = require('../models/User');
const EndPoints = require('../models/EndPoints');

// Utils
const cpfValidator = require('../../utils/cpfValidator');
const orderEndPoints = require('../../utils/orderEndPoints');

class InfosController {
  async store(request, response) {
    try {
      let { token, data } = request.body;
      let id = v4();
      const user = await User.findByPk(token);

      if (!user)
        return response.status(404).json({ msg: 'The user does not exists' });

      // Validando cpf
      cpfValidator(data);

      const findUser = await Infos.create({ id, user_id: token });

      findUser.cpf = data;

      await findUser.save();

      await Infos.findOne({ where: { user_id: token } });

      const findEndPointUser = await EndPoints.findOne({
        where: { user_id: token },
      });

      if (!findEndPointUser) {
        await EndPoints.create({ id, user_id: token, cpf: true });
      }
      const next_end_point = await orderEndPoints(token, 'cpf');
      return response.status(200).json({ success: true, next_end_point });
    } catch (error) {
      return response.status(400).json({ Error: error.message });
    }
  }
}

module.exports = new InfosController();
