'use strict';

const tareasModel = require("../../api/models/tareas.model");

const tabla = document.querySelector('#tbl-tareas tbody');
const mostrar_tareas = async() => {
    let lista_tareas = await listar_tareas();

    tabla.innerHTML = '';

    lista_tareas.forEach(tarea => {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = tarea.nombre;
        fila.insertCell().innerHTML = tarea.encargado;
        fila.insertCell().innerHTML = tarea.estado;

    });
};


mostrar_tareas();