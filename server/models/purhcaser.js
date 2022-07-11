const mongoose = require('mongoose')
const purchaserSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Purchaser', purchaserSchema)