const express = require('express');
const routes = require('./routes');

require('./bootstrap');
require('./app/database');

const app = express();
app.use(express.json());
app.use(routes);

module.exports = app;
