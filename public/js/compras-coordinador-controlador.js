'use strict';

const btn_enviar = document.querySelector('#btn-enviar');

const txt_producto = document.querySelector('#txt-producto');
const slt_categoria = document.querySelector('#slt-categorias');
const txt_cantidad = document.querySelector('#txt-cantidad');

const limpiar = () => {
    txt_producto.value = '';
    slt_categoria.value = '';
    txt_cantidad.value = '';
}

const obtener_datos = () => {
    let producto = txt_producto.value;
    let categoria = slt_categoria.value;
    let cantidad = txt_cantidad.value;

    registrar_compra(producto, categoria, cantidad)
    console.log(producto, categoria, cantidad)
};

const validar = () => {
    let error = false;
    let regex_producto = /^[a-zA-Z0-9 ]+$/;
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

    if (!regex_producto.test(txt_producto.value)) {
        error = true;
        txt_producto.classList.add(`error-input`);
    } else {
        txt_producto.classList.remove(`error-input`);
    }

    if (!regex_cantidad.test(txt_cantidad.value)) {
        error = true;
        txt_cantidad.classList.add(`error-input`);
    } else {
        txt_cantidad.classList.remove(`error-input`);
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