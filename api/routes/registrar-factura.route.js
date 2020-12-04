'use strict';
const express = require('express');
const router = express.Router();
const Factura = require('../models/registrar-facturas.model');

router.post('/registrar-factura', (req, res) => {
    let nuevaFactura = new Factura({
        nombre: req.body.nombre,
        fecha: req.body.fecha,
        tipo: req.body.tipo,
        proveedor: req.body.proveedor,
        porcentaje: req.body.porcentaje,
        activa: req.body.activa
    });

    nuevaFactura.save((err, roomi_bd) => {
        if (err) {
            res.json({
                msj: 'La factura no se pudo registrar',
                err
            });
        } else {
            res.json({
                msj: 'La factura se registró con éxito',
                roomi_bd
            });
        }
    });
});


router.get('listar-facturas', (req, res) => {
    Factura.find((err, listaFacturas) => {
        if (err) {
            res.json({
                msj: 'No se pudo listar las tareas',
                err
            })
        } else {
            res.json({
                msj: 'Las tareas se listaron con éxito',
                listaFacturas
            })
        }
    })
})

module.exports = router;