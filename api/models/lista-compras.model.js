'use strict';

const mongoose = require('mongoose');

const schema_listacompras = new mongoose.Schema({
    nombre: { type: String, required: true, unique: true },
    encargado: { type: String, required: true, unique: false },
    estado: { type: String, required: true, unique: false },
    compras: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Compra'
    }]
});

module.exports = mongoose.model('Listacompra', schema_listacompras, 'listascompras');