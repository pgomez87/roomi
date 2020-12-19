'use strict';
const express = require('express');
const Abuso = require('../models/abusos.model');
const router = express.Router();

router.post('/registrar-abuso', (req, res) => {
    console.log('Sí llega al route');
    let nuevo_abuso = new Abuso({
        usuario_reportar: req.body.usuario_reportar,
        estado_usuario: req.body.estado_usuario,
        id_usuario: req.body.id_usuario,
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

router.put('/desactivar-usuario', (req, res) => {
    Usuario.updateOne({ _id: req.body._id }, { $set: { estado: false } }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar el estado del usuario',
                err
            });
        } else {
            res.json({
                msj: 'El usuario se modificó correctamente',
                info
            });
        }
    });
});

router.put('/activar-usuario', (req, res) => {
    Usuario.updateOne({ _id: req.body._id }, { $set: { estado: true } }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar el estado del usuario',
                err
            });
        } else {
            res.json({
                msj: 'El usuario se modificó correctamente',
                info
            });
        }
    });
});

module.exports = router;