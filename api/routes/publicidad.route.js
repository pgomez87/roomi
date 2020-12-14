'use script';

const express = require('express');
const router = express.Router();
const Publicidad = require('../models/publicidad.model')

router.post('/registrar-publicidad', (req, res) => {
    let nueva_publicidad = new Publicidad({
        titulo: req.body.titulo,
        texto: req.body.texto,
        imagen: req.body.imagen
    });

    nueva_publicidad.save((err, roomi_bd) => {
        if (err) {
            res.json({
                msj: 'No se pudo registrar la publicidad',
                err
            });
        } else {
            res.json({
                msj: 'La publicidad se registro correctamente',
                roomi_bd
            });
        }
    });
});

router.get('/listar-publicidades', (req, res) => {
    Publicidad.find((err, lista_publicidades) => {
        if (err) {
            res.json({
                msj: 'No se pudo listar las publicidades',
                err
            });
        } else {
            res.json({
                lista_publicidades: lista_publicidades
            });
        }
    });
});