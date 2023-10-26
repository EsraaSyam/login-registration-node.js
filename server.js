const express = require('express');
const dotenv = require('dotenv');

dotenv.config({path : '.env'});

// express app
const app = express();

// DB connection
const database = require('./config/db');
database();

// route
app.get('/', (req, res) => {
    res.send('Hello World!');
});



// listen

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});