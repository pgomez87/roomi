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
        porcentaje: req.body.porcentaje
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


module.exports = router;