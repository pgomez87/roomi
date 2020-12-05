'uset strict';

let btnNoticias = document.querySelector('#agregar-noticias');

const abrirForm = () => {
    location.replace('formulario-noticias.html');
}


btnNoticias.addEventListener('click', abrirForm);