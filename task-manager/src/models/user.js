const mongoose = require('mongoose')
const validator = require("validator")

const User = mongoose.model('User', {
    password: {
        type: String,
        trim: true,
        required: true,
        minLength: 6,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error("Password cannot contain password")
            }
        }
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is Invalid")
            }
        }
    },
    age: {
        type: Number,
        required: true,
        default: 10,
        validate(value){
            if(value < 0){
                throw new Error("Age chosen is not eigible")
            }
        }
    }
})

module.exports = User