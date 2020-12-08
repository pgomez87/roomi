'use strict';

const mongoose = require('mongoose');

const schemaProveedores = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    servicio: { type: Date, required: true, unique: false },
});

module.exports = mongoose.model('Proveedor', schemaProveedores, 'proveedores');