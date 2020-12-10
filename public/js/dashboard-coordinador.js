'use strict';


const boton_ver_tareas = document.querySelector('#boton-ver-tareas');
const boton_ver_facturas = document.querySelector('#boton-ver-facturas');

boton_ver_tareas.addEventListener('click', () => {
    window.location.href = 'tareas-coordinador.html';
});

boton_ver_facturas.addEventListener('click', () => {
    window.location.href = 'facturas-coordinador.html';
});

// listado de noticias dashboard coordinador
const tablaNoticiasDash = document.querySelector('#lista-usuarios tbody');
tablaNoticiasDash.innerHTML = '';


const noticiasDashboard = async() => {
    let noticiasDash = await listarNoticias();

    noticiasDash.forEach((noticia) => {
        let fila = tablaNoticiasDash.insertRow();
        fila.insertCell().innerHTML = noticia.titulo;

    });

    // console.log(noticiasDash);

}

noticiasDashboard();