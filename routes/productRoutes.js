const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productController');

router.get('/api/products', productsController.getAllProducts);
router.get('/api/products/:id', productsController.getProductById);
router.post('/api/products', productsController.addProduct);
router.put('/api/products/:id', productsController.updateProduct);
router.delete('/api/products/:id', productsController.deleteProduct);
router.delete('/api/products', productsController.deleteAllProducts);
router.get('/api/products', productsController.findByName);

module.exports = router;
