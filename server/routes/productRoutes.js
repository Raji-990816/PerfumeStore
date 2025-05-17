const express = require('express');
const {getProducts, getProductById, createProduct, updateProduct, deleteProduct} = require('../controllers/productController');
const router = express.Router();

//get all products
router.get('/', getProducts);

//get product by id
router.get('/:id', getProductById);

//create product
router.post('/', createProduct);

//update product
router.put('/:id', updateProduct);

//delete product
router.delete('/:id', deleteProduct);

module.exports = router;