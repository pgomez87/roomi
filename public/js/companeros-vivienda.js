'use strict';

const div_companeros = document.querySelector('.container-companeros');

let lista_companeros = listar_usuarios();

lista_companeros.forEach(usuario => {
    div_companeros.innerHTML = '';

    let card = document.createElement('div');
    card.classList.add('tarjeta-companeros');

    let foto = document.createElement('img');
    foto.classList.add('foto-companero');

    let nombre = document.createElement('h3');
    nombre.innerText = usuario.nombre;

    let info = document.createElement('p');

    card.appendChild(foto);
    card.appendChild(nombre);
    card.appendChild(info);
    div_companeros.appendChild(card);
});