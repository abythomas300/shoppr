const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')
const verifyToken = require('../middleware/verifyToken')

// route handlers
router.post('/signup', authController.registerUser)
router.post('/login', authController.loginUser)
router.post('/verify-otp', authController.verifyOTP)
router.get('/dashboard', verifyToken, authController.dashboardTest) // for test
router.get('/verify-access', verifyToken, authController.verifyAccess)

// exporting module
module.exports = router