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

const Translation = mongoose.model('translations', translationSchema)

module.exports = Translation