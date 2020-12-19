'use strict';

let cerrarSesion = document.querySelector('#btn-cerrar-sesion');
let credenciales = sessionStorage.getItem('tipo_usuario');

console.log(credenciales);

cerrarSesion.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'inicio-sesion.html';
    // alert('what');
})


if (credenciales == null) {
    sessionStorage.clear();
    window.location.href = 'inicio-sesion.html';
}