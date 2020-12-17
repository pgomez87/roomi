'use strict';

const express = require('express');
const Compra = require('../models/compras.model');
const router = express.Router();


router.post('/registrar-compra', (req, res) => {
    let nueva_compra = new Compra({
        producto: req.body.producto,
        categoria: req.body.categoria,
        cantidad: req.body.cantidad
    });

    nueva_compra.save((err, compra_bd) => {
        if (err) {
            res.json({
                msj: 'El producto no se pudo registrar',
                err
            });
        } else {
            res.json({
                msj: 'El producto fue registrado',
                compra_bd
            });
        }
    });

});

router.get('/listar-compras', (req, res) => {
    Compra.find((err, lista_compras) => {
        if (err) {
            res.json({
                msj: 'No se pudo listar nada',
                err
            });
        } else {
            res.json({
                msj: 'Se listaron las compras',
                lista_compras
            });
        }
    });
});


module.exports = router;