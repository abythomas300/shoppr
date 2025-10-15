const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: '.env'})

async function connectDB() {
    try{
        console.log("Connecting to local Mongo database....")
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connection successful")
    }
    catch(error){
        console.log("Connection Failed, reason: ", error)
    }
}   

module.exports = {connectDB}