'use strict';

const mongoose = require('mongoose');

const schemaFacturas = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    fecha: { type: Date, required: true, unique: false },
    tipo: { type: String, required: true, unique: false },
    proveedor: { type: String, required: true, unique: false },
    porcentaje: { type: String, required: true, unique: false },
    activa: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Facturas', schemaFacturas, 'facturas');