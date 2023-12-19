const mongoose = require("mongoose");

const newUser = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true,
        // unique:true
    },
    phone:{
        type: Number,
        required: true,
        // unique: true
    },
    age:{
        type: Number,
        required:true
    },
    batch:{
        type: String,
        required: true,
    },
    paymentMonth:{
        type: Date,
        default: Date.now,
    }
})

const Register = new mongoose.model("Register", newUser);

module.exports = Register;