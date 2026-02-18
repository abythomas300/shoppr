const productModel  = require('../models/Product')
const userModel = require('../models/User')
const orderModel = require('../models/Order')
const bcrypt = require('bcrypt')

async function getAllProducts(req, res) {
    try {
        const products = await productModel.find().populate('category');
        res.status(200).json({success: true, products: products })
    } catch(error) {
        console.log("Unable to get products data, server error")
        res.status(500).json({success: false, messgae: "Server error"})
    }
}

async function getAllUsers(req, res) {
    try {
        const users = await userModel.find({}, '-password -totpSharedKey');
        res.status(200).json({success: true, userDetails: {users} })
    } catch(error) {
        console.log("Unable to get user data, server error")
        res.status(500).json({success: false, messgae: "Server error"})
    }
}

async function getStatus(req, res) {
    try {
        const orders = await orderModel.find();
        const totalOrderWorth = orders.reduce((sum, order) => sum + order.totalAmount, 0);
        const totalOrders = orders.length;

        const totalUsers = await userModel.countDocuments();

        res.status(200).json({success: true, status:{totalOrderWorth, totalOrders, totalUsers} })
    } catch(error) {
        console.log("Unable to get status data, server error")
        res.status(500).json({success: false, messgae: "Server error"})
    }
}

async function addProduct(req, res) {
    try {
        const {title, slug, description, price, discount, category, brand, stock, imageLink} = req.body
        const newProduct = await productModel.create({title, slug, description, price, discount, category, brand, stock, images: [imageLink]})
        if(!newProduct)
            return res.status(500).json({success: false, message: "Cannot add product"})
        return res.status(201).json({success: true, message: "product added to db"})
    } catch(error) {
        console.log("Unable to add product, server error", error)
        res.status(500).json({success: false, message: "Server Error"})
    }
}

async function addUser(req, res) {
    try {
        const {username, firstName, lastName, email, password, phone} = req.body
        // generate password hash
        const hash = await bcrypt.hash(password, 10)
        console.log("password hashed!")
        const newUser = await userModel.create({username, firstName, lastName, email, password: hash, phone})
        if(!newUser)
            return res.status(500).json({success: false, message: 'Cannot add user'})
        return res.status(201).json({success: true, message: 'user created successfully'})
    } catch(error) {
        console.log("Unable to add user, server error", error)
        res.status(500).json({success: false, message: "Server Error"})
    }
}


module.exports = {
    getAllProducts,
    getAllUsers,
    getStatus,
    addProduct,
    addUser
}