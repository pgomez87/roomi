'use strict';
const express = require('express');
const Abuso = require('../models/abusos.model');
const router = express.Router();

router.post('/registrar-abuso', (req, res) => {
    let nuevo_abuso = new Abuso({
        usuario_reportar: req.body.usuario_reportar,
        tipo_abuso: req.body.tipo_abuso,
        pruebas: req.body.pruebas,
        comentario: req.body.comentario
    });

    nuevo_abuso.save((err, abuso_bd) => {
        if (err) {
            res.json({
                msj: 'No se pudo reportar',
                err
            });
        } else {
            res.json({
                msj: 'Se reportó exitosamente',
                abuso_bd
            });
        }
    });
});


module.exports = router;