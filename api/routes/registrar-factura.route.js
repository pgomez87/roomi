'use strict';
const express = require('express');
const router = express.Router();
const Factura = require('../models/registrar-facturas.model');

router.post('/registrar-factura', (req, res) => {
    let nuevaFactura = new Factura({
        nombre: nombre,
        fecha: fecha,
        tipo: tipo,
        proveedor: proveedor,
        porcentaje: porcentaje
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