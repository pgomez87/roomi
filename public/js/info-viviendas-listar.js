'use strict';

const containerVivienda = document.querySelector('#container-vivienda');
const containerImagen = document.querySelector('#imagenes-container');
const containerInfo = document.querySelector('#info');
const containerDescripcion = document.querySelector('#container-descripcion');

const mostrarViviendaIndividual = async() => {
    let viviendaIndividual = await buscarVivienda();

    let div1 = document.createElement('div');
    div1.innerHTML = `<img src="${viviendaIndividual.imagen}" class="main-image">`;

    let div2 = document.createElement('div');
    div2.innerHTML = `<h2>ID de vivienda: #${viviendaIndividual._id}</h2>

    <div>
       <p>Descripción General:</p>
        <p>${viviendaIndividual.direccion}</p>
        <p>Habitaciones: ${viviendaIndividual.habitaciones}</p>
        <p>Baños: ${viviendaIndividual.bannos}</p>
    </div>

    <h2>Costo mensual: ₡${viviendaIndividual.costo}</h2>

    <button type="button">Enviar solicitud</button>`;

    let div3 = document.createElement('div');
    let cocina = () => {
        if (viviendaIndividual.cocina === 'on') {
            return '<p>Cocina: Sí</p>'
        } else {
            return '<p>Cocina: No</p>'
        }
    };
    let pilas = () => {
        if (viviendaIndividual.pilas === 'on') {
            return '<p>Cuarto de pilas: Sí</p>'
        } else {
            return '<p>Cuarto de pilas: No</p>'
        }
    };
    let comedor = () => {
        if (viviendaIndividual.comedor === 'on') {
            return '<p>Comedor: Sí</p>'
        } else {
            return '<p>Comedor: No</p>'
        }
    };
    let sala = () => {
        if (viviendaIndividual.sala === 'on') {
            return '<p>Sala: Sí</p>'
        } else {
            return '<p>Sala: No</p>'
        }
    };
    let jardin = () => {
        if (viviendaIndividual.jardin === 'on') {
            return '<p>Jardín: Sí</p>'
        } else {
            return '<p>Jardín: No</p>'
        }
    };
    let garaje = () => {
        if (viviendaIndividual.garaje === 'on') {
            return '<p>Garaje: Sí</p>'
        } else {
            return '<p>Garaje: No</p>'
        }
    };




    div3.classList.add('desc-general');
    div3.innerHTML = `<h2>Datos de la vivienda:</h2>
    <p>Dirección: ${viviendaIndividual.descripcion}</p>
    <p>${cocina()}</p>
    <p>${pilas()}</p>
    <p>${comedor()}</p>
    <p>${sala()}</p>
    <p>${jardin()}</p>
    <p>${garaje()}</p>
    `;

    containerImagen.appendChild(div1);
    containerInfo.appendChild(div2);
    containerDescripcion.appendChild(div3);





}

mostrarViviendaIndividual();