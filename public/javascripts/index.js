'use strict';

const body = {
  // productId: 1234567899999,
  // name: 'テスト',
  // category: '食品・飲料',
  // price: 9000,
  // listPrice: 8888,
  // salesDate: '2021-04-02T15:00:00.000Z',
  // statusCode: 0
};

async function onSubmitForm(event) {
  event.preventDefault();
  console.log('ボタンが押されました。');
  const response = await fetch('http://localhost:8000', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  // ページをリロードして反映させる
  window.location = "/";
}

document.getElementById('form').addEventListener('submit', onSubmitForm);

document.getElementById('productId').addEventListener('change', (event) => {
  body.productId = event.target.value;
  console.log(JSON.stringify(body))
});

document.getElementById('productName').addEventListener('change', (event) => {
  body.name = event.target.value;
  console.log(JSON.stringify(body))
});

document.getElementById('category').addEventListener('change', (event) => {
  body.category = event.target.value;
  console.log(JSON.stringify(body))
});

document.getElementById('price').addEventListener('change', (event) => {
  body.price = event.target.value;
  console.log(JSON.stringify(body))
});

document.getElementById('listPrice').addEventListener('change', (event) => {
  body.listPrice = event.target.value;
  console.log(JSON.stringify(body))
});

document.getElementById('salesDate').addEventListener('change', (event) => {
  body.salesDate = event.target.value;
  console.log(JSON.stringify(body))
});

document.getElementById('statusCode').addEventListener('change', (event) => {
  body.statusCode = event.target.value;
  console.log(JSON.stringify(body))
});
