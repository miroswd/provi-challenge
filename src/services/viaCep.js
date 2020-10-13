const axios = require('axios');

const viaCep = axios.create({
  baseURL: 'https://viacep.com.br/ws',
});

module.exports = viaCep;
