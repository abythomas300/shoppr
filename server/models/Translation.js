const mongoose = require("mongoose")

const translationSchema = new mongoose.Schema({
    languageCode: {
        type: String,
        required: true
    },
    key: {
        type: String, 
        required: true
    },
    value: {
        type: String, 
        required: true
    }
})

const Translation = mongoose.model('translation', translationSchema)

module.exports = Translation