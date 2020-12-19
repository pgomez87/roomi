'use strict';

let span_nombre_listacompras = document.querySelector('#nombre-listacompras');
let tabla = document.querySelector('#tbl-compras tbody');
const mostrar_info = async() => {
    let listacompras = await buscar_listacompras();

    span_nombre_listacompras.innerText = listacompras.nombre;

    listacompras.compras.forEach(compra => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = compra.producto;

        console.log(listacompras.producto)
    });

};




if (localStorage.getItem('listacompras_seleccionada')) {
    mostrar_info();
} else {
    Swal.fire({
        title: 'Atención',
        text: 'Debe seleccionar una lista de compras primero, para ver la información',
        icon: 'warning'
    }).then(() => {
        window.location.href = 'compralista-perfil.html';
    });
}