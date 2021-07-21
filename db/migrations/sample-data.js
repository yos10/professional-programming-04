const statuses = [
  {
    statusCode: 0,
    label: '予約受付中',
  },
  {
    statusCode: 1,
    label: '準備中',
  },
  {
    statusCode: 2,
    label: '販売中',
  },
  {
    statusCode: 3,
    label: '販売終了',
  },
];

const products = [
  {
    productId: '1234567890001',
    name: 'キリン 一番搾り 350ml',
    category: '食品・飲料',
    price: 172,
    listPrice: 206,
    salesDate: '2001/04/03',
    statusCode: 2,
  },
  {
    productId: '1234567890002',
    name: 'キリン ラガービール 350ml',
    category: '食品・飲料',
    price: 179,
    listPrice: 206,
    salesDate: '2005/09/18',
    statusCode: 3,
  },
  {
    productId: '9784088825762',
    name: 'チェンソーマン 11',
    category: '書籍',
    price: 435,
    listPrice: 484,
    salesDate: '2021/03/04',
    statusCode: 0,
  },
];

module.exports = {
  statuses,
  products,
};
