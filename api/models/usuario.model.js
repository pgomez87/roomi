'use strict';

const mongoose = require('mongoose');
const schema_usuario = new mongoose.Schema(
    {
        nombre: {type: String, required: true, unique: false},
        apellido: {type: String, required: true, unique: false},
        contrasena: {type: String, required: true, unique: false},
        correo: {type: String, required: true, unique: true},
        telefono: {type: String, required: true, unique: false},
        cedula: {type: String, required: true, unique: true},
        direccion: {type: String, required: true, unique: false},
        tipo_usuario: {type: String, required: true, unique: false}

                // 3 tipos de usuario
                //   - regular
                //   - coordinador
                //   - admin
    }    
);

module.exports = mongoose.model('usuario', schema_comentario, 'usuarios');