const orderModel = require('../models/Order')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const dbConfiguration = require('../config/db')

dotenv.config({path: '../.env'})
const objectId = mongoose.Types.ObjectId

const orders = [
    {
        userId: new objectId('692a05b42c355ec8b213489b'),
        orderItems: [new objectId('694fbde1596eec60f8129833')],
        shippingAddress: new objectId('692a05b42c355ec8b213489b'),
        // paymentId: new objectId('') 
        totalAmount: 5160
    }
]

async function orderSeeding(orders) {
    try {
        await dbConfiguration.connectDB()
        await orderModel.insertMany(orders)
        process.exit(0)
    }catch(error) {
        console.log("Cannot insert data, reason: ", error)
        process.exit(1)
    }
}

orderSeeding(orders)

