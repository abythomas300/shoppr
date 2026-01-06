const mongoose = require("mongoose")
const User = require('./User')
const Product = require('./Product')
const Payment = require('./Payment')

const orderSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: true
    },
    receipt: {
        type: String,
        required: true
    },
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
    status: {
        type: String,
        enum: ['created', 'paid', 'Shipped', 'delivered', 'cancelled'],
        default: 'created'
    },
    paymentDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Payment
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