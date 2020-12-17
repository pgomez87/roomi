'use strict';

const boton_enviar = document.querySelector('#btn-registrarse');
const input_nombre = document.querySelector('#txt-nombre');
const input_apellido = document.querySelector('#txt-apellido');
const input_contrasena = document.querySelector('#txt-contrasena');
const input_correo = document.querySelector('#txt-correo');
const input_telefono = document.querySelector('#txt-telefono');
const input_cedula = document.querySelector('#txt-cedula');
const input_direccion = document.querySelector('#txt-direccion');


const limpiar_espacios = () => {
    let lista_espacios = document.querySelectorAll('[required]');

    lista_espacios.forEach(element => {
        element.value = '';
    });
};


const obtener_datos = () => {

    let nombre = input_nombre.value;
    let apellido = input_apellido.value;
    let contrasena = input_contrasena.value;
    let correo = input_correo.value;
    let telefono = input_telefono.value;
    let cedula = input_cedula.value;
    let direccion = input_direccion.value;
    let tipo = 'regular';

    registrar_usuario(nombre, apellido, contrasena, correo, telefono, cedula, direccion, tipo);
    console.log(nombre, apellido, contrasena, correo, telefono, cedula, direccion, tipo);

    Swal.fire({
        'title': 'Excelente!',
        'icon': 'success',
        'text': 'Su registro fue exitoso.'
    }).then(() => {
        // limpiar_espacios();
    });
};


const validar = () => {
    let error = false;
    let regex_nombre = /^[a-zA-Z ]+$/;
    let regex_telefono = /^[a-zA-Z0-9]+$/;
    let regex_correo = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let regex_direccion = /^[a-zA-Z0-9\s]+$/;
    let regex_contrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let campos_requeridos = document.querySelectorAll(':required');

    campos_requeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            campo.classList.remove('error-input');
        }
    });

    if (regex_nombre.test(input_nombre.value)) {
        input_nombre.classList.remove('error-input');
    } else {
        error = true;
        input_nombre.classList.add('error-input');
    };

    if (regex_telefono.test(input_telefono.value)) {
        input_telefono.classList.remove('error-input');
    } else {
        error = true;
        input_telefono.classList.add('error-input');
    };

    if (regex_correo.test(input_correo.value)) {
        input_correo.classList.remove('error-input');
    } else {
        error = true;
        input_correo.classList.add('error-input');
    };

    if (regex_direccion.test(input_direccion.value)) {
        input_direccion.classList.remove('error-input');
    } else {
        error = true;
        input_direccion.classList.add('error-input');
    };

    if (regex_contrasena.test(input_contrasena.value)) {
        input_contrasena.classList.remove('error-input');
    } else {
        error = true;
        input_contrasena.classList.add('error-input');
    }

    if (error == false) {
        obtener_datos();
    } else {
        Swal.fire({
            'title': 'Debe revisar sus datos. ',
            'text': 'Su formulario no fue enviado.',
            'icon': 'warning'
        });
    };
};



boton_enviar.addEventListener('click', validar);