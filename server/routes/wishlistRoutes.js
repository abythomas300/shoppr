const express = require('express')
const router = express.Router()
const wishlistController = require('../controllers/wishlistController')
const verifyToken = require('../middleware/verifyToken')

router.get('/', verifyToken, wishlistController.getWishlist)
router.post('/add-to-wishlist', verifyToken, wishlistController.addToWishlist)

module.exports = router