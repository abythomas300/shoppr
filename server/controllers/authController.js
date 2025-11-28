const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const OTPAuth = require('otpauth')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')

// initialize transporter object (nodemailer)
const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }
})

async function registerUser(req, res) {
    try{
        const rawUserInfo = req.body
        // generate shared secret key for totp 
        let totpSharedKey = new OTPAuth.Secret({ size: 20 });
        // generate password hash
        const hash = await bcrypt.hash(rawUserInfo.password, 10)
        const userInfoWithHashedPassword = {...rawUserInfo, password:hash, totpSharedKey: totpSharedKey.base32}  // replace plain password text with the hash
        const data = new userModel(userInfoWithHashedPassword)
        await data.save()
        console.log("User info saved to DB successfully")
        
        // generate TOTP instance
        const userEmail = rawUserInfo.email
        const userDetails = await userModel.findOne({email: userEmail})
        const totp = new OTPAuth.TOTP({
            issuer: 'Shoppr',
            label: userDetails.username,
            algorithm: 'SHA256',
            digits: 6,
            period: 60,
            secret: userDetails.totpSharedKey
        })
        const token = totp.generate()
        sendMail(token, userEmail)
        res.status(201).json({message: `OTP sent to ${userEmail} will be valid for 5 minutes.`, email: userEmail})
    }
    catch(error){
        console.log("User registration failed, reason: ", error)
        res.status(500).send("Failed to register user")
    }
}

async function sendMail(otp, userEmail) {
    try {
        await userModel.findOne({email: userEmail})
        const info = await transporter.sendMail({
            from: 'Shoppr.com admin- everything you need',
            to: `${userEmail}`,
            subject: "OTP for account registration - SHOPPR",
            text: `Your OTP for creating a Shoppr Account is ${otp}`,
            html: `<i>Welcome to Shoppr</i> <b> Your OTP for creating a Shoppr Account is <b>${otp}</b>`
        })
        console.log(`Mail send to ${info.accepted[0]} successfully.`)
        return
    }catch(error){
        console.log("Error in sending mail, reason: ", error)
        throw error
    }
}

async function verifyOTP(req, res) {
    try{
        const userInputOTP = req.body.otp
        const userEmail = req.body.email
        // generate totp instance
        const userDetails = await userModel.findOne({email: userEmail})
        const totp = new OTPAuth.TOTP({
            issuer: 'Shoppr',
            label: userDetails.username,
            algorithm: 'SHA256',
            digits: 6,
            period: 60,
            secret: userDetails.totpSharedKey
        })
        // validate OTP
        const delta = totp.validate({token: userInputOTP, window: 5})  // clock drift
        if(delta === null) {
            console.log('Wrong or Expired OTP. Validation failed')
            res.status(400).json({message: 'Wrong or Invalid OTP'})
        } else {
            console.log("OTP validation Success")
            res.status(201).json({message: 'OTP Verification Success'})
        }
    }catch(error){
        console.log("Error validating OTP, reason: ", error)
        res.status(500).send("OTP validation error")
    }
}

async function loginUser(req, res) {
    try{
        const emailInput = req.body.email
        const passwordInput = req.body.password
        // fetch user details from DB
        const userInfo = await userModel.findOne({email: emailInput})
        // check whether user exists
        if(userInfo === null) res.json({message: "User not found"})
        // comparing both hashes
        const isVerfied = await bcrypt.compare(passwordInput, userInfo.password)
        if(isVerfied) {
            // if passwords match
            console.log("User exists,passwords match,  login success")
            res.status(201).json({message: 'Login success', username: userInfo.username})
        } else {
            // if passwords does not match
            console.log("Passwords does not match.")
            res.json({message: 'Login Failed. Wrong Password'})
        }
    }
    catch(error){
        console.log("Login failed, reason: ", error)
        res.status(500).json({message: "Login faile"})
    }
}

// exporting module
module.exports = {
    registerUser,
    loginUser,
    verifyOTP
}
