'use strict';

const btn_enviar = document.querySelector('#btn-enviar');
const input_nombre = document.querySelector('#txt-nombre');
const input_costo = document.querySelector('#txt-costo');
const input_capacidad = document.querySelector('#txt-capacidad');
const input_direccion = document.querySelector('#txt-direccion');
const input_descripcion = document.querySelector('#txt-descripcion');
const input_imagen = document.querySelector('#file-imagen');
const input_habitaciones = document.querySelector('#slt-habitaciones');
const input_bannos = document.querySelector('#slt-bannos');
const input_cocina = document.querySelector('#checkbox-cocina');
const input_pilas = document.querySelector('#checkbox-pilas');
const input_comedor = document.querySelector('#checkbox-comedor');
const input_sala = document.querySelector('#checkbox-sala');
const input_jardin = document.querySelector('#checkbox-jardin');
const input_garaje = document.querySelector('#checkbox-garaje');

const limpiar = () => {
    input_nombre.value = '';
    input_costo.value = '';
    input_capacidad.value = '';
    input_descripcion.value = '';
    input_direccion.value = '';
    input_imagen.value = '';
    input_habitaciones.value = '';
    input_bannos.value = '';
    input_cocina.value = '';
    input_pilas.value = '';
    input_comedor.value = '';
    input_sala.value = '';
    input_jardin.value = '';
    input_garaje.value = '';
}

const obtener_datos = () => {
    let nombre = input_nombre.value;
    let costo = input_costo.value;
    let capacidad = input_capacidad.value;
    let descripcion = input_descripcion.value;
    let direccion = input_direccion.value;
    let imagen = input_imagen.value;
    let habitaciones = input_habitaciones.value;
    let bannos = input_bannos.value;
    let cocina = input_cocina.value;
    let pilas = input_pilas.value;
    let comedor = input_comedor.value;
    let sala = input_sala.value;
    let jardin = input_jardin.value;
    let garaje = input_garaje.value;

    registrar_vivienda(nombre, costo, capacidad, descripcion, direccion, imagen, habitaciones, bannos, cocina, pilas, comedor, sala, jardin, garaje)

    Swal.fire({
        'title': `Su solicitud ha sido enviada`,
        'icon': `success`,
        'text': `Pronto nos pondremos en contacto con usted`,
    }).then(() => {
        limpiar();
    })
};

const validar = () => {
    let error = false;
    let regex_nombre = /^[a-zA-Z ]+$/;
    let regex_costo = /^[0-9]+$/;
    let regex_capacidad = /^[0-9]/;
    let regex_direccion = /^[a-zA-Z0-9 ]+$/;
    let regex_descripcion = /^[a-zA-Z0-9 ]+$/;
    //let regex_imagen = /.*\.(jpe?g|png)$/igm;
    let campos_requeridos = document.querySelectorAll(":required");

    campos_requeridos.forEach(campo => {
        if (campo.value == ``) {
            error = true;
            campo.classList.add(`error-input`);
        } else {
            campo.classList.remove(`error-input`)
        }
    });

    if (!regex_nombre.test(input_nombre.value)) {
        error = true;
        input_nombre.classList.add(`error-input`);
    } else {
        input_nombre.classList.remove(`error-input`);
    }

    if (!regex_costo.test(input_costo.value)) {
        error = true;
        input_costo.classList.add(`error-input`);
    } else {
        input_costo.classList.remove(`error-input`);
    }

    if (!regex_capacidad.test(input_capacidad.value)) {
        error = true;
        input_capacidad.classList.add(`error-input`);
    } else {
        input_capacidad.classList.remove(`error-input`);
    }

    if (!regex_direccion.test(input_direccion.value)) {
        error = true;
        input_direccion.classList.add(`error-input`);
    } else {
        input_direccion.classList.remove(`error-input`);
    }

    if (!regex_descripcion.test(input_descripcion.value)) {
        error = true;
        input_descripcion.classList.add(`error-input`);
    } else {
        input_descripcion.classList.remove(`error-input`);
    }

    //if (!regex_imagen.test(input_imagen.value)) {
    //    error = true;
    //    input_imagen.classList.add(`error-input`);
    //} else {
    //    input_imagen.classList.remove(`error-input`);
    //}

    if (error == false) {
        obtener_datos();
    } else {
        Swal.fire({
            'title': `No ha sido posible enviar su solicitud`,
            'icon': `error`,
            'text': `Revise que se hayan ingresado los datos correctos`,
        });
    }
};

btn_enviar.addEventListener('click', validar);