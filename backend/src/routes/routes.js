// API REST de Categoria
const express = require('express');
const produtoController = require('../controller/produtoController');
const routes = express.Router();
const ProdutoController = require('../controller/produtoController');
const ProdutoMiddleware = require('../middlewares/ProdutoMiddleware');


/***** 
 * GET /produtos
 * Lista todos os produtos
 * */

routes.get('/produtos', ProdutoController.index)
routes.post('/produtos', ProdutoController.store)

routes.put('/produtos/:id', ProdutoMiddleware.validateId, produtoController.update)
routes.delete('/produtos/:id', ProdutoMiddleware.validateId, produtoController.delete)

module.exports = routes;