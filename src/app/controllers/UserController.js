const {hash} = require('bcrypt');
const {v4} = require('uuid');

const User = require('../models/User');

class UserController {
  async store(request,response){
    try {
      const {email,password} = request.body;

      const checkUserExists = await User.findOne({where:{email}});

      if (checkUserExists) return response.status(400).json({msg:'E-mail already in use'});

      const passwordHash = await hash(password,8);

      const data = {
        id: v4(),
        email,
        password:passwordHash,
      }
      
      await User.create(data)
      delete data.password;

      return response.status(200).json({token:data.id})
    } catch (error) {
      return response.status(400).json({'ERROR':error})
    }
  }
}

module.exports = new UserController();