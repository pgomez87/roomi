'use strict';

const tabla = document.querySelector('#lista-viviendas-admin tbody');

const mostrarTablaViviendas = async() => {
    const viviendasAdmin = await listar_viviendas();

    tabla.innerHTML = '';

    viviendasAdmin.forEach((vivienda) => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = vivienda.nombre;
        fila.insertCell().innerHTML = vivienda.descripcion;
        fila.insertCell().innerHTML = '<td><input type="checkbox" checked></td>';

        // console.log(vivienda.nombre);

    });
}


mostrarTablaViviendas();