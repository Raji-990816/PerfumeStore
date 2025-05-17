const express = require('express');
const { addToCart, removeFromCart, getCart, clearCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

//add items to cart
router.post('/add', protect, addToCart);
//remove items from cart
router.post('/remove', protect, removeFromCart);
//get the logged user's cart
router.get('/', protect, getCart);
//clear the cart
router.delete('/clear', protect, clearCart);

module.exports = router;
