import asyncHandler from '../middleware/asyncErrorHandler.js';
import productModel from '../models/ProductModel.js';


export const getAllProducts = asyncHandler( async (req, res) => {
  const products = await productModel.find({});
  res.json(products);
});

export const getProductById = asyncHandler( async (req, res) => {
  const product = await productModel.findById(req.params.id);

  if (product) {
    return res.json(product)
  }
  res.status(404)
  throw new Error(`Resource not found!`)
})