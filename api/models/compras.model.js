'use strict';

const mongoose = require('mongoose');

const schema_compra = new mongoose.Schema({
    producto: { type: String, required: true, unique: false },
    categoria: { type: String, required: true, unique: false },
    cantidad: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Compra', schema_compra, 'compras');