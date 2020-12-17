'use strict';

const mongoose = require('mongoose');

const schema_publicidad = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    titulo: { type: String, required: false, unique: false },
    texto: { type: String, required: false, unique: false },
    imagen: { type: String, required: false, unique: false },
    fecha: {type: String, required: true, unique: false}
});

module.exports = mongoose.model('publicidad', schema_publicidad, 'publicidades');