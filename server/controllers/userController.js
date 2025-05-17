const User = require('../models/usersModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//Register a new user
const registerUser = async (req, res, next) => {
    try{
        const {
            name,
            email,
            password,
            role
        } = req.body;
    
        // Check if user already exists
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success: false,
                message: 'User already exists!',
            });
        }
    
        //hashing password
        const hashedPasswrod = await bcrypt.hash(password, 10);
    
        //creating a user
        const user = await User.create({
            name,
            email,
            password,
            role,
        });
    
        //generate JWT
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
    
        //response
        res.status(201).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        });
    }catch(err){
        next(err);
    };
};

 //User Login
 const loginUser = async(req, res, next) => {
    try{
        const {email, password} = req.body;
        // console.log("Request body:", req.body);
        // console.log("Password type:", typeof password);

        //find user by email
        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                sucess: false,
                message: "Invaild Email!",
            });
        }

        // console.log("Entered password:", password);
        // console.log("Stored hashed password:", user.password);

        
        //checking password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match result:", isMatch);
        if(!isMatch){
            return res.status(400).json({
                success: false,
                message: "Invalid Password !",
            });
        }


        //generate JWT
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        //response
        res.status(200).json({
            success: true,
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
            },
            token,
        });
    }catch(err){
        next(err);
    };
};

//get logged-in user profile
const getUserProfile = async(req, res, next) => {
    try{
        const user = await User.findById(req.user.id).select('-password');
        res.status(200).json({ 
            success: true, 
            user
        });
    }catch(err){
        next(err);
    };
};

module.exports = {registerUser, loginUser, getUserProfile};