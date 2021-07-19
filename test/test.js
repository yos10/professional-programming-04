'use strict';

const request = require('supertest');
const app = require('../app');

describe('/products', () => {
  const expected = [{"productId":"1234567890001","name":"キリン 一番搾り 350ml","category":"食品・飲料","price":172,"listPrice":206,"salesDate":"2001-04-02T15:00:00.000Z","statusCode":2,"status":{"statusCode":2,"label":"販売中"}},{"productId":"1234567890002","name":"キリン ラガービール 350ml","category":"食品・飲料","price":179,"listPrice":206,"salesDate":"2005-09-17T15:00:00.000Z","statusCode":3,"status":{"statusCode":3,"label":"販売終了"}}];
  
  test('product 一覧が表示される', () => {
    return request(app)
      .get('/products')
      .expect(expected)
      .expect(200);
  });
});

describe('/product/:productId', () => {
  const productId = 1234567890001;
  const expected = {"productId":"1234567890001","name":"キリン 一番搾り 350ml","category":"食品・飲料","price":172,"listPrice":206,"salesDate":"2001-04-02T15:00:00.000Z","statusCode":2,"status":{"statusCode":2,"label":"販売中"}};
  
  test('product 単品が表示される', () => {
    return request(app)
      .get(`/products/${productId}`)
      .expect(expected)
      .expect(200);
  });
});