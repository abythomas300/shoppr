const mongoose = require("mongoose")
const User = require('./User')
const Product = require('./Product')
const Payment = require('./Payment')

const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: Product
    }],
    shippingAddress: {
        addressLabel: {type: String, required: true},
        housename: {type: String, required: true},
        street: {type: String, required: true},
        city: {type: String, required: true},
        state: {type: String, required: true},
        pincode: {type: String, required: true},
        country: {type: String, required: true}
    },
    paymentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Payment
    },
    status: {
        type: String,
        enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
        default: 'Pending'
    },
    totalAmount: {
        type: Number,
        required: true
    },
    placedAt: {
        type: Date,
        default: Date.now
    }
})

const Order = mongoose.model('order', orderSchema)

module.exports = Order