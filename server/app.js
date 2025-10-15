const express = require('express')
const dotenv = require('dotenv')

const app = express()
dotenv.config({path: '.env'})

app.get('/', (req, res)=>{
    res.send("Test Success ✅")
    console.log(`Request received for ${req.url} using ${req.method} method`)
})

app.listen(process.env.PORT, ()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
    console.log(`Access it at http://localhost:${process.env.PORT}`)
})