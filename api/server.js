'use strict';

const http = require('http'); //Necesario socket.io
const express = require("express"); //Necesario socket.io 
const body_parser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');
const socketio = require('socket.io'); //Necesario socket.io
const { isObject } = require('util');
const formatMessage = require('./utils/messages');
const { userJoin, getCurrentUser, userLeave, getRoomUsers } = require('./utils/users');


require('dotenv').config();

//Se declaran todos los accesos de los archivos routes.

const app = express(); //Necesario socket.io
const server = http.createServer(app); //Necesario socket.io
const io = socketio(server); //Necesario socket.io

app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


// Socket.io

const botroomi = "Roomi";

//Cliente al conectarse al chat
io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
        const user = userJoin(socket.id, username, room);

        socket.join(user.room);

        //Aviso bienvenida al chat
        socket.emit('message', formatMessage(botroomi, 'Bienvenido al chat de vivienda'));

        //Broadcast cuando usuario se une 
        socket.broadcast.to(user.room).emit('message', formatMessage(botroomi, `${user.username} se unido al chat`));

        //Enviar info de usuarios
        io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
        });
    });

    //Listen para mensaje de chat
    socket.on('chatMessage', msg => {
        const user = getCurrentUser(socket.id);

        io.to(user.room).emit('message', formatMessage(user.username, msg));
    });

    //Aviso cuando un cliente se desconecta
    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if (user) {
            io.to(user.room).emit('message', formatMessage(botroomi, `${user.username} a dejado el chat`));
        }

    });


});



// Se crea la variable db, que almacena la instancia de la base de datos, para ser reutilizada en el "callback".
let db;

//Se conecta la base de datos antes de levantar el servidor, mediante los datos del archivo .env en la raíz del proyecto.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    //Guarda el objeto db para que el callback la pueda reutilizar.
    db = database;
    console.log("Se estableció la conexión con la base datos.");

    // Se inicia la aplicación.
    server.listen(process.env.PORT || 8000, function() {
        let port = server.address().port;
        console.log("La aplicación está levantada en el puerto: ", port);
    });
});


//Error general en caso de que falle un "endpoint".
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

// Conexión a todas la rutas.
app.use('/api', require('./routes/facturas.route'));
app.use('/api', require('./routes/abusos.route'));
app.use('/api', require('./routes/noticias.route'));
app.use('/api', require('./routes/proveedores.route'));
app.use('/api', require('./routes/viviendas.route'));
app.use('/api', require('./routes/usuarios.route'));
app.use('/api', require('./routes/compras.route'));
app.use('/api', require('./routes/lista-compras.route'));
app.use('/api', require('./routes/publicidad.route'));
app.use('/api', require('./routes/tareas.route'));