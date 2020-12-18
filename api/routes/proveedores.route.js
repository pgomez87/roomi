'use strict';

const express = require('express');
const Proveedor = require('../models/proveedores.model');
const router = express.Router();

router.post('/registrar-proveedor', (req, res) => {
    let nuevo_proveedor = new Proveedor({
        nombre: req.body.nombre,
        servicio: req.body.servicio,
    });

    nuevo_proveedor.save((err, proveedores_bd) => {
        if (err) {
            res.json({
                msj: 'El proveedor no se pudo registrar',
                err
            });
        } else {
            res.json({
                msj: 'El proveedor se registró con éxito',
                proveedores_bd
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

router.delete('/eliminar-proveedores', (req, res) => {
    let _id = req.body._id;
    Proveedor.findOneAndRemove({ _id: _id }, (err) => {
        if (err) {
            res.json({
                msj: 'No se pudo eliminar el proveedor',
                err
            });
        } else {
            res.json({
                msj: 'El proveedor se elimino correctamente',
            });
        }
    });
});

module.exports = router;