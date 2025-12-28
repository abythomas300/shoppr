const userModel = require('../models/User')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: '../.env'})

// sample data
const data = {
    username: 'username',
    email: 'username@smtp-name.tld',
    password: 'password',
    firstName: 'first-name',
    // role  --skipped 
    // verified -- skipped
    lastName: 'last-name',
    phone: '+000000000000',
    address: [{
        addressLabel: 'address-1-label',
        housename: 'house-1-name',
        street: 'street-name',
        city: 'street-name',
        state: 'state-name',
        country: 'country-name',
        pincode: '90001'
    },
    {
        addressLabel: 'address-2-label',
        housename: 'house-2-name',
        street: 'street-name',
        city: 'city-2-name',
        state: 'state-2-name',
        country: 'country-2-name',
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