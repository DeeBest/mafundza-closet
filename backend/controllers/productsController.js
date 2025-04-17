const Product = require('../models/productModel');

const getAllProducts = async (req, res) => {
  const products = await Product.find();

  if (!products || products.length === 0) {
    return res.status(404).json({ message: 'No products were found' });
  }

  const numberOfProducts = await Product.countDocuments();

  res.status(200).json({ message: 'Success', numberOfProducts, products });
};

const addProduct = async (req, res) => {
  const {
    productTitle,
    productPrice,
    productDesc,
    productCategory,
    productImage,
  } = req.body;

  if (
    !productTitle ||
    !productPrice ||
    !productDesc ||
    !productCategory ||
    !productImage
  ) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  const duplicate = await Product.findOne({ productTitle }).exec();

  if (duplicate) {
    return res
      .status(409)
      .json({ message: `A product with ${productTitle} title already exists` });
  }

  const newProduct = await Product.create({
    productCategory,
    productImage,
    productDesc,
    productPrice,
    productTitle,
  });

  res.status(201).json({ message: 'Success', newProduct });
};

module.exports = {
  getAllProducts,
  addProduct,
};
