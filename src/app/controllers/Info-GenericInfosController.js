// Controller para informações do user que não tem uma lógica diferente
const { v4 } = require('uuid');
const Infos = require('../models/Infos');
const User = require('../models/User');

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
      
      await findUser.save()
      
      const infos  = await Infos.findOne({where:{user_id:token}})

      return response.status(200).json(infos)
    } catch (error) {
      return response.status(400).json(error)
    }
  }
}

module.exports = new InfosController()