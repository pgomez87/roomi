'use strict';

const boton_confirmar = document.querySelector('#btn-enviar');
const input_temporasenna = document.querySelector('#pass-temporal');
const input_nuevasenna = document.querySelector('#pass-nueva');
const input_verificasenna = document.querySelector('#pass-verifica');
const input_checkbox = document.querySelector('#robot-select');
const caja_recaptcha = document.querySelector('#recaptcha-box');

const limpiar = () => {
    input_nuevasenna.value = '';
    input_verificasenna.value = '';
    input_temporasenna.value = '';
};

const validar = () => {
    let error = false;
    let regex_contrasenna = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let campos_requeridos = document.querySelectorAll(':required');


    campos_requeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            campo.classList.remove('error-input');

        }
    });

    if (!regex_contrasenna.test(input_temporasenna.value)) {
        error = true;
        input_temporasenna.classList.add('error-input');
    } else {
        input_temporasenna.classList.remove('error-input');
    }

    if (!regex_contrasenna.test(input_nuevasenna.value)) {
        error = true;
        input_nuevasenna.classList.add('error-input');
    } else {
        input_nuevasenna.classList.remove('error-input');
    }

    if (!regex_contrasenna.test(input_verificasenna.value)) {
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

    if (input_nuevasenna.value == input_verificasenna.value && error == false) {
        // Servicio
        modificar_contrasena(input_temporasenna.value, input_nuevasenna.value);
        console.log(`${input_temporasenna.value} -- ${input_nuevasenna.value}`);
        limpiar();
    } else {
        input_nuevasenna.classList.add('error-input');
        input_verificasenna.classList.add('error-input');
        Swal.fire({
            title: 'Cuidado',
            icon: 'warning',
            text: 'Las contraseñas no coinciden'
        });

    };

};

boton_confirmar.addEventListener('click', validar);