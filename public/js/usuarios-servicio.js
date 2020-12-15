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

let iniciar_sesion = async(correo, contrasena) => {
    try {
        const response = await axios({
            method: 'get',
            params: { correo: correo, contrasena: contrasena },
            url: `http://localhost:3000/api/iniciar-sesion`,
            responseType: 'json'
        });
        if (response.data.estado == true) {
            localStorage.setItem('tipo_usuario', response.data.tipo);
            localStorage.setItem('correo_usuario', response.data.correo);
            window.location.href = 'dashboard-usuario.html'
        } else {
            Swal.fire({
                'icon': 'error',
                'title': 'No ha podido iniciar sesión',
                'text': 'Usuario o contraseña incorrectos'
            })
        }
    } catch (error) {
        console.log(error);
    }
};

const modificar_contrasenna = async(temporal, contrasenna) => {
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
                window.location.href = 'inicio.html';
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
            window.location.href = 'recuperacion-contrasenna.html';
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });

};