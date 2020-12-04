'use strict';

const mongoose = require('mongoose');

const schemaFacturas = new mongoose.Schema({
    nombre: { type: Text, required: true, unique: false },
    fecha: { type: Date, required: true, unique: false },
    tipo: { type: Text, required: true, unique: false },
    proveedor: { type: Text, required: true, unique: false },
    porcentaje: { type: Text, required: true, unique: false }
});

module.exports = mongoose.model('Facturas', schemaFacturas, 'facturas');