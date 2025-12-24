const productModel = require('../models/Product')

async function getProducts(req, res) {
    try{
        const allProducts = await productModel.find({}).sort({createdAt: -1})
        res.status(200).json({success: true, products: allProducts})
    }catch(error){
        console.log("Cannot get products, reason: ", error)
    }
}

module.exports = {getProducts}