const { hash } = require('bcrypt');
const { v4 } = require('uuid');

const User = require('../models/User');

class UserController {
  async store(request, response) {
    try {
      const { email, password } = request.body;

      const checkUserExists = await User.findOne({ where: { email } });

      if (checkUserExists) return response.status(400).json({ msg: 'E-mail already in use' });

       const passwordHash = await hash(password, 8);

       const data = {
         id: v4(),
         email,
         password:passwordHash,
       };

      await User.create(data);
      return response.json({ password:data.password, token:data.id });
    } catch (err) {
      return response.status(400).json({error:err});
    }
  }
}

module.exports = new UserController();
