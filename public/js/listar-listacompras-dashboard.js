'use strict';

const tabla = document.querySelector('#tbl-listascompras tbody');
const mostrar_listascompras = async() => {
    let lista_listascompras = await listar_listascompras();

    tabla.innerHTML = '';

    lista_listascompras.forEach(listacompras => {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = listacompras.nombre;
        fila.insertCell().innerHTML = listacompras.encargado;
        fila.insertCell().innerHTML = listacompras.estado;

    });
};


mostrar_listascompras();