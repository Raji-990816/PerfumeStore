const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password:{
        type: String,
        required: true,
        minlength: 6, 
    },
    role:{
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
    }
},{timestamps: true});

//hash password before saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to check password
userSchema.methods.matchPassword = async function(enterdPassword){
    return await bcrypt.compare(enterdPassword, this.password)
};

module.exports = mongoose.model('User', userSchema);