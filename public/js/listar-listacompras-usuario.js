'use strict';

const tabla = document.querySelector('#tbl-listascompras tbody');


const mostrar_listascompras = async() => {
    let lista_listascompras = await listar_listascompras();

    tabla.innerHTML = '';

    lista_listascompras.forEach(listacompras => {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = listacompras.nombre;
        fila.insertCell().innerHTML = listacompras.encargado;
        fila.insertCell().innerHTML = listacompras.estado;

        let celda_opciones = fila.insertCell();

        let boton_perfil = document.createElement('button');
        boton_perfil.type = 'button';
        boton_perfil.innerText = 'Ver detalles';
        boton_perfil.addEventListener('click', () => {
            localStorage.setItem('listacompras_seleccionada', listacompras._id);
            window.location.href = 'compralista-perfil.html';
        });



        celda_opciones.appendChild(boton_perfil);
    });
};


mostrar_listascompras();