'use strict';

const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario.model')

router.post('/registrar-usuario', (req, res) => {
    let nuevo_usuario = new Usuario({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        contrasena: req.body.contrasena,
        correo: req.body.correo,
        telefono: req.body.telefono,
        cedula: req.body.cedula,
        direccion: req.body.direccion,
        tipo_usuario: 'regular'

        // 3 tipos de usuario
        //   - regular
        //   - coordinador
        //   - admin
    });

    nuevo_usuario.save((err, roomi_bd) => {
        if (err) {
            res.json({
                msj: 'No se pudo registrar el usuario',
                err
            });
        } else {
            res.json({
                msj: 'El usuario se registro correctamente',
                roomi_bd
            });
        }
    });
});

router.get('/iniciar-sesion', (req, res) => {
    let correo = req.query.correo;
    let contrasena = req.query.contrasena;
    Usuario.findOne({ correo: correo }, (err, usuario) => {
        if (err) {
            res.json({
                msj: 'La contraseña o correo electrónico no son válidos',
                err
            });
        } else {
            if (usuario && usuario.contrasena == contrasena) {
                res.json({
                    tipo_usuario: usuario.tipo_usuario
                });
            }

        }
    });
});

module.exports = router;