const Cart = require('../models/cartModel');
const Product = require('../models/productsModel');

// Add or update items in cart
const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    // Find the product
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        message: 'Product not found!'
      });
    }

    // Find or create cart
    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, items: [], totalPrice: 0 });
    }

    // Check if product already in cart
    const existingItemIndex = cart.items.findIndex(item =>
      item.productId.equals(productId)
    );

    if (existingItemIndex > -1) {
      // Update quantity if exists
      cart.items[existingItemIndex].quantity += quantity;
    } else {
      // Add new item
      cart.items.push({ productId, quantity });
    }

    // Recalculate totalPrice from scratch
    cart.totalPrice = 0;
    for (const item of cart.items) {
      const productData = await Product.findById(item.productId);
      if (productData) {
        cart.totalPrice += productData.price * item.quantity;
      }
    }

    await cart.save();

    res.status(200).json({
      success: true,
      cart
    });
  } catch (err) {
    next(err);
  }
};

// Remove or decrease quantity of item
const removeFromCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user.id;

    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found!' });
    }

    const itemIndex = cart.items.findIndex(item =>
      item.productId.equals(productId)
    );
    if (itemIndex === -1) {
      return res.status(404).json({ message: 'Item not in cart' });
    }

    const item = cart.items[itemIndex];
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    if (item.quantity > quantity) {
      item.quantity -= quantity;
    } else {
      cart.items.splice(itemIndex, 1);
    }

    // Recalculate total price
    cart.totalPrice = 0;
    for (const item of cart.items) {
      const productData = await Product.findById(item.productId);
      if (productData) {
        cart.totalPrice += productData.price * item.quantity;
      }
    }

    await cart.save();
    res.status(200).json({ success: true, cart });
  } catch (err) {
    next(err);
  }
};

// Get user's cart
const getCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id }).populate('items.productId');

    if (!cart) {
      return res.status(404).json({
        success: false,
        message: 'Cart not found!'
      });
    }

    res.status(200).json({
      success: true,
      cart
    });
  } catch (err) {
    next(err);
  }
};

// Clear cart
const clearCart = async (req, res, next) => {
  try {
    const cart = await Cart.findOne({ user: req.user.id });
    if (cart) {
      cart.items = [];
      cart.totalPrice = 0;
      await cart.save();
    }

    res.status(200).json({
      success: true,
      message: 'Cart cleared successfully'
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { addToCart, removeFromCart, getCart, clearCart };
