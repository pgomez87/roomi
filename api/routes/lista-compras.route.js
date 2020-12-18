'use strict';

const express = require('express');
const Listacompras = require('../models/lista-compras.model');
const router = express.Router();

router.post('/registrar-listacompras', (req, res) => {
    let listado_compras = JSON.stringify(req.body.compras_seleccionadas);

    let nueva_listacompras = new Listacompras({
        nombre: req.body.cliente,
        encargado: req.body.encargado,
        estado: req.body.estado
    });

    listado_compras.forEach(compra => {
        nueva_listacompras.compras.push(compra);
    });
    nueva_listacompras.save((err, listacompras_bd) => {

        if (err) {
            res.json({
                msj: 'La lista de compras no se pudo registrar',
                err
            });
        } else {
            res.json({
                msj: 'La lista de compras se registró satisfactoriamente',
                listacompras_bd
            });
        }
    });
});

module.exports = router;