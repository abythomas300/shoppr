const express = require('express')
const router = express.Router()
const cartController = require('../controllers/cartController')
const verifyToken = require('../middleware/verifyToken')

router.get('/', verifyToken, cartController.getCart)
router.post('/add-to-cart/:productId', verifyToken, cartController.addToCart)

module.exports = router