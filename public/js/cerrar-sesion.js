'use strict';


let credenciales = sessionStorage.getItem('tipo_usuario');

console.log(credenciales);



if (credenciales == null) {
    sessionStorage.clear();
    window.location.href = 'inicio-sesion.html';
}