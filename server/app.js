const express = require('express')
const dotenv = require('dotenv')
const dbConfiguration = require('./config/db')
const expressSession = require('express-session')
const cors = require("cors")
const cookieParser = require('cookie-parser')
const authRouter = require('./routes/authRoutes')
const productRouter = require('./routes/productRoutes')
const orderRouter = require('./routes/orderRoutes')
const cartRouter = require('./routes/cartRoutes')
const paymentRouter = require('./routes/paymentRoutes')
const wishlistRouter = require('./routes/wishlistRoutes')
const adminRouter = require('./routes/adminRoutes')
const categoryRouter = require('./routes/categoryRoutes')
const homeController = require('./controllers/homeController')
const http = require('http')
const jwt = require('jsonwebtoken')
const {initializeWebSocket} = require('./socket/index')

// package configurations
const app = express()
const httpServer = http.createServer(app) // Passing express app object as request listener inorder to handle req and res.
dotenv.config({path: '.env'})

// general middlewares
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
}))
app.use(express.json())
app.use(cookieParser())
app.use(expressSession({
    secret: process.env.SESSION_KEY,
    resave: false, 
    saveUninitialized: false
}))

// route specific middlewares
app.use('/auth', authRouter)
app.use('/product', productRouter)
app.use('/orders', orderRouter)
app.use('/cart', cartRouter)
app.use('/payments', paymentRouter)
app.use('/wishlist', wishlistRouter)
app.use('/admin', adminRouter)
app.use('/category', categoryRouter)

// route handlers
app.get('/', homeController.displayHomepage)

// listen to incoming connections
httpServer.listen(process.env.PORT, async ()=>{
    await dbConfiguration.connectDB()
    console.log(`Server is listening for TCP requests at ::: http://localhost:${process.env.PORT}`)
})

console.log("Initializing web socket connection...") 
initializeWebSocket(httpServer)