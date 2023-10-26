const express = require('express');
const app = express();



// route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// listen

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});