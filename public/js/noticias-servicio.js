'use strict';

const registrarNoticias = async(titulo, texto, imagen) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-noticia',
        responseType: 'json',
        data: {
            titulo: titulo,
            texto: texto,
            imagen: imagen
        }
    }).then((response) => {
        Swal.fire({
            'title': 'Se ha registrado la noticia',
            'icon': 'success',
            'text': ''
        })
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        });
    });
};



const listarNoticias = async() => {
    const listaNoticias = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-noticias',
        responseType: 'json'
    }).then((response) => {
        listaNoticias = response.data.listaNoticias;
        return listaNoticias;
    }).catch((response) => {

    });
};