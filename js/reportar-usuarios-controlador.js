'use strict';

const select_usuarios = document.querySelector('#txt-usuarios');
const select_abuso = document.querySelector('#txt-abuso');
const select_pruebas = document.querySelector('#img-pruebas');
const select_cometarios = document.querySelector('#txt-comentario');
const boton_enviar = document.querySelector('#btn-enviar');

const limpiar = () => {
    select_usuarios.value = 'blanco';
    select_abuso.value = 'blanco';
    select_cometarios.value = '';
};

const obtener_datos = () => {
    let usuario = select_usuarios.value;
    let abuso = select_abuso.value;
    let pruebas = select_pruebas.value;
    let comentario = select_cometarios.value;

    console.log('El usuario reportado por abuso es: ', usuario);
    console.log('El tipo de abuso es: ', abuso);
    console.log('Las pruebas adjuntadas son: ', pruebas);
    console.log('El comentario es: ' + comentario);

    Swal.fire({
        'title': 'El reporte ha sido enviado',
        'icon': 'success',
        'text': 'Nos pondremos en contacto con usted lo antes posible'
    }).then(() => {
        limpiar();
    });

};

const validar = () => {
    let error = false;
    let campos_requeridos = document.querySelectorAll(':required');

    campos_requeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            campo.classList.remove('error-input');
        }
    });

    if (select_usuarios.value == 'blanco') {
        error = true;
        select_usuarios.classList.add('error-input');
    } else {
        select_usuarios.classList.remove('error-input');
    }

    if (select_abuso.value == 'blanco') {
        error = true;
        select_abuso.classList.add('error-input');
    } else {
        select_abuso.classList.remove('error-input');
    }

    //Si no hay error previo se llama a la funcion obtener datos
    if (error == false) {
        obtener_datos();
    } else {
        Swal.fire({
            'title': 'No se pudo enviar el reporte',
            'icon': 'warning',
            'text': 'Por favor revise los campos resaltados'
        });
    }

};

boton_enviar.addEventListener('click', validar);