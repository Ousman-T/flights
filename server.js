require('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3000;
const connectToDB = require('./config/db');
const Flight = require('./models/Flight');


//============ Configuring Engine
app.set('view engine', 'jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

/**
 * Middlewares
 */
app.use((req, res, next) => {
    console.log('I run on all routes!');
    next();
})
// Parsing incoming data from request
app.use(express.urlencoded({extended: false}));

// Home Page
app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Airport!</h1>');
});

/**
 * Index Route
 */
app.get('/flights', (req, res) => {
    Flight.find({}, (error, allFlights) => {
        res.render('Index', {flights: allFlights})
    })
})

/**
 * New Route
 */
app.get('/flights/new', (req, res) => {
    res.render('New');
});

/**
 * Post Method
 */
app.post('/flights', (req, res) => {
    Flight.create(req.body).then(flight => {
        res.send(flight)
    }).catch((error) => {
        console.error(error);
    });
});













//* app listener
app.listen(PORT, () => {
    console.log('Server is Up!');
    connectToDB();
});