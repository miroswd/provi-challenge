const { v4 } = require('uuid');

const viaCep = require('../../services/viaCep');

// Models
const Address = require('../models/Address');
const Infos = require('../models/Infos');
const User = require('../models/User');
const EndPoints = require('../models/EndPoints');

// Utils
const orderEndPoints = require('../../utils/orderEndPoints')

class InfosController {
  async store(request,response){
    try {
      let {token, data} = request.body;
      let {cep, street, number, complement, city, state} = data;

      cep = cep.replace(/-/g,'')
      if (cep.length != 8) throw new Error('Invalid CEP')

      const user = await User.findByPk(token)
      if (!user) return response.status(404).json({msg:'The user does not exists'});
      
      let id = v4();
      
      const findUser = await Infos.findOne({where:{user_id:token}});

      if (!findUser) await Infos.create({id, user_id:token}) 

      const findEndPointUser = await EndPoints.findOne({where:{user_id:token}});
      
      if (!findEndPointUser) throw new Error('CPF must be filled in before the other data')

      const next_end_point = await orderEndPoints(token,'address')
      
      const findAddress = await Address.findOne({where:{user_id:token}});

      async function cepValidator(){
        try {
          const response = await viaCep.get(`/${cep}/json`)
          const viaCepData = response.data;

          const dataAddress = [street,city,state];
          const viaCepValues = ['logradouro','localidade','uf'];

          for (let i = 0; i < viaCepValues.length; i++){
            if (viaCepData[viaCepValues[i]].toUpperCase() !== dataAddress[i].toUpperCase()) {
              throw new Error(`${dataAddress[i]} is invalid to CEP`)
            }
          }
          return true;
        } catch (error) {
          throw new Error('Invalid CEP for Dates')
        }
      }

      await cepValidator();
      

      if (!findAddress) {
        data = {id, user_id:token, cep, street, number, complement, city, state}
        await Address.create(data)
      } else {  
        id = findAddress['id']
        findAddress['cep'] = cep;
        findAddress['street'] = street;
        findAddress['number'] = number;
        findAddress['complement'] = complement;
        findAddress['city'] = city;
        findAddress['state'] = state;

        await findAddress.save();
      }

      findUser['address'] = id;
      
      await findUser.save()

      return response.status(200).json({success:true, next_end_point})
    } catch (error) {
      return response.status(400).json({"Error":error.message})
    }
  }
}

module.exports = new InfosController()