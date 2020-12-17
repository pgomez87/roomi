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

const llenarSelectsUsuario = async() => {
    const usuarios = await listarUsuariosFacturas();
    selectFacturas.innerHTML = '<option value="" selected>--Elegir compañero--</option>';

    usuarios.forEach((usuario) => {

        // selectFacturas.innerHTML = `<option value="" selected>--Elegir compañero--</option>`;
        let option = document.createElement('option');
        option.value = `${usuario.nombre} ${usuario.apellido}`;
        option.innerHTML = `${usuario.nombre} ${usuario.apellido}`;
        selectFacturas.appendChild(option);
    })

}

const selectServicio = document.querySelector('#tipo-factura');
const selectProveedor = document.querySelector('#proveedor-crear-factura');

const llenarSelectsProveedores = async() => {
    const proveedores = await listarProveedoresFacturas();

    proveedores.forEach((proveedor) => {
        switch (selectServicio.value) {
            case 'agua':
                if (selectServicio.value.toLowerCase() === proveedor.servicio.toLowerCase()) {
                    console.log(proveedor.nombre);
                }
                break;
            case 'electricidad':
                if (selectServicio.value.toLowerCase() === proveedor.servicio.toLowerCase()) {
                    console.log(proveedor.nombre);
                }
                break;
            default:
                console.log('nope');
                break;
        }
    })
}

mostrarTablas();
llenarSelectsUsuario();
// llenarSelectsProveedores();
selectServicio.addEventListener('change', llenarSelectsProveedores);