'use strict';

const tabla = document.querySelector('#tablaFacturasPagadas tbody');
// const tablaPagada = document.querySelector('#facturas-pagadas tbody');

const mostrarTablas = async() => {
    let listaFacturas = await listarFacturas();
    tabla.innerHTML = '';

    // listaFacturas.forEach((factura) => {
    //     let fila = tabla.insertRow();
    //     fila.insertCell().innerHTML = factura.fecha;
    console.log(listaFacturas);
    // });
}


// let mostrarTablas = () => {
//     tabla.innerHTML = '';

//     let fila = tabla.insertRow();
//     fila.insertCell().innerHTML = 'mierda';
//     fila.insertCell().innerHTML = 'pal';
//     fila.insertCell().innerHTML = 'estao';


// }

mostrarTablas();