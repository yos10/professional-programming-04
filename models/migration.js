'use strict';

const { sequelize } = require('./sequelize-loader');
const Product = require('./product');
const Status = require('./hannbai-status');
const { products, statuses } = require('./sample-data');

(async () => {
  await sequelize.sync({ force: true });
  await Product.bulkCreate(products);
  await Status.bulkCreate(statuses);
})();
