'use strict';

const tablaPendientes = document.querySelector('#tabla-facturas-pendientes tbody');
const tablaPagada = document.querySelector('#tabla-facturas-pagadas tbody');

const mostrarTablas = async() => {
    const facturas = await listarFacturas();
    tablaPendientes.innerHTML = '';
    // console.log(facturas);

    facturas.forEach((factura) => {
        let i = factura.activa;
        if (i === 'activa') {
            let fila = tablaPendientes.insertRow();
            fila.insertCell().innerHTML = factura.fecha.substring(0, 10);
            fila.insertCell().innerHTML = factura.nombre;
            fila.insertCell().innerHTML = factura.tipo;
            fila.insertCell().innerHTML = factura.proveedor;
            fila.insertCell().innerHTML = factura.porcentaje;
            fila.insertCell().innerHTML = `<td><input type="checkbox" class="checkbox-pequeno" id="${factura._id}"></td>`;
            fila.insertCell().innerHTML = factura.usuario;
            // console.log(factura.usuario);
        } else {
            let fila = tablaPagada.insertRow();
            fila.insertCell().innerHTML = factura.fecha.substring(0, 10);
            fila.insertCell().innerHTML = factura.nombre;
            fila.insertCell().innerHTML = factura.tipo;
            fila.insertCell().innerHTML = factura.proveedor;
        }
    });

}

const selectFacturas = document.querySelector('#factura-companero');

const llenarSelects = async() => {
    const usuarios = await listarUsuariosFacturas();
    selectFacturas.innerHTML = '';

    usuarios.forEach((usuario) => {
        // selectFacturas.innerHTML = `<option value="" selected>--Elegir compañero--</option>`;
        let option = document.createElement('option');
        option.value = `${usuario.nombre} ${usuario.apellido}`;
        option.innerHTML = `${usuario.nombre} ${usuario.apellido}`;
        selectFacturas.appendChild(option);
    })
}

mostrarTablas();
llenarSelects();