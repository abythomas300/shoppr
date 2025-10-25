const mongoose = require("mongoose")

const cartSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    items: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
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

const Cart = mongoose.model("Cart", cartSchema)

module.exports = Cart