'use strict';

const registrar_usuario = async(nombre, apellido, contrasena, correo, telefono, cedula, direccion) => {
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
            direccion: direccion
        }
    }).then((response) => {
        Swal.fire({
            'title': 'Se ha registrado exitosamente',
            'icon': 'success'
        }).then(limpiar_espacios);
    }).catch((error) => {
        Swal.fire({
            'title': response.msj,
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
            Swal.fire({
                'icon': 'success',
                'title': 'Bienvenido',
                'text': 'Ha iniciado sesión correctamente'
            }).then(() => {
                localStorage.setItem('tipo_usuario', response.data.tipo);
                window.location.href = 'pagina_principal.html'
            });
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