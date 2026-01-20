import {io} from 'socket.io-client'

const socket = io('http://localhost:3000', {
    withCredentials: true
})

socket.on('connect', ()=>{
    console.log("Client connected to socket.io server")
})

socket.on('connect_error', ()=>{
    console.log("Connection lost, check your internet connection and try again.")
})

export default socket