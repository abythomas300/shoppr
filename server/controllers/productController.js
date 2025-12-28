const productModel = require('../models/Product')

async function getProducts(req, res) {
    try{
        const allProducts = await productModel.find({}).sort({createdAt: -1})
        res.status(200).json({success: true, products: allProducts})
    }catch(error){
        console.log("Cannot get products, reason: ", error)
    }
}

async function getProductById(req, res) {
    try {
        const targetProductId = req.params.id
        const targetProduct = await productModel.findById(targetProductId).populate('category')
        if(targetProduct) {
            console.log("Product found: ", targetProduct)
            res.status(200).json({success: true, data: targetProduct})
        } else {
            console.log("Product not found")
            res.status(404).json({success: false, data: null})
        }
    }catch(error) {
        console.log("Cannot get product, reason:", error)
        res.status(500).json({message: "Cannot get product, server error."})
    }
}

module.exports = {getProducts, getProductById}