const userModel = require('../models/User')
const bcrypt = require('bcrypt')

function displaySignupPage(req, res) {
    res.send("Shoppr Signup Page ✅")
}

async function registerUser(req, res) {
    try{
        const rawUserInfo = req.body 
        console.log(rawUserInfo)
        // generating password hash
        const hash = await bcrypt.hash(rawUserInfo.password, 10)
        const userInfoWithHashedPassword = {...rawUserInfo, password:hash}  // replacing password field with the password hash
        const data = new userModel(userInfoWithHashedPassword)
        await data.save()
        console.log("User info saved to DB successfully")
        res.status(200).send("Registration Successful")
    }
    catch(error){
        console.log("User registration failed, reason: ", error)
        res.status(500).send("Failed to register user")
    }
}

function displayLoginPage(req, res) {
    res.send("Shoppr Login Page ✅")
}

async function loginUser(req, res) {
    try{
        const usernameInput = req.body.username
        const passwordInput = req.body.password
        // fetching user details from DB
        const userInfo = await userModel.findOne({username: usernameInput})
        // comparing both hashes
        const isVerfied = await bcrypt.compare(passwordInput, userInfo.password)
        if(isVerfied) {
            // if passwords match
            req.session.user = {
                username: userInfo.username,
                role: userInfo.role,
                isVerfied: userInfo.isVerified,
            }
            console.log("Login success\nSession Created: ", req.session.user)
            res.send("Login Success ✅")
        } else {
            // if passwords does not match
            console.log("Passwords does not match.")
            res.send("Wrong Password. Check your password and try again.")
        }
    }
    catch(error){
        console.log("Login failed, reason: ", error)
        res.send("Login failed, try again later.")
    }
}


// exporting module
module.exports = {
    displaySignupPage,
    displayLoginPage,
    registerUser,
    loginUser
}
