'use strict';

//para poder elegir un elemento:
//const botonEnviar = document.getElementById('btn-enviar');
//const botonEnviar = document.querySelector('#btn-enviar'); <--- mejor

const botonEnviar = document.querySelector('#btn-enviar');
const textoEmail = document.querySelector('#txt-email')
const textoContrasena = document.querySelector('#txt-contrasena');


//validar edad, entre 1 y 99 años: ^[0-9]{1,2}+$ 

const limpiar = () => {
    textoEmail.value = '';
    textoContrasena.value = '';
}


function obtenerDatos() {
    let nombre = textoEmail.value;
    let contrasena = textoContrasena.value;

    console.log(`el username es ${nombre}`);
    console.log(`el password es ${contrasena}`);

    Swal.fire({
        'title': '',
        'icon': 'success',
        'text': 'Nos pondremos en contacto con usted lo antes posible.'
    }).then(() => {
        limpiar();
    });
}

const validar = () => {
    let error = false;
    let regexEmail = /^[a-zA-Z0-9]+@{1}[a-zA-Z]+(.com|.net.org.ac.cr)$/;
    let regexContrasena = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let camposRequeridos = document.querySelectorAll(':required');

    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            error = false;
            campo.classList.remove('error-input');
        }
    });

    if (!regexEmail.test(textoEmail.value)) {
        error = true;
        textoEmail.classList.add('error-input');
    } else {
        error = false;
        textoEmail.classList.remove('error-input');
    }

    if (!regexContrasena.test(textoContrasena.value)) {
        error = true;
        textoContrasena.classList.add('error-input');
    } else {
        error = false;
        textoContrasena.classList.remove('error-input');
    }


    if (error == false) {
        obtenerDatos();
        window.open("dashboard-coordinador.html", "_self");
    } else {
        Swal.fire({
            'title': 'No se pudo iniciar sesión',
            'icon': 'warning',
            'text': 'Por favor revise los campos resaltados'
        });
    }
}


botonEnviar.addEventListener('click', validar);