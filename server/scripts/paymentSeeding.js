const mongoose = require("mongoose")
const dotenv = require('dotenv')
const dbConfiguration = require('../config/db')
const paymentModel = require('../models/Payment')

dotenv.config({path: '../.env'})
const objectId = mongoose.Types.ObjectId

const paymentDetail = {
    userId: new objectId('692a05b42c355ec8b213489b'),
    method: 'Razorpay',
    transactionId: "zxcvbnmasdfghjkl0987609876"
}

async function orderSeeding(paymentDetail) {
    try {
        await dbConfiguration.connectDB()
        console.log("Data to be seeded -->", paymentDetail) // for test
        await paymentModel.insertOne(paymentDetail)
        process.exit(0)
    }catch(error) {
        console.log("Cannot insert data, reason: ", error)
        process.exit(1)
    }
}
// coding, reading and lifting.
orderSeeding(paymentDetail)

