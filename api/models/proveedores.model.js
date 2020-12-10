'use strict';

const mongoose = require('mongoose');

const schema_proveedores = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    servicio: { type: String, required: true, unique: false },
});

module.exports = mongoose.model('Proveedor', schema_proveedores, 'proveedores');