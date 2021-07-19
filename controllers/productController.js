'use strict';

const Product = require('../db/models/product');
const Status = require('../db/models/hannbai-status');

const getAllProducts = async (req, res) => {
  const products = await Product.findAll({
    include: [
      {
        model: Status,
      },
    ],
  });

  res.status(200).json(products);
};

const getProduct = async (req, res) => {
  const product = await Product.findOne({
    include: [
      {
        model: Status,
      },
    ],
    where: {
      productId: req.params.productId,
    },
  });

  res.status(200).json(product);
};

module.exports = {
  getAllProducts,
  getProduct,
};
