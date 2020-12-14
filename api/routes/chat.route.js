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


//Presenta cuando un usuario se conecta
//socket.broadcast.emit('message', 'Un usuario se a unido al chat');

//Funciona cuando un usario se desconecta
//socket.on('disconnect', () => {
////io.emit('message', 'Un usuario a dejado el chat')
//});

// Listen para mensajes del chat
//socket.on('chatMessage', msg => {
//console.log(msg);
//});