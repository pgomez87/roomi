'use strict';
const btn_aceptar = document.querySelector('#btn-enviar');

const obtener_datos = async() => {
    console.log("prueba inicio obtener datos");
    let input_requeridos = document.querySelectorAll('input:required');

    input_requeridos.forEach(input => {
        if (input.value == '') {
            input.classList.add('error-input');
            error = false;
        } else {
            input.classList.remove('error-input');
        }
    });
    //Validación contraseña igual a la confirmación
    if (input_requeridos[1].value == input_requeridos[2].value) {
        console.log(`${input_requeridos[1].value} -- ${input_requeridos[0].value} - ${input_requeridos[2].value}`);
        // Servicio
        modificar_contrasena(input_requeridos[0].value, input_requeridos[1].value);
    } else {
        input_requeridos[1].classList.add('error-input');
        input_requeridos[2].classList.add('error-input');
        Swal.fire({
            title: 'Cuidado',
            icon: 'warning',
            text: 'Las contraseñas no coinciden'
        });

    };
};

btn_aceptar.addEventListener('click', obtener_datos);