const userModel = require('../models/User')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: '../.env'})

// sample data
const data = {
    username: 'admin',
    email: 'admin.shoppr@gmail.com',
    password: 'admin',
    firstName: 'Admin',
    role: 'admin',
    lastName: 'last-name',
    phone: '+919999999999',
    address: [{}]
}

// seeding function
async function userSeeding(data) {

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connection successful")
        const newUser = new userModel(data)  // creating a model instance
        const result = await newUser.save()
        console.log('Admin data inserted successfully!')
        console.log('returns: ', result)
        process.exit(0)
    }catch(error){
        console.log("Cannot insert data, reason: ", error)
        process.exit(1)
    }

}

userSeeding(data)