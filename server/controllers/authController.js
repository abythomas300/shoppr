const userModel = require('../models/User')
const bcrypt = require('bcrypt')
const OTPAuth = require('otpauth')
const nodemailer = require('nodemailer')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

// initialize transporter object (nodemailer)
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, 
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_KEY
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
        sendMail(token, userDetails)
        res.status(201).json({message: `OTP sent to ${userEmail} will be valid for 5 minutes.`, email: userEmail})
    }
    catch(error){
        console.log("User registration failed, reason: ", error)
        res.status(500).send("Failed to register user")
    }
}

async function sendMail(otp, userDetails) {
    const htmlTemplate = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f5f5;
          }
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
          }
          .header {
            background: #E4B343;
            color: white;
            padding: 30px 20px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .content {
            padding: 30px 20px;
          }
          .greeting {
            font-size: 16px;
            margin-bottom: 20px;
            color: #333;
          }
          .otp-section {
            background-color: #f9f9f9;
            border: 2px solid #E4B343;
            border-radius: 6px;
            padding: 25px;
            text-align: center;
            margin: 25px 0;
          }
          .otp-label {
            font-size: 13px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
            font-weight: 600;
          }
          .otp-code {
            font-size: 36px;
            font-weight: 700;
            color: #E4B343;
            letter-spacing: 4px;
            font-family: 'Courier New', monospace;
            margin: 15px 0;
          }
          .otp-info {
            font-size: 13px;
            color: #666;
            margin-top: 15px;
          }
          .security-notice {
            background-color: #fff3cd;
            border-left: 4px solid #ffc107;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
            font-size: 13px;
            color: #856404;
          }
          .instructions {
            background-color: #e7f3ff;
            border-left: 4px solid #2196F3;
            padding: 15px;
            margin: 20px 0;
            border-radius: 4px;
            font-size: 13px;
            color: #0c5aa0;
          }
          .footer {
            background-color: #f5f5f5;
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #999;
            border-top: 1px solid #eee;
          }
          .footer-links {
            margin-top: 10px;
          }
          .footer-links a {
            color: #667eea;
            text-decoration: none;
            margin: 0 10px;
          }
          .divider {
            height: 1px;
            background-color: #eee;
            margin: 20px 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Shoppr - Account Verification</h1>
          </div>
          
          <div class="content">
            <p class="greeting">Dear ${userDetails.firstName},</p>
            
            <p>Thank you for registering with us. To complete your account verification and secure your account, please use the one-time password (OTP) below.</p>
            
            <div class="otp-section">
              <div class="otp-label">Your Verification Code</div>
              <div class="otp-code">${otp}</div>
              <div class="otp-info">This code will expire in 5 minutes</div>
            </div>
            
            <div class="instructions">
              <strong>How to use this code:</strong>
              <p style="margin: 8px 0 0 0;">Enter this OTP in the verification field on our platform to complete your registration. Do not close the verification page until you have successfully entered the code.</p>
            </div>
            
            <div class="security-notice">
              <strong>⚠️ Security Notice:</strong>
              <p style="margin: 8px 0 0 0;">We will never ask you for this code via any other method. If you did not request this verification code, please ignore this email and contact our support team immediately.</p>
            </div>
            
            <div class="divider"></div>
            
            <p style="font-size: 13px; color: #666;">
              <strong>Did not create this account?</strong> If you believe this is a mistake, please contact our support team at <a href="mailto:abythomas300@gmail.com" style="color: #667eea; text-decoration: none;">abythomas300@gmail.com</a>
            </p>
            
          </div>
          
          <div class="footer">
            <p style="margin: 0;">© 2025 Shoppr. All rights reserved.</p>
            <div class="footer-links">
              <a href="https://www.github.com/abythomas300/shoppr">Privacy Policy</a>
              <a href="https://www.github.com/abythomas300/shoppr">Terms of Service</a>
              <a href="https://www.github.com/abythomas300/shoppr">Contact Us</a>
            </div>
            <p style="margin: 10px 0 0 0; color: #bbb;">This is an automated message, please do not reply to this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
  const plainTextTemplate = `
    Account Verification

    Dear ${userDetails.username},

    Thank you for registering with us. To complete your account verification and secure your account, please use the one-time password (OTP) below.

    Your Verification Code:
    ${otp}

    This code will expire in 5 minutes.

    SECURITY NOTICE:
    We will never ask you for this code via any other method. If you did not request this verification code, please ignore this email and contact our support team immediately.

    Did not create this account?
    If you believe this is a mistake, please contact our support team at support@yourapp.com

    © 2025 Shoppr. All rights reserved.
    This is an automated message, please do not reply to this email.
  `;
    try {
        const info = await transporter.sendMail({
            from: `"Shoppr E-commerce" <abythomas300@gmail.com>`,
            to: `${userDetails.email}`,
            subject: "Verify your account - One-Time Password(OTP)",
            text: plainTextTemplate,
            html: htmlTemplate
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
            // Generate JWT Token 
            const userInfoPayload = {id: userInfo._id, role: userInfo.role}
            const jwtToken = jwt.sign(userInfoPayload, process.env.JWT_SECRET_KEY, {expiresIn:'1hr'})
            // send cookie with JWT authentication credentials
            res.cookie('jwt', jwtToken, {
              httpOnly: true, 
              secure: false, 
              sameSite: 'strict',
              maxAge: 60*60*1000  // 1 hour
            })
            res.status(201).json({message: 'Login success, cookie sent', username: userInfo.username, token: jwtToken})
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
