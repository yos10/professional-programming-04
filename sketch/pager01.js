/*
pager = {
  totalItems: 3,
  itemsPerPage: 2,
  currentPage: 1,
};

for (let i = 1; i < pager.totalItems + 1; i++) {
  if (i === pager.currentPage) {
    console.log(`${i} *`);
  } else {
    console.log(`${i}`);
  }
}
*/

'use strict';

const { sequelize } = require('../db/models/sequelize-loader');
const Product = require('../db/models/product');
const Status = require('../db/models/hannbai-status');

Status.hasOne(Product, { foreignKey: 'statusCode', targetKey: 'statusCode' });
Product.belongsTo(Status, { foreignKey: 'statusCode', targetKey: 'statusCode' });
(async () => {
  await sequelize.sync();
})();

/**
 * products から件数と開始位置を指定して取得
 * @param {number} limits 
 * @param {number} offsets 
 */
async function limitedProducts(limits, offsets = 0) {
  const products = await Product.findAll({
    include: [
      {
        model: Status,
      },
    ],
    limit: limits,
    offset: offsets,
    order: [['productId', 'ASC']],
  });

  return products;
}

async function totalItems() {
  const amount = await Product.count({
    include: [
      {
        model: Status,
      },
    ],
    order: [['productId', 'ASC']],
  });

  return amount;
}

module.exports = {
  limitedProducts,
};


// CLI で実行して確認
// node sketch/pager01.js
(async () => {
  const x = await limitedProducts(2);
  console.log(JSON.stringify(x, null, 2));
  const y = await totalItems();
  console.log(y);
})();
