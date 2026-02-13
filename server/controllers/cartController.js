const cartModel = require('../models/Cart')
const productModel = require('../models/Product')

async function addToCart(req, res) {
    try{

        // Get product details from db
        const productDetails = await productModel.findById(req.params.productId)

        // Get details (totalAmount) amount of that particular user's cart
        const usersCartDetails = await cartModel.findOne({userId: req.user.id})

        //If cart is empty 
        if(!usersCartDetails) {
            const cartData = {
                userId: req.user.id,
                items: [productDetails._id],
                totalAmount: productDetails.price - productDetails.discount
            }
            // add data to document
            await cartModel.create(cartData)
        }

        // If not empty
        if(usersCartDetails) {
            // Update field
            await cartModel.updateOne({userId: req.user.id}, {
                $push: {items: productDetails._id},
                $inc: {totalAmount: productDetails.price - productDetails.discount}
            })
        }

        res.status(200).json({success: true})
    }catch(error){
        console.log("Cannot add product to cart, reason:", error)
        res.status(500).json({ success: false, message: "Cannot add product to cart, server error.",})
    }
}

async function getCart(req, res) {
    try {
        const exist = await cartModel.exists({userId: req.user.id})
        if(!exist)
            return res.status(200).json({success: true, data: null, message: "This user's cart is empty."})

        const cartDetails = await cartModel.find({userId: req.user.id}).populate('items')

        res.status(200).json({success: true, data: cartDetails})
    } catch(error) {
        res.status(500).json({success: false, message: 'Cannot get cart details, Server Error'})
    }
}

async function getCartForLLM(user_id) {
    try {

        // When cart is empty
        if(!await cartModel.exists({userId: user_id}))
            return "This user has nothing saved in their cart"

        const cartDetails = await cartModel.find({userId: user_id}).select('items totalAmount updatedAt').populate('items') 
     
        // create clean object
        const cartDetailsClean = cartDetails.map((detail)=> ({
            productsInCart: detail.items.map((product)=>({name: product.title})),
            cartWorth: detail.totalAmount,
            lastUpdated: detail.updatedAt
        }))

        console.log("Cart details --> ", cartDetailsClean) // test
        
        return cartDetailsClean

    }catch(error) {
        console.log("Error getting cart info, reason: ", error)
        return "Cannot get cart info, server error"
    }
}

module.exports = {
    addToCart,
    getCart,
    getCartForLLM
}