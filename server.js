const express = require('express');
const dotenv = require('dotenv');
const users = require('./routes/user');
dotenv.config({path : '.env'});

// express app
const app = express();

// DB connection
const database = require('./config/db');
database();

// route
app.use(express.json());
app.use('/api/users', users);
app.get('/' , (req , res) => {
    res.send('Hello World');
});


// listen

PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
});