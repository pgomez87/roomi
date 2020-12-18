'use strict';
const btn_enviar = document.querySelector('#btn-enviar');
const div_compras = document.querySelector('#div_compras');

const txt_nombre = document.querySelector('#txt-nombre');
const txt_encargado = document.querySelector('#txt-encargado');


const mostrar_compras = async() => {
    let listado_compras = await listar_compras();

    div_compras.innerHTML = '';

    listado_compras.forEach(compra => {

        let div = document.createElement('div');

        let label = document.createElement('label');
        label.innerText = compra.producto;


        let check = document.createElement('input');
        check.type = 'checkbox';
        check.value = compra._id;

        div_compras.appendChild(div);
        div.appendChild(check);
        div.appendChild(label);


    });
};


const limpiar = () => {
    txt_nombre.value = '';
    txt_encargado.value = '';
}

const obtener_datos = () => {
    let nombre = txt_nombre.value;
    let encargado = txt_encargado.value;
    let compras_slc = [];

    document.querySelectorAll('input[type=checkbox]:checked').forEach(input => {
        compras_slc.push(input.value);
    });

    registrar_listacompras(nombre, encargado, compras_slc)
    console.log(nombre, encargado, compras_slc)
};


const validar = () => {
    let error = false;
    let regex_nombre = /^[a-zA-Z0-9 ]+$/;
    let regex_encargado = /^[a-zA-Z0-9 ]+$/;
    let campos_requeridos = document.querySelectorAll(":required");

    campos_requeridos.forEach(campo => {
        if (campo.value == ``) {
            error = true;
            campo.classList.add(`error-input`);
        } else {
            campo.classList.remove(`error-input`)
        }
    });

    if (!regex_nombre.test(txt_nombre.value)) {
        error = true;
        txt_nombre.classList.add(`error-input`);
    } else {
        txt_nombre.classList.remove(`error-input`);
    }

    if (!regex_encargado.test(txt_encargado.value)) {
        error = true;
        txt_encargado.classList.add(`error-input`);
    } else {
        txt_encargado.classList.remove(`error-input`);
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


mostrar_compras();
btn_enviar.addEventListener('click', validar);