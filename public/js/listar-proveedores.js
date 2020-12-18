'use strict';

let tabla_agua = document.querySelector('#tbl-prov-agua tbody');


const mostrar_proveedores = async() => {
    let lista_proveedores = await listar_proveedores();
    tabla_agua.innerHTML = '';


    lista_proveedores.forEach((proveedor) => {
        let fila_agua = tabla_agua.insertRow();

        if (proveedor.servicio.includes('Agua')) {
            fila_agua.insertCell().innerHTML = proveedor.nombre;
        }


    });
};

mostrar_proveedores();