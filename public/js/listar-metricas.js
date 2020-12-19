'use strict';

const cont_usuarios = document.querySelector('#conteo-usuarios');

const mostrar_metricas = async() => {
    let lista_metricas_usuarios = await listar_usuarios();
    cont_usuarios.innerHTML = '';

    lista_metricas_usuarios.forEach((usuario) => {
        cont_usuarios += 1;
    });
};