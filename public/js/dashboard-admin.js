'use strict';

const tabla_publicidad = document.querySelector('#tbody-publicidad');
const boton_eliminar_publicidad = document.querySelector('#eliminar-publicidad');
const lista_publicidades_id = [];


const mostrar_publicidad = async() => {
    let lista_pulbicidades = await listar_publicidad();

    tabla_publicidad.innerHTML = '';

    lista_pulbicidades.forEach(publicidad => {
        let table_row = tabla_publicidad.insertRow();
        let titulo = table_row.insertCell();
        titulo.innerText = publicidad.titulo;
        let fecha = table_row.insertCell();
        fecha.innerText = `${publicidad.fecha.getDate()}/${publicidad.fecha.getMonth()}/${publicidad.fecha.getFullYear()}`;

        table_row.addEventListener('click', () => {
            if (table_row.classList.contains('selected')) {
                table_row.classList.remove('selected');
                let indice = lista_publicidades_id.indexOf(publicidad.id);
                lista_publicidades_id.splice(indice, 1);
            } else {
                table_row.classList.add('selected');
                lista_publicidades_id.push(publicidad.id)
            }
        });
    });
};

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