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
async function selectedProducts(limits, offsets = 0) {
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
  });

  return amount;
}

function lastPage(pager) {
  const pages = pager.totalItems / pager.itemsPerPage;

  if (pager.totalItems % pager.itemsPerPage === 0) {
    return pages; 
  } else {
    return parseInt(pages) + 1;
  }
}

function previousPage(pager) {
  if (pager.currentPage !== 1) {
    return pager.currentPage - 1;
  } else {
    return null;
  }
}

function nextPage(pager) {
  if (pager.currentPage !== lastPage(pager)) {
    return pager.currentPage + 1;
  } else {
    return null;
  }
}

module.exports = {
  selectedProducts,
  totalItems,
  lastPage,
  previousPage,
  nextPage,
};

// CLI で実行して確認
// node sketch/pager01.js
(async () => {
  // const x = await selectedProducts(2);
  // console.log(JSON.stringify(x, null, 2));
  const pager = {
    totalItems: 101,  // await totalItems(),
    itemsPerPage: 10,
    currentPage: 8,
  };
  console.log('-------------------------------------------------------');
  console.log(`前のページ ${previousPage(pager)}`);
  for (let i = 1; i < lastPage(pager) + 1; i++) {
    if (i === pager.currentPage) {
      console.log(`${i} *`);
    } else {
      console.log(`${i}`);
    }
  }
  console.log(`次のページ ${nextPage(pager)}`);
  console.log(`最後のページ ${lastPage(pager)}`);
})();
