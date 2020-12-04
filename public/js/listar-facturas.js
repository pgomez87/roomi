'use strict';

const tabla = document.querySelector('#facturas-pagadas tbody');
// const tablaPagada = document.querySelector('#facturas-pagadas tbody');

const mostrarTablas = async() => {
    let listaFacturas = await listarFacturas();
    tabla.innerHTML = '';

    console.log(listarFacturas);


    listaFacturas.forEach((factura) => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = 'fuck';
        fila.insertCell().innerHTML = factura.nombre;
    });
}

mostrarTablas();