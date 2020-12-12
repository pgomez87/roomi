'use strict';
const contViviendas = document.querySelector('#container-viviendas');

let idVivienda;

const mostrarViviendas = async() => {
    let viviendasDisp = await listar_viviendas();
    let i = 0;
    let a = 0;

    viviendasDisp.forEach((vivienda) => {
        for (i; i < viviendasDisp.length; i++) {
            console.log('tucan')
        }
        // console.log(i);

        let div1 = document.createElement('div');
        div1.className = 'casa-individual';
        div1.id = vivienda._id;
        idVivienda = vivienda._id;
        div1.innerHTML = `<h2>${vivienda.nombre}</h2>
            <p>${vivienda.descripcion}</p>
            <img src="${vivienda.imagen}">
            <button type="button"  class="btn-ver-vivienda" id="btn-ver-vivienda">Ver mas informacion</button>`;
        localStorage.setItem('objetoPrueba', JSON.stringify(idVivienda));
        contViviendas.appendChild(div1);
    });



    const prueba = () => {
        console.log('shiiiiiiiiiiiiiit');
    }

    for (a; a < i; a++) {
        let btnID = document.querySelectorAll(`#btn-ver-vivienda`);
        btnID[a].addEventListener('click', prueba);
        if (a === viviendasDisp[a]) {
            console.log(`esto es ${a}, y esto es ${i}`);
        } else {
            console.log('shit');
        }
        // console.log(a);
    }
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