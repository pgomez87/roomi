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


router.get('/listar-listascompras', (req, res) => {
    Listacompras.find().populate('compras').
    exec((err, lista_listascompras) => {
        if (err) {
            res.json({
                msj: 'No se pudo listar las listas de compra',
                err
            });
        } else {
            res.json({
                msj: 'Las las listas de compras se listaron correctamente',
                lista_listascompras: lista_listascompras
            });
        }
    })

});



router.get('/buscar-listacompras', (req, res) => {
    let _id = req.query._id;
    Listacompras.findOne({ _id: _id }).populate('compras').
    exec((err, listacompras) => {
        if (err) {
            res.json({
                msj: 'No se pudo listar la lista de compras',
                err
            });
        } else {
            res.json({
                msj: 'La lista de compras se listó correctamente',
                listacompras: listacompras
            });
        }
    });

});



router.delete('/eliminar-listacompras', (req, res) => {
    let _id = req.body._id;
    Listacompras.findOneAndRemove({ _id: _id }, (err) => {
        if (err) {
            res.json({
                msj: 'No se pudo eliminar la lista de compras',
                err
            });
        } else {
            res.json({
                msj: 'La lista de compras se eliminó correctamente'
            });
        }
    });
});



module.exports = router;