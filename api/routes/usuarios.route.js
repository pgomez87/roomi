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
        estado: true,
        cambio_contrasena: 'no'

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
        console.log(`${usuario.correo} -- ${usuario.contrasena}`);
        if (err) {
            res.json({
                msj: 'La contraseña o correo electrónico no son válidos route',
                estado: false,
                cambio_contrasena: 'no',
                err
            });
        } else {
            if (usuario && usuario.contrasena == contrasena) {
                res.json({
                    id: usuario._id,
                    estado: usuario.estado,
                    tipo: usuario.tipo_usuario,
                    nombre: usuario.nombre,
                    cambio_contrasena: usuario.cambio_contrasena,
                });
            } else {
                if (usuario && usuario.estado == 'sin contrasena') {
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

    let contrasena_temporal = crear_contrasena(8);
    Usuario.updateOne({ correo: req.body.correo }, { $set: { contrasena: contrasena_temporal, estado: 'sin contrasena', cambio_contrasena: 'si' } }, (err, info) => {
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
                Usuario.updateOne({ correo: req.body.correo }, { $set: { contrasena: req.body.contrasena, estado: true, cambio_contrasena: 'no' } }, (err, info) => {
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

router.get('/buscar-usuario', (req, res) => {
    let _id = req.query._id;
    Usuario.findOne({ _id: _id }).populate('usuarios').
    exec((err, usuario) => {
        if (err) {
            res.json({
                msj: 'No se encontró el usuario',
                err
            });
        } else {
            res.json({
                msj: 'El usuario se encontró correctamente',
                usuario: usuario
            });
        }
    });

});

router.put('/modificar-usuario', (req, res) => {
    Usuario.updateOne({ _id: req.body._id }, {
        $set: req.body
    }, (err, info) => {
        if (err) {
            res.json({
                msj: 'No se pudo modificar el usuario',
                err
            });
        } else {
            res.json({
                msj: 'El usuario se modificó correctamente',
                info
            });
        }
    });

});

module.exports = router;

function crear_contrasena(tamano) {
    var contrasena_temp = '';
    var letras_mayus = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var letras_minus = 'abcdefghijklmnopqrstuvwxyz';
    var numeros = '0123456789';
    var chars_especiales = '.,!?¿¡';
    var cantidad_opciones = letras_mayus.length;
    for (var i = 0; i < tamano / 4; i++) {
        contrasena_temp += letras_mayus.charAt(Math.floor(Math.random() * cantidad_opciones));
    }
    cantidad_opciones = letras_minus.length;
    for (var i = 0; i < tamano / 4; i++) {
        contrasena_temp += letras_minus.charAt(Math.floor(Math.random() * cantidad_opciones));
    }
    cantidad_opciones = numeros.length;
    for (var i = 0; i < tamano / 4; i++) {
        contrasena_temp += numeros.charAt(Math.floor(Math.random() * cantidad_opciones));
    }
    cantidad_opciones = chars_especiales.length;
    for (var i = 0; i < tamano / 4; i++) {
        contrasena_temp += chars_especiales.charAt(Math.floor(Math.random() * cantidad_opciones));
    }
    return contrasena_temp;
};