const { Product } = require('../models');

const index = (req, res) => {
  const { count, products } = Product.findAndCountAll();

  res.status(200).send({
    message: `${count || 0} Produtos encontrados`,
    data: products || null,
    code: 200
  })
}

const create = async (req, res) => {
  const { collectionId, name, description, price } = req.body;
  
  const product = await Product.create({
    image: req.file,
    collectionId,
    name,
    description,
    price
  })
}

module.exports = { index, create }