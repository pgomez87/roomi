'use strict';

let btnAgregarNoticia = document.querySelector('#agregarNoticia');
let tituloNoticia = document.querySelector('#tituloNoticia').value;
let textoNoticia = document.querySelector('#txtNoticias').value;
let imagenNoticia = document.querySelector('#imgNoticias').src;



const prueba = () => {
    console.log(tituloNoticia, textoNoticia);
}


btnAgregarNoticia.addEventListener('click', prueba);