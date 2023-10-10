const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FellSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    climbed: {
        type: Boolean,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Fell', FellSchema)

