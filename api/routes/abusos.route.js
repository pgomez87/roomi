'use strict';
const express = require('express');
const Abuso = require('../models/abusos.model');
const router = express.Router();

router.post('/registrar-abuso', (req, res) => {
    console.log('Sí llega al route');
    let nuevo_abuso = new Abuso({
        usuario_reportar: req.body.usuario_reportar,
        tipo_abuso: req.body.tipo_abuso,
        pruebas: req.body.pruebas,
        comentario: req.body.comentario
    });

    nuevo_abuso.save((err, abuso_bd) => {
        if (err) {
            console.log('Error');
            res.json({
                msj: 'No se pudo reportar',
                err
            });
        } else {
            console.log('se debería guardar en la bd');
            res.json({
                msj: 'Se reportó exitosamente',
                abuso_bd
            });
        }
    });
});

router.get('/listar-abusos', (req, res) => {
    Abuso.find((err, lista_abusos) => {
        if (err) {
            res.json({
                msj: 'No se pudo listar los abusos',
                err
            });
        } else {
            res.json({
                msj: 'Los abusos se listaron correctamente',
                lista_abusos
            });
        }
    });
});

module.exports = router;