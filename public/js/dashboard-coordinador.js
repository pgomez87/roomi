'use strict';

const boton_ver_tareas = document.querySelector('#boton-ver-tareas');
const boton_ver_facturas = document.querySelector('#boton-ver-facturas');

boton_ver_tareas.addEventListener('click', () => {
    window.location.href = 'tareas-coordinador.html';
});

boton_ver_facturas.addEventListener('click', () => {
    window.location.href = 'facturas-coordinador.html';
});