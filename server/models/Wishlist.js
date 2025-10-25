const mongoose = require('mongoose')

const wishlistSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
},{
    timestamps: true
})

const Wishlist = mongoose.model('wishlist', wishlistSchema)

module.exports = Wishlist