'use strict';

const mongoose = require('mongoose');

const schemaViviendas = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    costo: { type: Date, required: true, unique: false },
    capacidad: { type: String, required: true, unique: false },
    direccion: { type: String, required: true, unique: false },
    descripcion: { type: String, required: true, unique: false },
    foto: { type: String, required: true, unique: false },
    habitaciones: { type: String, required: true, unique: false },
    habitaciones: { type: String, required: true, unique: false },
    bannos: { type: String, required: true, unique: false },
    cocina: { type: String, required: true, unique: false },
    pilas: { type: String, required: true, unique: false },
    comedor: { type: String, required: true, unique: false },
    jardin: { type: String, required: true, unique: false },
    garaje: { type: String, required: true, unique: false },
});

module.exports = mongoose.model('Vivienda', schemaViviendas, 'viviendas');