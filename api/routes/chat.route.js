'use strict';

const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);



io.on('connection', socket => {
    console.log('New WS Connection...');
    socket.emit('message', 'Welcome to the chat');
});

