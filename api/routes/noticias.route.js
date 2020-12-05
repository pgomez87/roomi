'use strict';

const express = require('express');
const router = express.Router();
const Noticia = require('../models/noticias.model');

router.post('/registrar-noticia', (req, res) => {
    let nuevaNoticia = new Noticia({
        titulo: req.body.titulo,
        texto: req.body.texto,
        imagen: req.body.imagen
    });

    nuevaNoticia.save((err, roomi_bd) => {
        if (err) {
            res.json({
                msj: 'La factura no se pudo registrar',
                err
            });
        } else {
            res.json({
                msj: 'La factura fue registrada',
                roomy_bd
            });
        }
    });

});

router.get('/listar-noticias', (req, res) => {
    Noticia.find((err, lista_noticias) => {
        if (err) {
            res.json({
                msj: 'no se pudo listar nada',
                err
            });
        } else {
            res.json({
                msj: 'se listaron las noticias',
                lista_noticias
            });
        }
    });
});


module.exports = router;