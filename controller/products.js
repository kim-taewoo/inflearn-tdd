const productModel = require('../models/Product');
// const Product = require('../source-code/tdd-app/models/Product');

exports.createProduct = async (req,res,next) => {
  const {name, description, price} = req.body;
  const newProduct = new productModel({name, description, price})
  const createdProduct = await newProduct.save();
  res.status(201).json(createdProduct)
};