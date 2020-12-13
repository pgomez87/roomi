'use strict';
const contViviendas = document.querySelector('#container-viviendas');

let idVivienda;

const mostrarViviendas = async() => {
    let viviendasDisp = await listar_viviendas();
    let i = 0;
    let a = 0;

    viviendasDisp.forEach((vivienda) => {

        let div1 = document.createElement('div');
        div1.className = 'casa-individual';
        div1.id = vivienda._id;
        div1.classList.add('caja-casas')
        div1.innerHTML = `<h2>${vivienda.nombre}</h2>
            <p>${vivienda.descripcion}</p>
            <img src="${vivienda.imagen}"> `;

        let botonVivienda = document.createElement('button');
        botonVivienda.type = 'button';
        botonVivienda.classList.add('btn-ver-vivienda');
        botonVivienda.innerText = 'Ver más información';
        botonVivienda.addEventListener('click', () => {
            localStorage.setItem('viviendaSeleccionada', vivienda._id);
            console.log(vivienda._id);
        });
        div1.appendChild(botonVivienda);

        contViviendas.appendChild(div1);

    });

    { /* <button type="button"  class="btn-ver-vivienda" id="btn-ver-vivienda">Ver mas informacion</button> */ }



};

mostrarViviendas();

//pruebas

// for (i; i < viviendasDisp.length; i++) {
//     console.log('tucan');
//     localStorage.setItem('objetosPrueba', vivienda._id);
// }



// let blargh = localStorage.getItem('objetoPrueba');

// if (localStorage.getItem('objetoPrueba')) {
//     console.log('objetoPrueba');
//     console.log(blargh);    
// }




// const infoViviendaIndividual = async() => {
//     let viviendasRedir = await listar_viviendas();
//     viviendasRedir.forEach((viv) => {


//         let boton = document.querySelector('#btn-ver-vivienda');
//         boton.addEventListener('click', (shite) => {
//             console.log('shite');
//         });

//     });


//     let i = 0;

//     for (i; i < viviendasRedir.length; i++) {

//     }

//     const prueba = () => {
//         console.log('prueba');
//     }

//     btnRedir.addEventListener('click', prueba);

// }



// infoViviendaIndividual();



// const btnVerMasViv = document.querySelector('#btn-info-vivienda');
// console.log(btnVerMasViv);

// btnVerMasViv.addEventListener('click', prueba);



//<a href="info-vivienda-usuario.html" ></a>