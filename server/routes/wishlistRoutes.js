const express = require('express')
const router = express.Router()
const wishlistController = require('../controllers/wishlistController')
const verifyToken = require('../middleware/verifyToken')

router.get('/', verifyToken, wishlistController.getWishlist)

module.exports = router