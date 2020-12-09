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