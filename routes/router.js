'use strict';

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/products', productController.getAllProducts);
router.get('/products/:productId', productController.getProduct);

module.exports = router;
