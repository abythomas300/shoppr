const mongoose = require("mongoose")

const chatSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    messages: [{
        sender: {
            type: String,
            enum: ['user', 'admin', 'bot']
        },
        message: {
            type: String
        },
        timestamp: {
            type: Date,
            default: Date.now
        }
    }]
})

const Chat = mongoose.model('chats', chatSchema)

module.exports = Chat