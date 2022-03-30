import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch add products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  //res.status(401);
  //throw new Error("Not Authenticated");
  return res.json(products);
});

// @desc Fetch a single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    return res.json(product);
  }
  res.status(404);
  throw new Error("Product Not Found");
});

export { getProducts, getProductById };
