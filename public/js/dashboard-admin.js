'use strict';

const boton_ver_usuarios = document.querySelector('#ver-mas-usuarios');
const boton_ver_publicidad = document.querySelector('#ver-mas-publicidad');
const lista_elementos_tabla = document.querySelectorAll('#tbody-publicidad tr');
const boton_eliminar_publicidad = document.querySelector('#eliminar-publicidad');

boton_ver_usuarios.addEventListener('click', () => {
    window.location.href = 'buscar-usuarios.html';
});

boton_ver_publicidad.addEventListener('click', () => {
    window.location.href = 'creacion-publicidad.html';
});

lista_elementos_tabla.forEach((table_row) => {
    table_row.addEventListener('click', () => {
        if (table_row.classList.contains('selected')) {
            table_row.classList.remove('selected');
        } else {
            table_row.classList.add('selected');
        }
    });
})

boton_eliminar_publicidad.addEventListener('click', () => {
    let lista_eliminar = document.querySelectorAll('.selected');

    lista_eliminar.forEach(table_row => {
        table_row.remove();
    });
});


//codigo para dsplay de proveedores en dashboard admin
const tablaProvDashAdmin = document.querySelector('#informacion-proveedores tbody');

const proveedoresDashAdmin = async() => {
    const proveedoresAdmin = await listar_proveedores();

    tablaProvDashAdmin.innerHTML = '';

    proveedoresAdmin.forEach((proveedor) => {
        let fila = tablaProvDashAdmin.insertRow();
        fila.insertCell().innerHTML = proveedor.servicio;
        fila.insertCell().innerHTML = proveedor.nombre;
    });


}



proveedoresDashAdmin();



// switch (proveedor.servicio) {
//     case 'Agua':
//         fila.insertCell().innerHTML = `<td>Agua</td>`;
//         fila.insertCell().innerHTML = proveedor.nombre;
//         break;
//     case 'Teléfono':
//         fila.insertCell().innerHTML = `<td>Teléfono</td>`;
//         fila.insertCell().innerHTML = proveedor.nombre;
//         break;
//     case 'Electricidad':
//         fila.insertCell().innerHTML = proveedor.servicio;
//         fila.insertCell().innerHTML = proveedor.nombre;
//         break;
//     case 'Internet':
//         fila.insertCell().innerHTML = proveedor.servicio;
//         fila.insertCell().innerHTML = proveedor.nombre;
//         break;
//     case 'Cable':
//         fila.insertCell().innerHTML = proveedor.servicio;
//         fila.insertCell().innerHTML = proveedor.nombre;
//         break;
//     default:
//         console.log('mierda pal estao');
//         break;
// }