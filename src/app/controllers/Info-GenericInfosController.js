// Controller para informações do user que não tem uma lógica diferente
const { v4 } = require('uuid');
const Infos = require('../models/Infos');
const User = require('../models/User');
const EndPoints = require('../models/EndPoints');

const orderEndPoints = require('../../utils/orderEndPoints')

class InfosController {
  async store(request,response){
    try {
      const {information} = request.params;
      let {token, data} = request.body;
      
      let id = v4();
      const user = await User.findByPk(token)
      
      if (!user) return response.status(404).json({msg:'The user does not exists'});
      
      const findUser = await Infos.findOne({where:{user_id:token}});

      if (!findUser) await Infos.create({id, user_id:token}) 

      findUser[information] = data;
      
      const findEndPointUser = await EndPoints.findOne({where:{user_id:token}});

      if (!findEndPointUser) throw new Error('CPF must be filled in before the other data')
    
      const next_end_point = await orderEndPoints(token,information)
      await findUser.save()
      
      return response.status(200).json({success:true,next_end_point})
    } catch (error) {
      return response.status(400).json({'Error':error.message})
    }
  }
}

module.exports = new InfosController()