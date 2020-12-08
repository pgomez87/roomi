'use strict';

const btn_agregar = document.querySelector('#btn-agregar');
const input_nombre = document.querySelector('#txt-nombre');
const input_servicio = document.querySelector('#slt-servicio');

const limpiar = () => {
    input_nombre.value = '';
    input_servicio.value = '';
}

const obtener_datos = () => {
    let nombre = input_nombre.value;
    let servicio = input_servicio.value;

    registrar_proveedor(nombre, servicio)

    Swal.fire({
        'title': 'El proveedor ha sido registrado con éxito',
        'icon': 'success',
    }).then(() => {
        limpiar();
    })
};

const validar = () => {
    let error = false;
    let campos_requeridos = document.querySelectorAll(':required');

    campos_requeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            campo.classList.remove('error-input')
        }
    });


    if (error == false) {
        obtener_datos();
    } else {
        Swal.fire({
            'title': 'No se ha podido registrar el proveedor',
            'icon': 'error',
            'text': 'Revise los campos resaltados',
        });
    }
};

btn_agregar.addEventListener('click', validar);