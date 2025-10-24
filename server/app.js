const express = require('express')
const dotenv = require('dotenv')
const dbConfiguration = require('./config/db')
const expressSession = require('express-session')
const homeController = require('./controllers/homeController')
const authRouter = require('./routes/authRoutes')
const cors = require("cors")

// package configurations
const app = express()
dotenv.config({path: '.env'})


// general middlewares
app.use(cors())
app.use(express.json())
app.use(expressSession({
    secret: process.env.SESSION_KEY,
    resave: false, 
    saveUninitialized: false
}))


// route specific middlewares
app.use('/auth', authRouter)

// route handlers
app.get('/', homeController.displayHomepage)


// start server
app.listen(process.env.PORT, async ()=>{
    await dbConfiguration.connectDB() 
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log(`Access it at http://localhost:${process.env.PORT}`)
})