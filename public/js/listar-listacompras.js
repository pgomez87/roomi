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


        let boton_eliminar = document.createElement('button');
        boton_eliminar.type = 'button';
        boton_eliminar.innerText = 'Eliminar';
        boton_eliminar.addEventListener('click', () => {
            Swal.fire({
                icon: 'warning',
                text: '¿Está seguro que desea eliminar esta lista de compras?',
                showCancelButton: true,
                confirmButtonText: 'Sí'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Servicio
                    eliminar_listacompras(listacompras._id);
                }
            })

        });

        celda_opciones.appendChild(boton_perfil);
        celda_opciones.appendChild(boton_eliminar);
    });
};


mostrar_listascompras();