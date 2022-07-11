const mongoose = require('mongoose')
const apartmentSchema = mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        default: 233000

    },
    purchaseDate: {
        type: Date,
        required: false
    },
    purchaser: {
        type: String,
        required: false
    }

})

module.exports = mongoose.model('Apartment', apartmentSchema)