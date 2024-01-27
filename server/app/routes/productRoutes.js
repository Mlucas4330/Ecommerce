const { Router } = require("express");
const { index, create } = require('../controllers/productController.js');

const productRouter = Router()

productRouter.get('/products', index)
productRouter.post('/product/create', create)

module.exports = productRouter