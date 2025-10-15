const express = require('express')
const dotenv = require('dotenv')
const dbConfiguration = require('./config/db')


// package configurations
const app = express()
dotenv.config({path: '.env'})


// general middlewares
app.use(express.json())


// route handlers
app.get('/', (req, res)=>{
    res.send("Test Success ✅")
    
})

app.post('/', (req, res)=>{
    res.send(req.body)
})


// start server
app.listen(process.env.PORT, async ()=>{
    await dbConfiguration.connectDB() 
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log(`Access it at http://localhost:${process.env.PORT}`)
})