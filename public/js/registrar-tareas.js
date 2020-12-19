'use strict';

let btn_agregartarea = document.querySelector('#agregar-tarea');

const obtenerDatos = () => {
    let nombre_tarea = document.querySelector('#nombre-tarea').value;
    let detalles = document.querySelector('#detalles-tarea').value;
    let area = document.querySelector('#slt-areas').value;
    let encargado = document.querySelector('#slt-encargados').value;

    registrarTarea(nombre_tarea, detalles, area, encargado);
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


btn_agregartarea.addEventListener('click', validar);