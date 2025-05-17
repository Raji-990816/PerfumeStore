const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
        minlength: 5,
        maxlength: 100,
    },
    house:{
        type: String,
        required: true,
        trim: true,
    },
    description:{
        type: String,
        required: true,
        maxlength: 1000,
    },
    price:{
        type: Number,
        required: true,
        min:0,
    },
    stock:{
        type: Number,
        required: true,
        min:0,
    },
    image:{
        type: String,
    },
    bestSellers:{
        type: Boolean,
        required: true,
    },
    releasedYear:{
        type:Number,
        required: true,
    },
    size:{
        type: String,
        required: true,
        match: /^[0-9]+(\s)?ml$/,
    },
    gender:{
        type: String,
        required: true,
        enum: ["Men", "Women", "Unisex"],
    },
}, {timestamps: true});

module.exports = mongoose.model('Product', productSchema);