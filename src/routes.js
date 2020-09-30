const {Router} = require('express');

// Controllers
const UserController = require('./app/controllers/UserController');
const AddressController = require('./app/controllers/Info-AddressController');
const FullNameController = require('./app/controllers/Info-FullNameController');
const GenericInfosController = require('./app/controllers/Info-GenericInfosController');
const CpfController = require('./app/controllers/Info-CpfController');
const AmountRequestController = require('./app/controllers/AmountRequestController');

const routes = Router();

// User
routes.post('/user', UserController.store)

// Infos 
routes.post('/user/infos/full_name', FullNameController.store)
routes.post('/user/infos/cpf', CpfController.store)
routes.post('/user/infos/address', AddressController.store)
routes.post('/user/infos/:information', GenericInfosController.store)

// Amount Request
routes.post('/amount-request', AmountRequestController.store)

module.exports = routes;