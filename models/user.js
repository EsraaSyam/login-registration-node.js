const mongoose = require('mongoose');
const joi = require('joi');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true,
        minlength : 3,
        maxlength : 50
    },
    id :{
        type : String,
        required : true,
        length : 14

    },

    phone_number : {
        type : String,
        required : true,
        length : 11
    },

    blood_type : {
        type : String,
        required : true,
        length : 2
    },

    isAdmin: Boolean
});

// userSchema.methods.generateAuthToken = function() { 
//     const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('jwtPrivateKey'));
//     return token;
// }
  

const User = mongoose.model('User', userSchema);

const validateUser = (user) => {
    const schema = joi.object({
        name : joi.string().min(3).max(50).required(),
        id : joi.string().length(14).required(),
        phone_number : joi.string().length(11).required(),
        blood_type : joi.string().length(2).required()
    });
    return schema.validate(user);
}


const validateSignin = (user) => {
    const schema = joi.object({
        name : joi.string().min(3).max(50).required(),
        id : joi.string().length(14).required()
    });
    return schema.validate(user);
}

module.exports.User = User;
module.exports.validateUser = validateUser;
module.exports.validateSignin = validateSignin;

