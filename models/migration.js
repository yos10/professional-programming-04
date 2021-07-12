'use strict';

const Product = require('./product');
const Status = require('./hannbai-status');
const { products, statuses } = require('./sample-data');

// 参考にしたサイト
// Reactチュートリアル2：レビューサイトを作ろう
// https://zenn.dev/likr/articles/react-with-heroku

// Product.sync({ force: true }).then(async () => {
//   for (const { productId, name, category, price, listPrice, salesDate, statusCode } of products) {
//     await Product.create({ productId, name, category, price, listPrice, salesDate, statusCode });
//   }
// });

// Status.sync({ force: true }).then(async () => {
//   for (const { statusCode, label } of statuses) {
//     await Status.create({ statusCode, label });
//   }
// });

Product.sync({ force: true }).then(async () => {
  await Product.bulkCreate(
    products,
  );
});

Status.sync({ force: true }).then(async () => {
  await Status.bulkCreate(
    statuses,
  );
});
