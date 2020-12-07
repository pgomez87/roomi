'use strict';

const tabla = document.querySelector('#tabla-facturas-pendientes tbody');
// const tablaPagada = document.querySelector('#facturas-pagadas tbody');

const mostrarTablas = async() => {
    const facturas = await listarFacturas();
    tabla.innerHTML = '';
    console.log(facturas);

    facturas.forEach((factura) => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = factura.fecha;
        fila.insertCell().innerHTML = factura.nombre;
        fila.insertCell().innerHTML = factura.tipo;
        fila.insertCell().innerHTML = factura.proveedor;
        fila.insertCell().innerHTML = factura.porcentaje;
        fila.insertCell().innerHTML = `<td><input type="checkbox" class="checkbox-pequeno" id=${factura._id}></td>`;

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