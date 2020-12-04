'use strict';

const tabla = document.querySelector('#tabla-facturas-pagadas tbody');
// const tablaPagada = document.querySelector('#facturas-pagadas tbody');

const mostrarTablas = async() => {
    let listaFacturas = await listarFacturas();
    tabla.innerHTML = '';

    listaFacturas.forEach((factura) => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = factura.nombre;
        console.log(factura.nombre);
    });
}

mostrarTablas();

listarFacturas();