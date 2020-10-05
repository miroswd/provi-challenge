require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
})
const express = require('express');

const routes = require('./routes');

require('./app/database');
const app = express();
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
  console.log('Rodando')
})