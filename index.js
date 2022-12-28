const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const socket = require('socket.io');
const socketController = require('./src/socket/index');
const userRoutes = require('./src/router/user.route');

const http = require('http');
require('dotenv').config();

const app = express();
app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.json());
app.get('/ping', (req, res) => {
    res.json({ 
        message: 'pong'
     });
});

app.use(userRoutes);

const server = http.createServer(app);

const io = socket(server, {
    cors: {
        origin: '*',
    }
});

io.on('connection', (socket) => {
    console.log('new user connected');
    socketController(io, socket);
})


server.listen(3005, () => {
    console.log(`Server is running on port 3005`);
})