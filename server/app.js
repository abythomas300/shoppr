const express = require('express')
const dotenv = require('dotenv')
const dbConfiguration = require('./config/db')
const expressSession = require('express-session')
const homeController = require('./controllers/homeController')

// package configurations
const app = express()
dotenv.config({path: '.env'})


// general middlewares
app.use(express.json())
app.use(expressSession({
    secret: process.env.SESSION_KEY,
    resave: false, 
    saveUninitialized: false
}))


// route handlers
app.get('/', homeController.displayHomepage)


// start server
app.listen(process.env.PORT, async ()=>{
    await dbConfiguration.connectDB() 
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log(`Access it at http://localhost:${process.env.PORT}`)
})