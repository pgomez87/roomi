'use strict';

const div_compras = document.querySelector('#div_compras');
const btn_crear = document.querySelector('#btn-crear');

const mostrar_compras = async() => {
    let lista_compras = await listar_compras();

    div_compras.innerHTML = '';

    lista_compras.forEach(compra => {
        let div = document.createElement('div');

        let label = document.createElement('label');
        label.innerText = compra.producto

        let check = document.createElement('input');
        check.type = 'checkbox'

        div.appendChild(label);
        div.appendChild(check);

        div_compras.appendChild(div);

    });

};

mostrar_compras();