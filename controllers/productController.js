'use strict';

const Product = require('../models/product');
const Status = require('../models/hannbai-status');

exports.getAllProducts = async (req, res) => {
  const products = await Product.findAll({
    include: [
      {
        model: Status,
      },
    ],
  });

  res.status(200).json({
    products,
  });
};
