'use strict';

const express = require('express');
const router = express.Router();
const Proveedor = require('../models/proveedores.model');

router.post('/registrar-proveedor', (req, res) => {
    let nuevoProveedor = new Proveedor({
        nombre: req.body.nombre,
        servicio: req.body.servicio,
    });

    nuevoProveedor.save((err, roomi_bd) => {
        if (err) {
            res.json({
                msj: 'El proveedor no se pudo registrar',
                err
            });
        } else {
            res.json({
                msj: 'El proveedor se registró con éxito',
                roomi_bd
            });
        }
    });
});

router.get('/listar-proveedores', (req, res) => {
    Proveedor.find((err, lista_proveedores) => {
        if (err) {
            res.json({
                msj: 'No se pudieron listar los proveedores',
                err
            });
        } else {
            res.json({
                msj: 'Se listaron los proveedores',
                lista_proveedores
            });
        }
    });
});

module.exports = router;