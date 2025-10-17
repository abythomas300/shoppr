const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')


// route handlers
router.get('/signup', authController.displaySignupPage)
router.post('/signup', authController.registerUser)
router.get('/login', authController.displayLoginPage)
router.post('/login', authController.loginUser)


// exporting module
module.exports = router