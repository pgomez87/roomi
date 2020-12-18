'use strict';

const tabla = document.querySelector('#tabla-reportes-usuarios tbody');

const mostrar_abusos = async() => {
    let lista_abusos = await listar_abusos();
    tabla.innerHTML = '';

    lista_abusos.forEach((abuso) => {
        let fila = tabla.insertRow();

        fila.insertCell().innerHTML = abuso.usuario_reportar;
        fila.insertCell().innerHTML = abuso.tipo_abuso;
        fila.insertCell().innerHTML = abuso.pruebas;
        fila.insertCell().innerHTML = abuso.comentario;

    });
};
mostrar_abusos();