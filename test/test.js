'use strict';

const request = require('supertest');
const app = require('../app');
const { taxIncludedPrice } = require('../controllers/productController');
const Pager = require('../sketch/pager01');

describe('/api/products', () => {
  // const expected = [{"productId":"1234567890001","name":"キリン 一番搾り 350ml","category":"食品・飲料","price":172,"listPrice":206,"salesDate":"2001-04-02T15:00:00.000Z","statusCode":2,"status":{"statusCode":2,"label":"販売中"}},{"productId":"1234567890002","name":"キリン ラガービール 350ml","category":"食品・飲料","price":179,"listPrice":206,"salesDate":"2005-09-17T15:00:00.000Z","statusCode":3,"status":{"statusCode":3,"label":"販売終了"}},{"productId":"9784088825762","name":"チェンソーマン 11","category":"書籍","price":435,"listPrice":484,"salesDate":"2021-03-03T15:00:00.000Z","statusCode":0,"status":{"statusCode":0,"label":"予約受付中"}}];

  test('product 一覧が表示される', () => {
    return request(app)
      .get('/api/products')
      .expect('Content-type', 'application/json; charset=utf-8')
      .expect(/"productId":"1234567890001"/)
      .expect(/"name":"キリン 一番搾り 350ml"/)
      .expect(/"category":"食品・飲料"/)
      .expect(/"price":172/)
      .expect(/"listPrice":206/)
      .expect(/"salesDate":"2001-04-02T15:00:00.000Z"/)
      .expect(/"statusCode":2/)
      .expect(/"label":"販売中"/)
      .expect(/"productId":"9784088825762"/)
      .expect(/"name":"チェンソーマン 11"/)
      .expect(/"category":"書籍"/)
      .expect(/"price":435/)
      .expect(/"listPrice":484/)
      .expect(/"salesDate":"2021-03-03T15:00:00.000Z"/)
      .expect(/"statusCode":0/)
      .expect(/"label":"予約受付中"/)
      .expect(200);
  });
});

describe('/api/products/:productId', () => {
  const productId = 1234567890001;
  // const expected = {"productId":"1234567890001","name":"キリン 一番搾り 350ml","category":"食品・飲料","price":172,"listPrice":206,"salesDate":"2001-04-02T15:00:00.000Z","statusCode":2,"status":{"statusCode":2,"label":"販売中"}};

  test('product 単品が表示される', () => {
    return request(app)
      .get(`/api/products/${productId}`)
      .expect('Content-type', 'application/json; charset=utf-8')
      .expect(/"productId":"1234567890001"/)
      .expect(/"name":"キリン 一番搾り 350ml"/)
      .expect(/"category":"食品・飲料"/)
      .expect(/"price":172/)
      .expect(/"listPrice":206/)
      .expect(/"salesDate":"2001-04-02T15:00:00.000Z"/)
      .expect(/"statusCode":2/)
      .expect(/"label":"販売中"/)
      .expect(200);
  });
});

describe('#taxIncludedPrice()', () => {
  test('消費税込み価格', () => {
    expect(taxIncludedPrice(172)).toBe(189);
  });
});

describe('sketch/pager01.js', () => {
  test('ページャー', () => {
    const pager = {
      totalItems: 101,
      itemsPerPage: 10,
      currentPage: 8,
    };
    expect(Pager.previousPage(pager)).toBe(7);
    expect(Pager.nextPage(pager)).toBe(9);
    expect(Pager.lastPage(pager)).toBe(11);
  });
  test('ページャー 現在のページが最初のページ', () => {
    const pager = {
      totalItems: 101,
      itemsPerPage: 10,
      currentPage: 1,
    };
    expect(Pager.previousPage(pager)).toBe(null);
    expect(Pager.nextPage(pager)).toBe(2);
    expect(Pager.lastPage(pager)).toBe(11);
  });
  test('ページャー 現在のページが最後のページ', () => {
    const pager = {
      totalItems: 101,
      itemsPerPage: 10,
      currentPage: 11,
    };
    expect(Pager.previousPage(pager)).toBe(10);
    expect(Pager.nextPage(pager)).toBe(null);
    expect(Pager.lastPage(pager)).toBe(11);
  });
});

describe('/', () => {
  test('POST のテスト', () => {
    return request(app)
      .post('/')
      .send({
        productId: 1234567899999,
        name: 'テスト',
        category: '食品・飲料',
        price: 1000,
        listPrice: 1100,
        salesDate: '2021-04-02T15:00:00.000Z',
        statusCode: 0
      })
  });
});

describe('put /api/products/:productId', () => {
  test('PUT のテスト', () => {
    return request(app)
      .put('/api/products/1234567899999')
      .send({
        name: 'アップデートしました',
        category: 'アップデートしました',
        price: 8888,
        listPrice: 9999,
        salesDate: '2021-12-02T15:00:00.000Z',
        statusCode: 1
      })
  });
});


describe('delete /api/products/:productId', () => {
  test('DELETE のテスト', () => {
    return request(app)
      .delete('/api/products/1234567899999')
  });
});
