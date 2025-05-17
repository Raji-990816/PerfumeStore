const Product = require('../models/productsModel');
const mongoose = require('mongoose');

//get all products
const getProducts = async (req, res, next) => {
    try{
        //Parse `page` and `limit` from query parameters, with defaults
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;

        //Calculate how many documents to skip
        const skip = (page-1)*limit

        //fetch needed fields, paginated
        const products = await Product.find()
            .skip(skip)
            .limit(limit)
            .select('name house description price stock image bestSellers releasedYear size gender createdAt')
            .sort({createdAt: -1});

        //count total documents
        const total = await Product.countDocuments();
        
        //return paginated response
        res.status(200).json({
            success: true,
            page,
            totalPages:Math.ceil(total/limit),
            totalItems: total,
            items: products
        });
    }catch(err){
        next(err);
    }
}

//get product by ID
const getProductById = async (req, res, next) => {
    try {
      const product = await Product.findById(req.params.id);
  
      if (!product) {
        //create a custom error with status
        const error = new Error('Product not found!');
        error.status = 404;
        return next(error);
      }

      res.status(200).json({
        success: true,
        data: product,
      });
    } catch (err) {
      next(err); 
    }
};

//creating a product
const createProduct = async(req, res, next) => {
    try{
        const {
            name,
            house,
            description,
            price,
            stock,
            bestSellers,
            size,
            gender
        } = req.body;

        if(!name || !house || !price || !stock){
            const error = new Error("Requied feilds are missing!");
            error.status = 400;
            return next(error);
        }

        const newProduct = await Product.create({
            name,
            house,
            description,
            price,
            stock,
            bestSellers,
            size,
            gender
        });

        res.status(201).json({
            success:true,
            data: newProduct
        });
    }catch(err){
        next(err);
    }
};

//update a product
const updateProduct = async(req, res, next) => {
    try{
        const {id} = req.params;

        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });

        if(!updatedProduct){
            const error = new Error('Product not found!');
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            data: updatedProduct

        });
    }catch(err){
        next(err);
    }

};

//delete a product
const deleteProduct = async(req, res, next) => {
    try{
        const {id} = req.params;

        const deleted = await Product.findByIdAndDelete(id);

        if(!deleted){
            const error = new Error('Product not found to delete!');
            error.status = 404;
            return next(error);
        }

        res.status(200).json({
            success: true,
            message: "Product deleted successfully!"
        });
    }catch(err){
        next(err);
    }
};

module.exports = {getProducts, getProductById, createProduct, updateProduct, deleteProduct};