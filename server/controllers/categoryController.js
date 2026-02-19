const categoryModel = require('../models/Category')

async function getCategories(req, res) {
    try {
        const categoryDetails = await categoryModel.find({}).select('_id name')
        res.status(200).json({success: true, categories: categoryDetails})
    } catch(error) {
        console.log("Cannot get categories, server error.")
        res.status(500).json({success: false, message: "Cannot get categories, server error"})
    }
}

module.exports = {
    getCategories
}