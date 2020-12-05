'uset strict';

let btnNoticias = document.querySelector('#agregar-noticias');
let btnAgregarNot = document.querySelector('#agregarNoticia')
let cuadro = document.querySelector('#box-noticias');

const abrirForm = () => {
    cuadro.classList.add('abrir-form');
}

const cerrarForm = () => {
    cuadro.classList.remove('abrir-form');
}




btnNoticias.addEventListener('click', abrirForm);
btnAgregarNot.addEventListener('click', cerrarForm);