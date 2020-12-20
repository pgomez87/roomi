'use strict';

const card_container = document.querySelector('#card-container');
const detalles = document.querySelector('#detalles');
const area = document.querySelector('#area');
const encargado = document.querySelector('#encargado');
const estado = document.querySelector('#estado');

card_container.innerHTML = '';

const mostrar_cards_tareas = async() => {
    let tareas = await listar_tareas();

    tareas.forEach((tarea) => {

        let div_card = document.createElement('div');
        div_card.classList.add('card');

        let div_nombre = document.createElement('div');
        div_nombre.innerHTML = `<h2>${tarea.nombre}</h2>`

        let div_detalles = document.createElement('div');
        div_detalles.innerHTML = `<h3>${"Detalles adicionales"}</h3> <p>${tarea.detalles}</p>`

        let div_area = document.createElement('div');
        div_area.innerHTML = `<h3>${"Área"}</h3><p>${tarea.area}</p>`

        let div_encargado = document.createElement('div');
        div_encargado.innerHTML = `<h3>${"Encargado"}</h3><p>${tarea.encargado}</p>`

        let div_estado = document.createElement('div');
        div_estado.innerHTML = `<h3>${"Estado"}</h3><p>${tarea.estado}</p>`

        let div_botones = document.createElement('div');

        let boton_eliminar = document.createElement('button');
        boton_eliminar.type = 'button';
        boton_eliminar.innerText = 'Eliminar';
        boton_eliminar.addEventListener('click', () => {
            Swal.fire({
                icon: 'warning',
                text: '¿Está seguro que desea eliminar esta lista de compras?',

                confirmButtonText: 'Sí'
            }).then((result) => {
                if (result.isConfirmed) {
                    // Servicio
                    eliminar_tarea(tarea._id);
                }
            });
        });

        card_container.appendChild(div_card);
        div_card.appendChild(div_nombre);
        div_card.appendChild(div_detalles);
        div_card.appendChild(div_area);
        div_card.appendChild(div_encargado);
        div_card.appendChild(div_estado);
        div_card.appendChild(div_botones);
        div_botones.appendChild(boton_eliminar);

    });
};


mostrar_cards_tareas();