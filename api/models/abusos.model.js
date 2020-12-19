'use strict'

const mongoose = require('mongoose');

const schema_abusos = new mongoose.Schema({
    usuario_reportar: { type: String, required: true, unique: false },
    tipo_abuso: { type: String, required: true, unique: false },
    pruebas: { type: String, required: false, unique: false },
    comentario: { type: String, required: true, unique: false },

});

module.exports = mongoose.model('Abusos', schema_abusos, 'abusos');