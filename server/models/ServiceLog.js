const mongoose = require("mongoose")

const serviceLogSchema = new mongoose.Schema({
    serviceName: {
        type: String, 
        required: true
    },
    message: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['info', 'warn', 'error'],
        default: 'info'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const ServiceLog = mongoose.model('service_log', serviceLogSchema)

module.exports = ServiceLog