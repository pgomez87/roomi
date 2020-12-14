'use strict';

const express = require('express');
const router = express.Router();
const Vivienda = require('../models/registrar-viviendas.model');

router.post('/registrar-vivienda', (req, res) => {
    let nueva_vivienda = new Vivienda({
        nombre: req.body.nombre,
        costo: req.body.costo,
        capacidad: req.body.capacidad,
        direccion: req.body.direccion,
        descripcion: req.body.descripcion,
        imagen: req.body.imagen,
        habitaciones: req.body.habitaciones,
        bannos: req.body.bannos,
        cocina: req.body.cocina,
        pilas: req.body.pilas,
        comedor: req.body.comedor,
        sala: req.body.sala,
        jardin: req.body.jardin,
        garaje: req.body.garaje
    });

    nueva_vivienda.save((err, viviendas_bd) => {
        if (err) {
            res.json({
                msj: 'La vivienda no se pudo registrar',
                err
            })
        } else {
            res.json({
                msj: 'La vivienda se registro satisfactoriamente',
                viviendas_bd
            });
        }
    });
});

router.get('/listar-viviendas', (req, res) => {
    Vivienda.find((err, lista_viviendas) => {
        if (err) {
            res.json({
                msj: 'No se listaron las viviendas correctamente',
                err
            })
        } else {
            res.json({
                msj: 'Se listaron las viviendas correctamente',
                lista_viviendas
            });
        }
    });
});


router.get('/buscar-vivienda-id', (req, res) => {
    let _id = req.query._id;
    Vivienda.findOne({ _id: _id }).populate('viviendas').
    exec((err, vivienda) => {
        if (err) {
            res.json({
                msj: 'No se pudo listar la vivienda',
                err
            });
        } else {
            res.json({
                msj: 'La vivienda se listó correctamente',
                vivienda: vivienda
            });
        }
    })

});

module.exports = router;