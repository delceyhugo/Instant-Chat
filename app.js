// Express
const express = require('express')
const app = express()


// Socket IO
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// Middleware
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
})
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('newMessage', (data) => {
        io.emit('newMessage', data)
    })
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});



server.listen(3000)