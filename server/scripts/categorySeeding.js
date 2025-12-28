const categoryModel = require('../models/Category')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config({path: '../.env'})

const categories = [
    {
        name: 'category-name',
        description: 'category description',
        image: 'category-image-link',
        isActive: true
    }
]

// seeding function
async function categorySeeding(categories) {

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB Connection successful.")
        await categoryModel.insertMany(categories)
        console.log('Data seeding success.')
        process.exit(0)
    }catch(error){
        console.log("Cannot insert data, reason: ", error)
        process.exit(1)
    }

}

categorySeeding(categories)