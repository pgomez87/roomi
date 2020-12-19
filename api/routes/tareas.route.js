'use strict';

const express = require('express');
const router = express.Router();
const Tarea = require('../models/tareas.model');

router.post('/registrar-tarea', (req, res) => {
    let nueva_tarea = new Tarea({
        nombre: req.body.nombre,
        detalles: req.body.detalles,
        area: req.body.area,
        encargado: req.body.encargado,
        estado: 'Pendiente'
    });

    nueva_tarea.save((err, tareas_bd) => {
        if (err) {
            res.json({
                msj: 'La tarea no se pudo registrar',
                err
            });
        } else {
            res.json({
                msj: 'La tarea fue registrada',
                tareas_bd
            });
        }
    });

});

router.get('/listar-tareas', (req, res) => {
    Tarea.find((err, lista_tareas) => {
        if (err) {
            res.json({
                msj: 'no se pudo listar nada',
                err
            });
        } else {
            res.json({
                msj: 'se listaron las noticias',
                lista_tareas
            });
        }
    });
});



router.delete('/eliminar-tarea', (req, res) => {
    let _id = req.body._id;
    Tarea.findOneAndRemove({ _id: _id }, (err) => {
        if (err) {
            res.json({
                msj: 'No se pudo eliminar la tarea',
                err
            });
        } else {
            res.json({
                msj: 'La tarea se eliminó correctamente'
            });
        }
    });
});



module.exports = router;