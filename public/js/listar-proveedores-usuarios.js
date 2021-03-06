'use strict';

let tabla_agua = document.querySelector('#tbl-prov-agua tbody');
let tabla_electricidad = document.querySelector('#tbl-prov-electricidad tbody');
let tabla_telefono = document.querySelector('#tbl-prov-telefono tbody');
let tabla_internet = document.querySelector('#tbl-prov-internet tbody');
let tabla_cable = document.querySelector('#tbl-prov-cable tbody');


const mostrar_proveedores = async() => {
    let lista_proveedores = await listar_proveedores();
    tabla_agua.innerHTML = '';
    tabla_electricidad.innerHTML = '';
    tabla_telefono.innerHTML = '';
    tabla_internet.innerHTML = '';
    tabla_cable.innerHTML = '';


    lista_proveedores.forEach((proveedor) => {
        let fila_agua = tabla_agua.insertRow();
        let fila_electricidad = tabla_electricidad.insertRow();
        let fila_telefono = tabla_telefono.insertRow();
        let fila_internet = tabla_internet.insertRow();
        let fila_cable = tabla_cable.insertRow();



        if (proveedor.servicio.includes('Agua')) {
            fila_agua.insertCell().innerHTML = proveedor.nombre;
        }

        if (proveedor.servicio.includes('Electricidad')) {
            fila_electricidad.insertCell().innerHTML = proveedor.nombre;
        }

        if (proveedor.servicio.includes('telefono')) {
            fila_telefono.insertCell().innerHTML = proveedor.nombre;
        }

        if (proveedor.servicio.includes('Internet')) {
            fila_internet.insertCell().innerHTML = proveedor.nombre;
        }

        if (proveedor.servicio.includes('Cable')) {
            fila_cable.insertCell().innerHTML = proveedor.nombre;
        }


    });
};

mostrar_proveedores();