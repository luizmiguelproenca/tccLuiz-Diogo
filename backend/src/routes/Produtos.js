// API REST de Categoria
const express = require('express')
const routes = express.Router();
const ProdutoController = require('../controller/produtoController');


/***** 
 * GET /produtos
 * Lista todos os produtos
 * */

routes.get('/produtos', ProdutoController.index)
routes.post('/produtos', ProdutoController.store)

module.exports = routes;