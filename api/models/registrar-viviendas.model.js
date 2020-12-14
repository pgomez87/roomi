'use strict';

const mongoose = require('mongoose');

const schemaViviendas = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    costo: { type: String, required: true, unique: false },
    capacidad: { type: String, required: true, unique: false },
    direccion: { type: String, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
    imagen: { type: String, required: false, unique: false },
    habitaciones: { type: String, required: true, unique: false },
    bannos: { type: String, required: true, unique: false },
    cocina: { type: String, required: false, unique: false },
    pilas: { type: String, required: false, unique: false },
    comedor: { type: String, required: false, unique: false },
    sala: { type: String, required: false, unique: false },
    jardin: { type: String, required: false, unique: false },
    garaje: { type: String, required: false, unique: false }
});

module.exports = mongoose.model('Vivienda', schemaViviendas, 'viviendas');