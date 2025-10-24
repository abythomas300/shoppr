const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Enter a valid email address']
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        match: [/^\+[1-9]\d{1,14}$/, 'Enter a valid phone number with country code'],  //E.164 standard
        unique: true
    },
    twoFactorEnabled: {
        type: Boolean,
        default: false
    },
    otp: {
        type: Number
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    address: [{  
        addressLabel: {type: String, required: true},
        housename: {type: String, required: true},
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        pincode: {type: String, required: true},
        country: {type: String, required: true}

    }],
    avatar: {
        type: String
    }
},
{
    timestamps: true
}
)

const userModel = mongoose.model('users', userSchema)

module.exports = userModel