'use strict';

let random_id = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};

const registrar_publicidad = async(titulo, descripcion, imagen) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-publicidad',
        responseType: 'json',
        data: {
            id: random_id(),
            titulo: titulo,
            texto: descripcion,
            imagen: imagen,
            fecha: `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
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

const listar_publicidad = async() => {
    let lista_publicidades = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-publicidades',
        responseType: 'json'
    }).then((response) => {
        lista_publicidades = response.data.lista_publicidades;
    }).catch((response) => {});

    return lista_publicidades;
};

const eliminar_publicidad = async(id) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-publicidad',
        responseType: 'json',
        data: {
            id: id
        }
    }).then((response) => {
        Swal.fire({
            'title': 'La publicidad ha sido eliminada',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        });
    });
};