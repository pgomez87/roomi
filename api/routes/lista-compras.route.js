'use strict';

const express = require('express');
const Listacompras = require('../models/lista-compras.model');
const router = express.Router();

router.post('/registrar-listacompras', (req, res) => {
    const listado_compras = JSON.parse(req.body.compras);

    let nueva_listacompras = new Listacompras({
        nombre: req.body.nombre,
        encargado: req.body.encargado,
        estado: 'Activo'
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