function cpfValidator(cpf){
  cpf = cpf.replace(/\.|-/g,'')

  if (cpf.length > 11) throw new Error('Invalid CPF')
  
  let sum = 0;
  for (let i = 0; i < 9; i++){
    sum += cpf[i] * (10 - i);
  }
  
  let result = sum * 10 % 11
  
  if (result == 10){
    result = 0;
  }
  
  if (cpf[9] != result) throw new Error('Invalid CPF')
  
  // Validando segundo dígito
  sum = 0;
  for (let i = 0; i < 10; i++){
    sum += cpf[i] * (11 - i);
  }
  
  result = sum * 10 % 11
  
  if (cpf[10] != result) throw new Error('Invalid CPF')
  
  return true;
}

module.exports = cpfValidator;
