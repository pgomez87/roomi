'use strict';

const btn_aceptar = document.querySelector('#btn-enviar');
const input_checkbox = document.querySelector('#robot-select');
const caja_recaptcha = document.querySelector('#recaptcha-box');
const input_temporasenna = document.querySelector('#pass-temporal');
const input_nuevasenna = document.querySelector('#pass-nueva');
const input_verificasenna = document.querySelector('#pass-verifica');

const limpiar = () => {
    input_temporasenna.value = '';
    input_nuevasenna.value = '';
    input_verificasenna.value = '';
};

const obtener_datos = async() => {

    let temporasenna = input_temporasenna;
    let nuevasenna = input_nuevasenna.value;
    let verificasenna = input_verificasenna.value;

    console.log('La contraseña temporal es: ', temporasenna);
    console.log('La nueva contraseña es: ', nuevasenna);
    console.log('La contraseña de verificación es: ', verificasenna);

    Swal.fire({
        'title': 'Su contraseña ha sido cambiada',
        'icon': 'success'
    }).then(() => {
        limpiar();
    });
};


const validar = () => {
    let error = false;
    let regex_contrasenna = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let input_requeridos = document.querySelectorAll(':required');

    input_requeridos.forEach(input => {
        if (input.value == '') {
            input.classList.add('error-input');
            error = false;
        } else {
            input.classList.remove('error-input');
        }
    });

    if (!regex_contrasenna.test(input_requeridos[0].value)) {
        error = true;
        input_temporasenna.classList.add('error-input');
    } else {
        input_temporasenna.classList.remove('error-input');
    }

    if (!regex_contrasenna.test(input_requeridos[1].value)) {
        error = true;
        input_nuevasenna.classList.add('error-input');
    } else {
        input_nuevasenna.classList.remove('error-input');
    }

    if (!regex_contrasenna.test(input_requeridos[2].value)) {
        error = true;
        input_verificasenna.classList.add('error-input');
    } else {
        input_verificasenna.classList.remove('error-input');
    }

    if (input_checkbox.checked) {
        caja_recaptcha.classList.remove('error-input');
    } else {
        error = true;
        caja_recaptcha.classList.add('error-input');
    }

    //Validación contraseña igual a la confirmación
    if (input_requeridos[1].value == input_requeridos[2].value) {
        // Servicio
        modificar_contrasena(input_requeridos[0].value, input_requeridos[1].value);
    } else {
        input_requeridos[1].classList.add('error-input');
        input_requeridos[2].classList.add('error-input');
        Swal.fire({
            'title': 'No se pudo cambiar su contraseña',
            'icon': 'warning',
            'text': 'La contraseña debe tener mínimo ocho digitos y debe contener al menos una letra mayúscula, una minúscula y un carácter'
        });
    }
};

btn_aceptar.addEventListener('click', validar);