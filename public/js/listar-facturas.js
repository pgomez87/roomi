'use strict';

const tabla = document.querySelector('#tablaFacturasPagadas tbody');
// const tablaPagada = document.querySelector('#facturas-pagadas tbody');

const mostrarTablas = async() => {
    let listaFacturas = await listarFacturas();
    tabla.innerHTML = '';


    let fila = tabla.insertRow();
    fila.insertCell().innerHTML = "fuck";

    console.log(listaFacturas);

}


mostrarTablas();