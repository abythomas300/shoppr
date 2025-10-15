const express = require('express')
const dotenv = require('dotenv')
const dbConfiguration = require('./config/db')

const app = express()
dotenv.config({path: '.env'})

app.get('/', (req, res)=>{
    res.send("Test Success ✅")
    console.log(`Request received for ${req.url} using ${req.method} method`)
})

app.listen(process.env.PORT, async ()=>{
    await dbConfiguration.connectDB() 
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log(`Access it at http://localhost:${process.env.PORT}`)
})