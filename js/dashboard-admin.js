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