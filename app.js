const express = require('express')
const app = express()

// Middleware
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})



app.listen(3000)