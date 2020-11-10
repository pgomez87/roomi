'use strict';

const boton_enviar = document.querySelector('#btn-enviar');


function validar() {
    var valid = false;
    var x = document.querySelector('#form-eva');

    for (var i = 0; i < x.lenght; i++) {
        if (x[i].checked) {
            valid = true;
            break;
        }
    }
    if (valid) {
        alert("Validación de exito");
    } else {
        alert("Please Select uno");
        return false
    }
}

boton_enviar.addEventListener('click', validar);