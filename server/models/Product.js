const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        index: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    brand: {
        type: String, 
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    images: [{
        type: String
    }],
    videos: [{
        type: String
    }],
    ratings: {
        type: Number,
        default: 0
    },
    reviewCount: {
        type: Number,
        default: 0
    },
    attributes: {
        color: [{type: String}],
        size: [{type: String}],
        material: [{type: String}]
    },
    isFeatured: {
        type: Boolean,
        default: false
    },
},
{
    timestamps: true
}
)

const productModel = mongoose.model('products', productSchema)

module.exports = productModel

