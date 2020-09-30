function orderEndPoint(key,value){
  console.log(key, value)
  let endPoints = {
    cpf:false,
    full_name:false,
    birthday:false,
    phone_number:false,
    address:false,
    amount_requests:false,
  }

  let sequence = ['cpf', 'full_name', 'birthday', 'phone_number', 'address', 'amount_requests']

  let i =0;
  sequence.forEach(e => {
    if (i != 0 && endPoints[sequence[i -1]] === false) {
      throw new Error(`The '${sequence[i -1]}' field needs to be filled in before`)
    }
    endPoints[e] = true
    i++
  })
} 

orderEndPoint('add',true)

module.exports = orderEndPoint;