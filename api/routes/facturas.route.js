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
        usuario: req.body.usuario,
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

router.get('/listar-facturas', (req, res) => {
    Factura.find((err, lista_facturas) => {
        if (err) {
            res.json({
                msj: 'no se pudo listar nada',
                err
            });
        } else {
            res.json({
                msj: 'se listo todo, TLPVI',
                lista_facturas
            });
        }
    });
});


router.put('/desactivar-factura', (req, res) => {
    Factura.updateOne({ _id: req.body._id }, { $set: { activa: 'inactiva' } }, (err, info) => {
        if (err) {
            res.json({
                msj: 'no se pudo modificar la factura',
                err
            });
        } else {
            res.json({
                msj: 'la factura se modificó correctamente',
                info
            });
        }
    });
});






module.exports = router;

// router.get('/listar-facturas', (req, res) => {
//     Factura.find((err, listaFacturas) => {
//         if (err) {
//             res.json({
//                 msj: 'No se pudo listar las tareas',
//                 err
//             });
//         } else {
//             res.json({
//                 msj: 'Las tareas se listaron con éxito',
//                 listaFacturas
//             });
//         }
//     });
// });