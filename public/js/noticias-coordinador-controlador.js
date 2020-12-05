'uset strict';

let btnNoticias = document.querySelector('#agregar-noticias');
let cuadro = document.querySelector('#box-noticias');

const abrirForm = () => {
    location.replace('formulario-noticias.html');
}




btnNoticias.addEventListener('click', abrirForm);