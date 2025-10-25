const mongoose = require("mongoose")

const paymentSchema = new mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    method: {
        type: String, 
        enum: ['Razorpay, Stripe', 'PayPal'],
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