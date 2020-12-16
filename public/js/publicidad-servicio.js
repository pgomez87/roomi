'use strict';

const registrar_publicidad = async(titulo, descripcion, imagen) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-publicidad',
        responseType: 'json',
        data {
            titulo: titulo,
            descripcion: descripcion,
            imagen: imagen
        }
    }).then((response) => {
        Swal.fire({
            'title': 'La publicidad se ha creado exitosamente',
            'icon': 'success'
        })
    }).catch((error) => {
        Swal.fire({
            'title': 'No se ha podido registrar la publicidad',
            'text': response.err,
            'icon': 'error'
        }).then();
    });
};