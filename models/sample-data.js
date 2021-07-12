const statuses = [
  {
    statusCode: 0,
    label: '販売終了',
  },
  {
    statusCode: 1,
    label: '販売中',
  },
  {
    statusCode: 2,
    label: '予約受付中',
  },
];

const products = [
  {
    productId: '1234567890001',
    name: 'キリン 一番搾り 350ml',
    category: '食品・飲料',
    price: 172,
    listPrice: 206,
    salesDate: '2001-04-03T00:00:00.000Z',
    statusCode: 1,
  },
  {
    productId: '1234567890002',
    name: 'キリン ラガービール 350ml',
    category: '食品・飲料',
    price: 179,
    listPrice: 206,
    salesDate: '2005-09-18T00:00:00.000Z',
    statusCode: 0,
  },
];

module.exports = {
  statuses,
  products,
};
