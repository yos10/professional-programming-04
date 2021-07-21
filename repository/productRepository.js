'use strict';

const Product = require('../db/models/product');
const Status = require('../db/models/hannbai-status');

async function findAll() {
  const products = await Product.findAll({
    include: [
      {
        model: Status,
      },
    ],
    order: [['productId', 'ASC']],
  });

  return products;
}

async function findById(productId) {
  const product = await Product.findOne({
    include: [
      {
        model: Status,
      },
    ],
    where: {
      productId: productId,
    },
  });

  return product;
}

module.exports = {
  findAll,
  findById,
};
