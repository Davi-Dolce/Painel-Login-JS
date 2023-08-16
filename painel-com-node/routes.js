const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const { middlewarAlternativo } = require('./src/middlewares/middleware');

//  rotas da home
route.get('/', homeController.paginaInicial);
route.post('/', middlewarAlternativo, homeController.trataPost);


module.exports = route;