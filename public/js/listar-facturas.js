'use strict';

const tabla = document.querySelector('#tablaFacturasPagadas tbody');
// const tablaPagada = document.querySelector('#facturas-pagadas tbody');

const mostrarTablas = async() => {
    const facturas = await listarFacturas();
    tabla.innerHTML = '';

    facturas.forEach((factura) => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = factura.fecha;
        console.log(facturas);
    });
}


// let mostrarTablas = () => {
//     tabla.innerHTML = '';

//     let fila = tabla.insertRow();
//     fila.insertCell().innerHTML = 'm';
//     fila.insertCell().innerHTML = 'p';
//     fila.insertCell().innerHTML = 'e';


// }

mostrarTablas();