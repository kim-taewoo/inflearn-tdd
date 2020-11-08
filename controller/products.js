const productModel = require('../models/Product');
// const Product = require('../source-code/tdd-app/models/Product');

exports.createProduct = async (req, res, next) => {
  try {
    const createdProduct = await productModel.create(req.body);
    res.status(201).json(createdProduct);
  } catch (error) {
    next(error);
  }
};

exports.getProducts = async(req,res,next) => {
  
}