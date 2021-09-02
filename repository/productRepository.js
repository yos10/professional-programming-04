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

async function create(body) {
  const product = await Product.create(body);
}

async function destroy(productId) {
  const product = await Product.findOne({
    where: {
      productId: productId,
    },
  }).then(p => {
    p.destroy();
  });
}

module.exports = {
  findAll,
  findById,
  create,
  destroy
};
