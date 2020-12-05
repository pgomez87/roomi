'use strict';

const express = require('express');
const router = express.Router();
const Vivienda = require('../models/registrar-viviendas.model');

router.post('/registrar-vivienda', (req, res) => {
    let nueva_vivienda = new Vivienda({
        nombre: nombre,
        costo: costo,
        capacidad: capacidad,
        direccion: direccion,
        descripcion: descripcion,
        foto: foto,
        habitaciones: habitaciones,
        bannos: bannos,
        cocina: cocina,
        pilas: pilas,
        comedor: comedor,
        sala: sala,
        jardin: jarding,
        garaje: garaje
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
})

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
            })
        }
    })
})