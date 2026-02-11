const orderModel = require("../models/Order")
const RazorPay = require('razorpay')

async function getOrders (req, res) {
    try{
        const targetUserId = req.body.userId
        const targetOrders = await orderModel.find({userId: targetUserId}).populate('orderItems')
        // Check if user has no order history
        if(targetOrders.length === 0){
            console.log("This user has no order history")
            return res.status(200).json({success: false})
        }
        res.status(200).json({success: true, orders: targetOrders})
    }catch(error){
        console.log("Cannot get order data, server error", error)
        res.status(500).json({message: "Cannot get orders, server error"})
    }
}

async function createOrder (req, res) {
    try{
        console.log("REQ.BODY: ", req.body) // for test
        // Detect the payment gateway
        switch(req.query.gateway) {
            case "razorpay": {

                // Create a RazorPay instance 
                const rzrpay = new RazorPay({
                    key_id: process.env.RZR_PAY_KEY,
                    key_secret: process.env.RZR_PAY_SECRET_KEY
                })

                // Random receipt number generation
                const min = 1000000; 
                const max = 9999999; 
                const receiptNumber = `#${Math.floor(Math.random() * (max - min + 1)) + min}`

                const {amount, currency, notes} = req.body

                const options = {
                    amount: amount * 100,
                    currency,
                    receipt: receiptNumber,
                    notes
                }

                // create orderId
                const order = await rzrpay.orders.create(options)

                const orderDetails = {
                    orderId: order.id,
                    receipt: receiptNumber,
                    userId: req.body.userId,
                    orderItems: [req.body.productId],
                    shippingAddress: req.body.address,
                    status: order.status,
                    totalAmount: req.body.amount
                }

                // Save to DB
                await orderModel.create(orderDetails)

                return res.status(201).json({success: true, order})
            }
            case "stripe": {
                console.log("stripe")
                return res.status(201).json({success: true})
            }
            case "paypal": {
                console.log("paypal")
                return res.status(201).json({success: true})
            }
            default:
                console.log("Invalid Gateway detected: ", req.query.gateway? req.query.gateway: "(empty)")
                return res.status(400).json({message: "Invalid Gateway"})
        }
    }catch(error){
        console.log("Cannot create order, server error: ", error)
        res.status(500).json({message: "Cannot create order, Server Error"})
    }
}

async function getOrderForLLM(userId) {
    try{
        const orderDetails = await orderModel.find({userId: userId}).select('shippingAddress.addressLabel orderItems status totalAmount placedAt').populate('orderItems')

        // When no order history found
        if(orderDetails.length === 0) {
            return "No order found for this user"
        }

        // Selecting only necessary fields from order details
        const orderDetailsClean = orderDetails.map((order)=>({
            orderId: order._id,
            shippingAddress: order.shippingAddress,
            orderStatus: order.status,
            orderAmout: order.totalAmount,
            orderPlacedDate: order.placedAt,
            // Selecting only necessary fields from 'orderItems' sub-array
            orderItems: order.orderItems.map((item)=>({
                name: item.title,
                description: item.description,
                price: item.price,
                discount: item.discount,
                averageRating: item.ratings
            }))
        }))
        return orderDetailsClean
    }catch(error){
        console.log("Error getting order info, reason: ", error)
        return "Cannot get order info, server error"
    }
}

module.exports = {
    getOrders,
    createOrder,
    getOrderForLLM
}