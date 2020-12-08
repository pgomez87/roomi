'use strict';

const mongoose = require('mongoose');

const schemaNoticias = new mongoose.Schema({
    titulo: { type: String, required: true, unique: false },
    texto: { type: String, required: true, unique: false },
    imagen: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Noticia', schemaNoticias, 'noticias');