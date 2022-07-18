const mongoose = require('mongoose')
const apartmentSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    cost: {
        type: Number,
        required: true,
        default: 233000

    },
    purchaseDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    purchaser: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Apartment', apartmentSchema)