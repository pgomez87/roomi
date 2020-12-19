'use strict';

const registrar_usuario = async(nombre, apellido, contrasena, correo, telefono, cedula, direccion, tipo) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-usuario',
        responseType: 'json',
        data: {
            nombre: nombre,
            apellido: apellido,
            contrasena: contrasena,
            correo: correo,
            telefono: telefono,
            cedula: cedula,
            direccion: direccion,
            tipo: tipo
        }
    }).then((response) => {
        Swal.fire({
            'title': 'Se ha registrado exitosamente',
            'icon': 'success'
        })
        window.location.href = 'inicio-sesion.html';
    }).catch((error) => {
        Swal.fire({
            'title': 'nope',
            'text': response.err,
            'icon': 'error'
        }).then();
    });
};

const listar_usuarios = async() => {
    let lista_usuarios = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-usuarios',
        responseType: 'json'
    }).then((response) => {
        lista_usuarios = response.data.lista_usuarios;
    }).catch((response) => {

    });

    return lista_usuarios;
};

const iniciar_sesion = async(correo, contrasena) => {
    try {
        const response = await axios({
            method: 'get',
            params: { correo: correo, contrasena: contrasena },
            url: `http://localhost:3000/api/iniciar-sesion`,
            responseType: 'json'
        });
        console.log(`${response.data.estado}`);
        if (response.data.estado == 'true') {
            console.log(`${response.data.cambio_contrasena} servicio dentro del if`);
            Swal.fire({
                'icon': 'success',
                'title': 'Bienvenido',
                'text': 'Ha iniciado sesión correctamente'
            }).then(() => {
                sessionStorage.setItem('tipo_usuario', response.data.tipo);
                sessionStorage.setItem('nombre_usuario', response.data.nombre);
                if (sessionStorage.getItem('tipo_usuario') == 'regular') {
                    window.location.href = 'dashboard-usuario.html';
                } else if (sessionStorage.getItem('tipo_usuario') == 'coordinador') {
                    window.location.href = 'dashboard-coordinador.html';
                } else if (sessionStorage.getItem('tipo_usuario') == 'administrador') {
                    window.location.href = 'dashboard-admin.html';
                } else if (sessionStorage.getItem('tipo_usuario') == '') {
                    sessionStorage.clear();
                    window.location.href = 'inicio-sesion.html';
                }
            });
        } else {
            console.log(`${response.data.estado} -- ${response.data.cambio_contrasena}`);
            if (response.data.estado == 'sin contrasena') {
                sessionStorage.setItem('correo_usuario', correo);
                window.location.href = 'recuperacion-contrasenna.html';
            } else {
                Swal.fire({
                    'icon': 'error',
                    'title': 'No ha podido iniciar sesión',
                    'text': 'Usuario o contraseña incorrectos'
                })
            }

        }
    } catch (error) {
        console.log(error);
    }
};

const modificar_contrasena = async(temporal, contrasena) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-contrasena',
        responseType: 'json',
        data: {
            correo: sessionStorage.getItem('correo_usuario'),
            temporal: temporal,
            contrasena: contrasena
        }
    }).then((response) => {
        console.log(`${temporal} -- ${contrasena}`);
        if (response.data.estado == 'temporal inválida') {
            Swal.fire({
                'title': 'La contraseña temporal es inválida',
                'icon': 'error',
                'text': response.msj
            });
        } else {
            Swal.fire({
                'title': 'La contraseña ha sido actualizada correctamente',
                'icon': 'success',
                'text': response.msj
            }).then(() => {
                window.location.href = 'inicio-sesion.html';
            });
        }
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};

const reestablecer_contrasena = async(correo) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/reestablecer-contrasena',
        responseType: 'json',
        data: {
            correo: correo
        }
    }).then((response) => {
        Swal.fire({
            'title': 'La contraseña ha sido reestablecida correctamente',
            'icon': 'success',
            'text': 'Por favor revise su bandeja de entrada'
        }).then(() => {
            window.location.href = 'inicio-sesion.html';
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};

const buscar_usuario = async() => {
    let usuario;
    await axios({
        method: 'get',
        params: { _id: localStorage.getItem('usuario_seleccionado') },
        url: 'http://localhost:3000/api/buscar-usuario',
        responseType: 'json'
    }).then((response) => {
        usuario = response.data.usuario;
    }).catch((response) => {

    });

    return usuario;
};

const modificar_usuario = async(_id, nombre, apellido, correo, telefono, cedula, direccion) => {
    await axios({
        method: 'put',
        url: 'http://localhost:3000/api/modificar-usuario',
        responseType: 'json',
        data: {
            _id: _id,
            nombre: nombre,
            apellido: apellido,
            telefono: telefono,
            correo: correo,
            cedula: cedula,
            direccion: direccion
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El usuario se modificó correctamente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_usuarios();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};