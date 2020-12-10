'use strict';

const mongoose = require('mongoose');

const schemaViviendas = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    costo: { type: Date, required: true, unique: false },
    capacidad: { type: String, required: true, unique: false },
    direccion: { type: String, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
    activa: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Vivienda', schemaFacturas, 'viviendas');