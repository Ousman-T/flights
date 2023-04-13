const mongoose = require('mongoose');

// Global Config
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

module.exports = function(){
    // connecting to mongoDB
    mongoose.set('strictQuery', true)
    mongoose.connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true})

    setTimeout(() => {
        db.close();
    }, 5000);
    // listen for errors on connection
    db.on('error', (error) => console.error(error))
    db.on('open', () => console.log('Connected to MongoDB!'))
    db.on('close', () => console.log('Mongo Disconnected'))
}