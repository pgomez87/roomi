'use strict';

const express = require('express');
const router = express.Router();
const Vivienda = require('../models/registrar-viviendas.model');

router.post('/registrar-vivienda', (req, res) => {
    let nueva_vivienda = new Vivienda({
        nombre: nombre.req.body.nombre,
        costo: costo.req.body.costo,
        capacidad: capacidad.req.body.capacidad,
        direccion: direccion.req.body.direccion,
        descripcion: descripcion.req.body.descripcion,
        foto: foto.req.body.foto,
        habitaciones: habitaciones.req.body.habitaciones,
        bannos: bannos.req.body.bannos,
        cocina: cocina.req.body.cocina,
        pilas: pilas.req.body.pilas,
        comedor: comedor.req.body.comedor,
        sala: sala.req.body.sala,
        jardin: jardin.req.body.jardin,
        garaje: garaje.req.body.garaje
    });

    nueva_vivienda.save((err, roomi_bd) => {
        if (err) {
            res.json({
                msj: 'La vivienda no se pudo registrar',
                err
            })
        } else {
            res.json({
                msj: 'La vivienda se registro satisfactoriamente',
                roomi_bd
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

module.exports = router;