const express = require('express')
const app = express()

const port = 3000

app.get('/', ()=>{
    console.log("Request received")
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
    console.log(`Access it at http://localhost:${port}`)
})