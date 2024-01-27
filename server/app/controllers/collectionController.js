const { Collection } = require('../models');

const index = async (req, res) => {
  const collections = await Collection.findAll()

  res.status(200).send({
    code: 200,
    data: collections
  })
}

const create = async (req, res) => {
  console.log(req)
  const { name, description } = req.body;

  const collection = await Collection.create({
    image: req.file.buffer,
    name,
    description
  })
}

module.exports = { index, create }