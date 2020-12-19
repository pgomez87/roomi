'use strict';

const cont_usuarios = document.querySelector('#conteo-usuarios');

const mostrar_usuarios = async() => {
    let lista_usuarios = await listar_usuarios();
    cont_usuarios.innerHTML = '';

    lista_usuarios.forEach((usuario) => {
        let conteo_usuarios = +1;

    });
};

mostrar_usuarios();