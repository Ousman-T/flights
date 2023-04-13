const mongoose = require('mongoose');

// Schema

const flightSchema = new mongoose.Schema({
    airline: String, 
    category: {
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
    // departs: {
    //     type: Date,
    //     default: function(){
    //         const oneYear = new Date();
    //         oneYear.setFullYear(oneYear.getFullYear() + 1);
    //         return oneYear;
    //     }
    // }

},
{timestamps: true});

const Flight = mongoose.model('Flight', flightSchema);
module.exports = Flight;