'use strict';

const titulo = document.querySelector('#titulo-input');
const descripcion = document.querySelector('#descripcion-input');
const boton_publicar = document.querySelector('#boton-publicar');

const limpiar_espacios = () => {
    let lista_espacios = document.querySelectorAll('[required]');

    lista_espacios.forEach(element => {
        element.value = '';
    });
};

const valudar_espacios = () => {
    let lista_espacios = document.querySelectorAll('[required]');
    let error = false;

    lista_espacios.forEach(element => {
        if (element.value == '') {
            error = true;
            element.classList.add('error-input');
        } else {
            element.classList.remove('error-input');
        }
    });

    if (error == false) {
        registrar_publicidad(titulo.value, descripcion.value)
        Swal.fire({
            'title': 'Se ha registrado la publicidad correctamente',
            'icon': 'success'
        });
        limpiar_espacios();
    } else {
        Swal.fire({
            'title': 'La publicidad no se ha registrado.',
            'text': 'Por favor llene los espacios.',
            'icon': 'warning'
        });
    };
};

boton_publicar.addEventListener('click', valudar_espacios);