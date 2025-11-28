const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')


// route handlers
router.post('/signup', authController.registerUser)
router.post('/login', authController.loginUser)
router.post('/verify-otp', authController.verifyOTP)

// exporting module
module.exports = router