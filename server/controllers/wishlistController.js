const wishlistModel = require('../models/Wishlist')

async function getWishlist(req, res) {
    try {
        const wishlistDetails = await wishlistModel.find().populate('items')
        // When no wishlist data is inside DB
        if(wishlistDetails.length === 0)
            return res.status(200).json({success: true, data:null, message: 'Wishlist DB is empty'})

        res.status(200).json({success: true, data: wishlistDetails})
    } catch(error) {
        console.log("Error in getting wishlist details, reason: ", error)
        res.status(500).json({success: false, message: 'Server error'})
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

         console.log("Results from getWishlistForLLM() ---> ", wishlistDetailsClean)
        return wishlistDetailsClean

    } catch(error) {
        console.log("Error getting wishlist info, reason: ", error)
        return "Cannot get wishlist info, server error"
    }
}

module.exports = {
    getWishlist,
    getWishlistForLLM
}