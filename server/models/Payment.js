const mongoose = require("mongoose")
const User = require('../models/User')

const paymentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    method: {
        type: String, 
        enum: ['Razorpay', 'Stripe', 'PayPal'],
        required: true
    },
    transactionId: {
        type: String
    },
    status: {
        type: String,
        enum: ['Pending', 'Success', 'Failed'],
        default: 'Pending'
    }
},{
    timestamps: true
})

const Payment = mongoose.model('payment', paymentSchema)

module.exports = Payment