const {Server} = require('socket.io')
const {verifyToken} = require('./middleware/verifyToken')
const {askGemini} = require('../controllers/chatbotController')

async function initializeWebSocket(httpServer) {
    
    const io = new Server(httpServer, {cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    } })

    // 'connection' event handler
    io.on('connection', async (socket)=>{
        console.log(`🟢 A client ${socket.id} connected.`) // test

        let jwtToken = null
        let parsedJwtToken = null

        if(socket.request.headers.cookie) {
            jwtToken = socket.request.headers.cookie.split('=')[1]

            parsedJwtToken = await verifyToken(jwtToken)

            // Token not verified
            if(!parsedJwtToken) {
                console.log("Token verification failed.")
                socket.disconnect()
            }
            
            socket.on('user_message', async (message)=>{
                console.log("User:", message) // test
                const llmResponse = await askGemini(message, parsedJwtToken.id)
                console.log("Bot:", llmResponse.split(' ')[0] + "...") // test
                socket.emit('bot_reply', llmResponse)
            })

            socket.on('disconnect', ()=>{
                console.log(`🔴 A client ${socket.id} disconnected.`)
            })

        }

    })

}

module.exports = {
    initializeWebSocket
}