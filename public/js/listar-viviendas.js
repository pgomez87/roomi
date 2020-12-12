'use strict';
const contViviendas = document.querySelector('#container-viviendas');

let idVivienda;

const mostrarViviendas = async() => {
    let viviendasDisp = await listar_viviendas();
    let i = 0;

    viviendasDisp.forEach((vivienda) => {
        for (i; i < viviendasDisp.length; i++) {
            console.log(i);
            let div1 = document.createElement('div');
            div1.className = 'casa-individual';
            div1.id = vivienda._id;
            idVivienda = vivienda._id;
            div1.innerHTML = `<h2>${vivienda.nombre}</h2>
            <p>${vivienda.descripcion}</p>
            <img src="${vivienda.imagen}">
            <button type="button"  class="btn-ver-vivienda" id="btn-ver-vivienda-${i}">Ver mas informacion</button>`;
            localStorage.setItem('objetoPrueba', JSON.stringify(idVivienda));
            contViviendas.appendChild(div1);
        }
        //crear divs

    });

    const prueba = () => {
        console.log('shiiiiiiiiiiiiiit');
    }

    let shit = document.querySelector(`#btn-ver-vivienda-2`);

    shit.addEventListener('click', prueba);
    console.log(shit);
















};





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


mostrarViviendas();
// infoViviendaIndividual();



// const btnVerMasViv = document.querySelector('#btn-info-vivienda');
// console.log(btnVerMasViv);

// btnVerMasViv.addEventListener('click', prueba);



//<a href="info-vivienda-usuario.html" ></a>