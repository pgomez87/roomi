'use strict';

const btn_enviar = document.querySelector('#btn-enviar');
const input_producto = document.querySelector('#txt-producto');
const input_categoria = document.querySelector('#txt-categoria');
const input_cantidad = document.querySelector('#txt-cantidad');

const limpiar = () => {
    input_producto.value = '';
    input_categoria.value = '';
    input_cantidad.value = '';
}

const obtener_datos = () => {
    let producto = input_producto.value;
    let categoria = input_categoria.value;
    let cantidad = input_cantidad.value;

    console.log(`El producto es ${producto}, la categoria es ${categoria} y la cantidad ${cantidad}.`)

    Swal.fire({
        'title': `El artículo ha sido registrado`,
        'icon': `success`,
    }).then(() => {
        limpiar();
    })
};

const validar = () => {
    let error = false;
    let regex_producto = /^[a-zA-Z0-9 ]+$/;
    let regex_categoria = /^[a-zA-Z ]+$/;
    let regex_cantidad = /^[1-9]{1}[0-9]{0,2}$/;
    let campos_requeridos = document.querySelectorAll(":required");

    campos_requeridos.forEach(campo => {
        if (campo.value == ``) {
            error = true;
            campo.classList.add(`error-input`);
        } else {
            campo.classList.remove(`error-input`)
        }
    });

    if (!regex_producto.test(input_producto.value)) {
        error = true;
        input_producto.classList.add(`error-input`);
    } else {
        input_producto.classList.remove(`error-input`);
    }

    if (!regex_categoria.test(input_categoria.value)) {
        error = true;
        input_categoria.classList.add(`error-input`);
    } else {
        input_categoria.classList.remove(`error-input`);
    }

    if (!regex_cantidad.test(input_cantidad.value)) {
        error = true;
        input_cantidad.classList.add(`error-input`);
    } else {
        input_cantidad.classList.remove(`error-input`);
    }

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