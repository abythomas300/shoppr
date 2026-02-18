const userModel = require('../models/User')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const bcrypt = require('bcrypt')

dotenv.config({path: '../.env'})

// sample data
const data = {
    username: 'admin',
    email: 'admin.shoppr@gmail.com',
    password: 'admin',
    firstName: 'Admin',
    lastName: '',
    role: 'admin',
    phone: '+919999999999'
}

// seeding function
async function adminSeeding(data) {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connection successful")
        // generate password hash
        const hash = await bcrypt.hash(data.password, 10)
        const adminData = {...data, password:hash}
        const newAdmin = await userModel.create(adminData)
        if(!newAdmin)
            throw new Error("admin seed failed, invalid data format")
        console.log("Admin seeded successfully")
        process.exit(0)
    }catch(error){
        console.log("Cannot seed admin, reason: ", error)
        process.exit(1)
    }

}

adminSeeding(data)