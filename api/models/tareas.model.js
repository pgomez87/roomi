'use strict';

const mongoose = require('mongoose');

const schema_tareas = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    detalles: { type: String, required: true, unique: false },
    area: { type: String, required: true, unique: false },
    encargado: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Tarea', schema_tareas, 'tareas');