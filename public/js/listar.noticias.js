'use strict';





// const mostrarNoticias = async() => {
//     let noticias = await listarNoticias();

//     noticias.forEach((noticia) => {
//         console.log(noticia);
//     });

// }



const pruebaEscritura = () => {

    let i;
    for (i = 0; i < 10; i++) {
        //crear div contenedor
        let div1 = document.createElement('div');
        div1.className = 'cajita';

        //crear divs que van adentro del primer div
        let div2 = document.createElement('div');
        div2.className = 'imagen-noticia';
        div2.innerHTML = `<img src="https://res.cloudinary.com/imagenes3d/image/upload/v1607224716/ikigugeyxgro8gc0j7hk.jpg">`;

        let div3 = document.createElement('div');
        div3.classList.add('texto-noticia');
        div3.innerHTML = `<h2>Se Alquila<br> Apartamento</h2> <p>Este es el comentario número ${i+1}</p> <p>Información al 84858988</p>`
            //append los dos childs al div contenedor
        div1.appendChild(div2);
        div1.appendChild(div3);

        //append todo al documento
        document.querySelector('#gridContainer').appendChild(div1);
    }
}



// mostrarNoticias();

pruebaEscritura();

// noticias.forEach((noticia) => {
//     let datos = grid.createElement('div');

//     datos.innerHTML = noticia.titulo;
//     datos.innerHTML = noticia.texto;
//     console.log('fuck. fuck. fuck.2')

// });








// //crear div contenedor
// let div1 = document.createElement('div');
// div1.className = 'cajita';

// //crear divs que van adentro del primer div
// let div2 = document.createElement('div');
// div2.className = 'imagen-noticia';
// div2.innerHTML = ' <img src="https://res.cloudinary.com/imagenes3d/image/upload/v1607224716/ikigugeyxgro8gc0j7hk.jpg">';

// let div3 = document.createElement('div');
// div3.classList.add('texto-noticia');
// div3.innerHTML = '<h2>Se Alquila<br> Apartamento</h2><p>Se alquila lujoso apartamento para 2 personas ubicado en Escazú. Cuenta con servicios incluidos de agua, luz e internet. Se acepta una mascota. Información al 84858988</p>'
//     //append los dos childs al div contenedor
// div1.appendChild(div2);
// div1.appendChild(div3);

// //append todo al documento
// document.querySelector('#gridContainer').appendChild(div1);