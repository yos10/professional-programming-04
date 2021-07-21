'use strict';

const request = require('supertest');
const app = require('../app');
const { taxIncludedPrice } = require('../controllers/productController');

describe('/api/products', () => {
  const expected = [{"productId":"1234567890001","name":"キリン 一番搾り 350ml","category":"食品・飲料","price":172,"listPrice":206,"salesDate":"2001-04-02T15:00:00.000Z","statusCode":2,"status":{"statusCode":2,"label":"販売中"}},{"productId":"1234567890002","name":"キリン ラガービール 350ml","category":"食品・飲料","price":179,"listPrice":206,"salesDate":"2005-09-17T15:00:00.000Z","statusCode":3,"status":{"statusCode":3,"label":"販売終了"}}];
  
  test('product 一覧が表示される', () => {
    return request(app)
      .get('/api/products')
      .expect(expected)
      .expect(200);
  });
});

describe('/api/products/:productId', () => {
  const productId = 1234567890001;
  const expected = {"productId":"1234567890001","name":"キリン 一番搾り 350ml","category":"食品・飲料","price":172,"listPrice":206,"salesDate":"2001-04-02T15:00:00.000Z","statusCode":2,"status":{"statusCode":2,"label":"販売中"}};
  
  test('product 単品が表示される', () => {
    return request(app)
      .get(`/api/products/${productId}`)
      .expect(expected)
      .expect(200);
  });
});

describe('taxIncludedPrice()', () => {
  test('消費税込み価格', () => {
    expect(taxIncludedPrice(172)).toBe(189);
  });
});
