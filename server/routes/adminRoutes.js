const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const adminController = require('../controllers/adminController')

router.get('/all-products', adminController.getAllProducts)
router.post('/add-product', adminController.addProduct)
router.get('/all-users', adminController.getAllUsers)
router.post('/add-user', adminController.addUser)
router.get('/status', adminController.getStatus)

module.exports = router