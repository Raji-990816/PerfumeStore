const mongoose = require('mongoose');
const Product = require('../models/productsModel');
const User = require('../models/usersModel');

const cartItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        default: 1
    }
});

const cartSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    },
    items:[cartItemSchema],
    totalPrice:{
        type: Number,
        default: 0
    }
}, {timestamps: true});

module.exports = mongoose.model('Cart', cartSchema);