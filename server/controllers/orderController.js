const orderModel = require("../models/Order")

async function getOrders (req, res) {
    try{
        const targetUserId = req.body.userId
        console.log("REQUEST BODY -->", req.body)
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

module.exports = {getOrders}