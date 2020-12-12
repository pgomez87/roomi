'use strict';

const mongoose = require('mongoose');

const schema_publicidad = new mongoose.Schema({
    titulo: { type: String, required: false, unique: false },
    texto: { type: String, required: false, unique: false },
    imagen: { type: String, required: false, unique: false }
});

module.exports = mongoose.model('publicidad', schema_publicidad, 'publicidades');