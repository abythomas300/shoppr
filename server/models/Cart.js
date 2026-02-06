const mongoose = require("mongoose")
const User = require('./User')
const Product = require('./Product')

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
      required: true
    },
    items: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: Product
    }],
    totalAmount: {
      type: Number,
      default: 0
    }
  },
  { 
    timestamps: true
  }
)

const Cart = mongoose.model('cart', cartSchema)

module.exports = Cart