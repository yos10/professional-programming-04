'use strict';

const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

/* GET home page. */
router.get('/', productController.getIndex);
router.post('/', productController.postProduct);

router.get('/products', productController.getAllProducts);

router.get('/api/products', productController.apiProducts);
router.get('/api/products/:productId', productController.apiProduct);

module.exports = router;
