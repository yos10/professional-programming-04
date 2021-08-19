'use strict';

const repo = require('../repository/productRepository');

const getAllProducts = async (req, res) => {
  let products = await repo.findAll();
  products = products.map((p) => {
    return {
      name: p.name,
      status: p.status.label,
      taxIncludedPrice: taxIncludedPrice(p.price),
    };
  });

  res.render('products', { products });
};

const getIndex = async (req, res) => {
  const products = await repo.findAll();
  const productIds = products.map((p) => {
    return p.productId;
  });

  res.render('index', { productIds });
};

const apiProducts = async (req, res) => {
  const products = await repo.findAll();

  res.status(200).json(products);
};

const apiProduct = async (req, res) => {
  const product = await repo.findById(req.params.productId);

  res.status(200).json(product);
};

function taxIncludedPrice(price) {
  const taxRate = 0.1;
  return parseInt(price * (1 + taxRate), 10);
}

module.exports = {
  apiProducts,
  apiProduct,
  getAllProducts,
  getIndex,
  taxIncludedPrice,
};
