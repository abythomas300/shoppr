const productModel = require('../models/Product')
const orderModel = require('../models/Order')
const paymentModel = require('../models/Payment')
const { validateWebhookSignature } = require('razorpay/dist/utils/razorpay-utils');


async function verifyPayment(req, res) {
    try{
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, user_id, method, product_id } = req.body;

        const secret = process.env.RZR_PAY_SECRET_KEY;
        const body = razorpay_order_id + '|' + razorpay_payment_id;

        // Validating the signature send through request 
        const isValidSignature = validateWebhookSignature(body, razorpay_signature, secret);

        if (isValidSignature) {
            console.log("SIGNATURE VERIFIED ✅") // for test

            // Save payment record 
            const paymentDetails = {
                userId: user_id,
                method,
                transactionId: razorpay_payment_id,
                status:'Success'
            }
            paymentModel.create(paymentDetails) 
            console.log("payment record created successfully") // for test

            // Update order status  
            await orderModel.findOneAndUpdate({orderId: razorpay_order_id}, {status: 'paid'})
            console.log("Order status updated to: success") // for test

            // Reduce product stock by 1
            await productModel.findByIdAndUpdate(product_id, {$inc: {stock: -1} })
            console.log("Stock reduced by 1 for product: ", product_id)

            res.status(200).json({ status: 'ok' });
            console.log("Payment verification successful"); 
        } else {
            // Save payment record to db with status 'failed'
            res.status(400).json({ status: 'verification_failed' });
            console.log("Payment verification failed");
        }

    }catch(error){
        console.log("Cannot verify payment, server error: ", error)
        res.status(500).json({message: "Cannot verify payment, server error."})
    }
}

function paymentSuccess(req, res) {
    res.status(200).send("Payment to Shoppr success.")
}


module.exports = {
    placeOrder,
    verifyPayment,
    paymentSuccess
}