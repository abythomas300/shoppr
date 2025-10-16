const userModel = require('../models/User')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: '../.env'})

// sample data
const data = {
    username: 'maverick',
    email: 'maverick@gmail.com',
    password: 'ilovegoose',
    firstName: 'Pete',
    // role  --skipped
    // verified -- skipped
    lastName: 'Mitchell',
    phone: '+91123456789',
    address: [{
        addressLabel: 'Office',
        housename: 'Sky house',
        street: 'Malibu Street',
        city: 'Los Angeles',
        state: 'California',
        country: 'USA',
        pincode: '90001'
    },
    {
        addressLabel: 'Home',
        housename: 'Home2',
        street: 'Street2',
        city: 'City2',
        state: 'State2',
        country: 'Country2',
        pincode: '1234567'
    }
]
}

// seeding function
async function userSeeding(data) {

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connection successful")
        const newUser = new userModel(data)  // creating a model instance
        const result = await newUser.save()
        console.log('Data inserted successfully!')
        console.log('returns: ', result)
        process.exit(0)
    }catch(error){
        console.log("Cannot insert data, reason: ", error)
        process.exit(1)
    }

}

userSeeding(data)