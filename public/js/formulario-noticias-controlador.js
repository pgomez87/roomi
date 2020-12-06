'use strict';

let btnAgregarNoticia = document.querySelector('#agregarNoticia');

const obtenerDatos = () => {
    let tituloNoticia = document.querySelector('#tituloNoticia').value;
    let textoNoticia = document.querySelector('#txtNoticias').value;
    let imagenNoticia = document.querySelector('#fotoNoticias').src;

    registrarNoticias(tituloNoticia, textoNoticia, imagenNoticia);
    console.log(tituloNoticia, textoNoticia, imagenNoticia);

}







// const prueba = () => {
//     console.log(tituloNoticia, textoNoticia);
// }


btnAgregarNoticia.addEventListener('click', obtenerDatos);