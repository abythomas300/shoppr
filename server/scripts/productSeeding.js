const productModel = require('../models/Product')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: '../.env'})
const ObjectId = mongoose.Types.ObjectId
// Sample data
const products = [
    {
        title: "product-title",
        slug: "product-slug",
        description: "product-description",
        price: 0,
        discount: 0,
        category: new ObjectId("000000000000000000000000"),
        brand: "product-brand",
        stock: 0,
        images: [ 'image-link-1','image-link-2'],
        videos: ['video-link'],
        ratings: 0.5,
        reviewCount: 0,
        attributes: {
          color: ["color-1", "color-2"],
          size: ['size-1, size-2'],
          material: ["material-1", "material-2"]
        },
        isFeatured: true
    }
]

// seeding function
async function productSeeding(products) {

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connection successful.")
        await productModel.insertMany(products)
        console.log('Data seeding success.')
        process.exit(0)
    }catch(error){
        console.log("Cannot insert data, reason: ", error)
        process.exit(1)
    }

}

productSeeding(products)