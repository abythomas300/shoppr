const wishlistModel = require('../models/Wishlist')

async function getWishlist(req, res) {
    try {
        // When user has nothing in wishlist
        if(!await wishlistModel.exists({userId: req.user.id})) 
            return res.status(200).json({success: true, wishlist: [], message: 'user has nothing in wishlist'})

        const wishlistDetails = await wishlistModel.find({userId: req.user.id}).populate('items')

        res.status(200).json({success: true, wishlist: wishlistDetails})
    } catch(error) {
        console.log("Error in getting wishlist details, reason: ", error)
        res.status(500).json({success: false, message: 'Server error'})
    }
}

async function addToWishlist(req, res) {
    try {
        // Get wishlist details from db
        const wishlistDetails = await wishlistModel.findOne({userId: req.user.id})

        // When wishlist is empty
        if(!wishlistDetails) {
            const wishlistData = {
                userId: req.user.id,
                items: [req.body.productId]
            }
            await wishlistModel.create(wishlistData)
        }

        // When wishlist is not empty
        if(wishlistDetails) {
            // update field
            await wishlistModel.updateOne({userId: req.user.id}, {
                $push: {items: req.body.productId}
            })
        }

        res.status(201).json({success: true})

    } catch(error) {
        console.log("Cannot add products to wishlist")
        return res.status(500).json({success: false, message: "Cannot add product to wishlist, server error."})
    }
}

async function getWishlistForLLM(user_id) { 
    try {
        // When wishlist is empty
        if(!await wishlistModel.exists({userId: user_id}))
            return "This user has no products saved in their wishlist"

        const wishlistDetails = await wishlistModel.find({userId: user_id}).select('items updatedAt').populate('items') 
     
        // create clean object
        const wishlistDetailsClean = wishlistDetails.map((detail)=> ({
            productsInWishlist: detail.items.map((product)=>({name: product.title})),
            lastUpdated: detail.updatedAt
        }))

        return wishlistDetailsClean

    } catch(error) {
        console.log("Error getting wishlist info, reason: ", error)
        return "Cannot get wishlist info, server error"
    }
}

module.exports = {
    getWishlist,
    getWishlistForLLM,
    addToWishlist
}