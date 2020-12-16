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
        tipo_usuario: req.body.tipo,
        estado: 'pendiente'

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

router.get('/listar-usuarios', (req, res) => {
    Usuario.find((err, lista_usuarios) => {
        if (err) {
            res.json({
                msj: 'No se pudo listar los usuarios',
                err
            });
        } else {
            res.json({
                lista_usuarios: lista_usuarios
            });
        }
    });
});
//Yossy hizo esto
router.get('/iniciar-sesion', (req, res) => {
    let correo = req.query.correo;
    let contrasena = req.query.contrasena;
    Usuario.findOne({ correo: correo }, (err, usuario) => {
        if (err) {
            res.json({
                msj: 'La contraseña o correo electrónico no son válidos',
                estado: false,
                cambio_contrasena: 'no',
                err
            });
        } else {
            if (usuario && usuario.contrasena == contrasena) {
                res.json({
                    estado: true,
                    tipo: usuario.tipo_usuario,
                    nombre: usuario.nombre,
                    cambio_contrasena: 'no',
                });
            } else {
                if (usuario && usuario.estado == 'sin contraseña') {
                    res.json({
                        cambio_contrasena: 'si',
                        estado: false
                    });
                } else {
                    res.json({
                        msj: 'La contraseña o correo electrónico no son válidos',
                        estado: false,
                        cambio_contrasena: 'no',
                        err
                    });
                }

            }
        }
    });
});

router.put('/reestablecer-contrasena', (req, res) => {
    //Debe generar la contraseña aleatoriamente

    let contrasena_temporal = 'Hnnkhg5.';
    Usuario.updateOne({ correo: req.body.correo }, { $set: { contrasena: contrasena_temporal, estado: 'sin contraseña' } }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo recuperar la contraseña',
                err
            });
        } else {
            //Enviar correo electrónico
            res.json({
                msj: 'Contraseña temporal agregada correctamente',
                info
            });
        }
    });
});

router.put('/modificar-contrasena', (req, res) => {

    Usuario.findOne({ correo: req.body.correo }, (err, usuario) => {
        if (err) {
            res.json({
                msj: 'No se encontró el usuario',
                err
            });
        } else {
            if (usuario.contrasena == req.body.temporal) {
                Usuario.updateOne({ correo: req.body.correo }, { $set: { contrasena: req.body.contrasena, estado: 'activo' } }, (err, info) => {
                    if (err) {
                        res.json({
                            msj: 'No se pudo modificar la contraseña',
                            err
                        });
                    } else {
                        //Enviar correo electrónico
                        res.json({
                            msj: 'Contraseña modificada correctamente',
                            info
                        });
                    }
                });
            } else {
                res.json({
                    msj: 'La contraseña temporal es inválida',
                    err,
                    estado: 'temporal inválida'
                });
            }

        }
    });


});

module.exports = router;