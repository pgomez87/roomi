'use strict';

const tabla_tarea = document.querySelector('#tbl-tareas tbody');
const mostrar_tareas = async() => {
    let lista_tareas = await listar_tareas();

    tabla_tarea.innerHTML = '';

    lista_tareas.forEach(tarea => {
        let fila = tabla_tarea.insertRow();

        fila.insertCell().innerHTML = tarea.nombre;
        fila.insertCell().innerHTML = tarea.encargado;
        fila.insertCell().innerHTML = tarea.estado;

    });
};


mostrar_tareas();