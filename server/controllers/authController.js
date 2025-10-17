const userModel = require('../models/User')
const bcrypt = require('bcrypt')

function displaySignupPage(req, res) {
    res.send("Shoppr Signup Page ✅")
}

async function registerUser(req, res) {
    try{
        const rawUserInfo = req.body 
        // generating password hash
        const hash = await bcrypt.hash(rawUserInfo.password, 10)
        const userInfoWithHashedPassword = {...rawUserInfo, password:hash}  // replacing password field with the password hash
        const data = new userModel(userInfoWithHashedPassword)
        await data.save()
        console.log("User info saved to DB successfully")
        res.send("Registration Successful")
    }
    catch(error){
        console.log("User registration failed, reason: ", error)
        res.send("Failed to register user")
    }
}

function displayLoginPage(req, res) {
    res.send("Shoppr Login Page ✅")
}

function loginUser(req, res) {
    res.send("This function will handle user login ✅")
}


// exporting module
module.exports = {
    displaySignupPage,
    displayLoginPage,
    registerUser,
    loginUser
}
