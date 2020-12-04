'use strict';

//para poder elegir un elemento:
//const botonEnviar = document.getElementById('btn-enviar');
//const botonEnviar = document.querySelector('#btn-enviar'); <--- mejor

const botonAgregar = document.querySelector('#btn-crear-factura');
const botonAsignar = document.querySelector('#btn-asignar-factura');
const txtNombreFactura = document.querySelector('#nombre-factura');
const dateFechaFactura = document.querySelector('#fecha-factura');
const txtTipoRecibo = document.querySelector('#tipo-recibo');
const txtProveedorFactura = document.querySelector('#proveedor-crear-factura');
const txtCompaneroFactura = document.querySelector('#tipo-companero');
const txtFacturaAsignada = document.querySelector('#elegir-factura');



function obtenerDatos() {
    let nombreFactura = txtNombreFactura.value;
    let fechaFactura = dateFechaFactura.value;
    let tipoRecibo = txtTipoRecibo.value;
    let proveedorFactura = txtProveedorFactura.value;
    let companeroFactura = txtCompaneroFactura.value;
    let facturaAsignada = txtFacturaAsignada.value;

    Swal.fire({
        'title': 'Factura creada con éxito',
        'icon': 'success',
        'text': ''
    }).then(() => {
        limpiar();
    });

}

const validar = () => {
    let error = false;
    let regexNombre = /^[a-zA-Z0-9äöüÄÖÜ]*$/;



    if (regexNombre.test(txtNombreFactura.value)) {
        error = false;
        txtNombreFactura.classList.remove('error-input');
    } else {
        error = true;
        txtNombreFactura.classList.add('error-input');
    }

    if (txtNombreFactura.value == '') {
        error = true;
        txtNombreFactura.classList.add('error-input');
    }

    if (error == false) {
        obtenerDatos();
    } else {
        Swal.fire({
            'title': 'No se pudo enviar su mensaje',
            'icon': 'warning',
            'text': 'Por favor revise los campos resaltados'
        });
    }

}


const limpiar = () => {
    nombreFactura.value = '';
}


botonAgregar.addEventListener('click', validar);