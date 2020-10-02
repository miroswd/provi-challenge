const EndPoints = require("../app/models/EndPoints");

const orderEndPoints = async (token, info) => {
  
  const findEndPointUser = await EndPoints.findOne({where:{user_id:token}});
  
  if (!findEndPointUser) throw new Error('CPF must be filled in before the other data')
  
  const endPoints = await EndPoints.findOne({
    where:{user_id:token},
    attributes:{exclude:['id','user_id','createdAt','updatedAt']}}) ;
 
    const collumns = endPoints._options.attributes;

  for (let i =0; i < collumns.length; i++){
    
    if(info === 'cpf') {
      return collumns[i+1]
    } 
    
    if (i != 0 && endPoints[collumns[i-1]] === false){ 
      throw new Error(`Fill in ${collumns[i -1]} before ${info}`)
    }
    
    if (collumns[i] === info){
      findEndPointUser[info] = true
      findEndPointUser.save()
      return collumns[i+1]
    }  
  }
}

module.exports = orderEndPoints;