'use strict';

let btnAgregarNoticia = document.querySelector('#agregarNoticia');

const obtenerDatos = () => {
    let tituloNoticia = document.querySelector('#tituloNoticia').value;
    let textoNoticia = document.querySelector('#txtNoticias').value;
    let imagenNoticia = document.querySelector('#fotoNoticias').src;

    registrarNoticias(tituloNoticia, textoNoticia, imagenNoticia);
    console.log(tituloNoticia, textoNoticia, imagenNoticia);

}

const limpiar = () => {

}

const validar = () => {
    let camposRequeridos = document.querySelectorAll(':required');
    let error = false;


    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('error-input');
            error = true;
            Swal.fire({
                'title': 'Por favor revise los Campos resaltados',
                'icon': 'error',
                'text': ''
            })
        } else {
            campo.classList.remove('error-input');
        }
    });
    if (error === false) {
        obtenerDatos();
    }

}


btnAgregarNoticia.addEventListener('click', validar);