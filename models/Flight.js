const mongoose = require('mongoose');

// Schema

const flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        required: true,
        enum: ['American', 'Southwest', 'United']
    },
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        required: true
    }

},
{timestamps: true});

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;