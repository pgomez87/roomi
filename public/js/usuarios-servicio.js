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