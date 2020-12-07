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
        }).then(function() {
            window.location.href = "noticias-coordinador.html"
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
    let listaNoticias = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-noticias',
        responseType: 'json'
    }).then((response) => {
        listaNoticias = response.data.lista_noticias;
    }).catch((response) => {
        console.log('error')
    });
    return listaNoticias;
};