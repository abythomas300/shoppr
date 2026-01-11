const express = require('express')
const router = express.Router()
const paymentController = require('../controllers/paymentController')

router.post('/verify-payment', paymentController.verifyPayment)
router.get('/payment-success', paymentController.paymentSuccess)

module.exports = router
