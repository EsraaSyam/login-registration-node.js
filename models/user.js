const mongoose = require('mongoose');
const joi = require('joi');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3,
        maxlength : 50
    },
    id :{
        type : number ,
        required : true,
        length : 14

    }
});


const User = mongoose.model('User', userSchema);

const validateUser = (user) => {
    const schema = joi.object({
        name : joi.string().min(3).max(50).required(),
        id : joi.number().length(14).required()
    });
    return schema.validate(user);
}

module.exports.User = User;
module.exports.validateUser = validateUser;

