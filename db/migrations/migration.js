'use strict';

const { sequelize } = require('../models/sequelize-loader');
const Product = require('../models/product');
const Status = require('../models/hannbai-status');
const { products, statuses } = require('./sample-data');

(async () => {
  await sequelize.sync({ force: true });
  await Product.bulkCreate(products);
  await Status.bulkCreate(statuses);
})();
