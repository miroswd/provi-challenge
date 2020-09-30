const Sequelize = require('sequelize');

const dbConfig = require('../../config/database'); 
const User = require('../models/User');
const Infos = require('../models/Infos');
const Address = require('../models/Address');
const AmountRequest = require('../models/AmountRequest');

const models = [User, Address, Infos, AmountRequest]

class Database {
  constructor(){
    this.init();
  }

  init(){
    this.connection = new Sequelize(dbConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models))
  }
}

module.exports = new Database();
