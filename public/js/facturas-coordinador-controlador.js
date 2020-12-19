'use strict';

const btnRegistrarFactura = document.querySelector('#btn-crear-factura');

const obtenerDatos = () => {
    let nombre = document.querySelector('#nombre-factura').value;
    let fecha = document.querySelector('#fecha-factura').value;
    let tipo = document.querySelector('#tipo-factura').value;
    let proveedor = document.querySelector('#proveedor-crear-factura').value;
    let porcentaje = document.querySelector('#porcentaje-pagar').value;
    let usuario = document.querySelector('#factura-companero').value;
    let activa = 'activa';

    console.log(nombre, fecha, tipo, proveedor, porcentaje, usuario, activa);
    registrarFacturas(nombre, fecha, tipo, proveedor, porcentaje, usuario, activa);
}

const limpiar = () => {
    let nombre = document.querySelector('#nombre-factura');
    let fecha = document.querySelector('#fecha-factura');
    let tipo = document.querySelector('#tipo-factura');
    let proveedor = document.querySelector('#proveedor-crear-factura');
    let porcentaje = document.querySelector('#porcentaje-pagar');
    let usuario = document.querySelector('#factura-companero');


    nombre.value = '';
    fecha.value = '';
    tipo.value = '';
    proveedor.value = '';
    porcentaje.value = '';
    usuario.value = '';
}

const validar = () => {
    let camposRequeridos = document.querySelectorAll(':required');
    let error = false;
    const fechaHoy = new Date();
    let dia = fechaHoy.getDate();

    switch (fechaHoy.getDate()) {
        case 1:
            dia = `0${fechaHoy.getDate()}`;
            break;
        case 2:
            dia = `0${fechaHoy.getDate()}`;
            break;
        case 3:
            dia = `0${fechaHoy.getDate()}`;
            break;
        case 4:
            dia = `0${fechaHoy.getDate()}`;
            break;
        case 5:
            dia = `0${fechaHoy.getDate()}`;
            break;
        case 6:
            dia = `0${fechaHoy.getDate()}`;
            break;
        case 7:
            dia = `0${fechaHoy.getDate()}`;
            break;
        case 8:
            dia = `0${fechaHoy.getDate()}`;
            break;
        case 9:
            dia = `0${fechaHoy.getDate()}`;
            break;
        default:
            dia = fechaHoy.getDate();

    }

    const fechaConvertida = `${fechaHoy.getUTCFullYear()}-${fechaHoy.getMonth() + 1}-${dia}`;
    const fechaInput = document.querySelector('#fecha-factura').value;

    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            campo.classList.add('error-input');
            error = true;
            Swal.fire({
                'title': 'Por favor revise los Campos resaltados',
                'icon': 'error',
                'text': ''
            })

        } else {
            campo.classList.remove('error-input');
        }
    });

    if (fechaConvertida >= fechaInput) {
        document.querySelector('#fecha-factura').classList.add('error-input');
        error = true;
        Swal.fire({
            'title': 'Por favor revise los Campos resaltados',
            'icon': 'error',
            'text': ''
        })
    } else {
        document.querySelector('#fecha-factura').classList.remove('error-input');
    }





    if (error == false) {
        obtenerDatos();
        limpiar();
    }
}



// const mensajePrueba = () => {
//     console.log(fechaConvertida);
// }

btnRegistrarFactura.addEventListener('click', validar);





//codigo medio (super) obsoleto.


// const validar = () => {
//     let error = false;
//     let regexNombre = /^[a-zA-Z0-9äöüÄÖÜ]*$/;



//     if (regexNombre.test(txtNombreFactura.value)) {
//         error = false;
//         txtNombreFactura.classList.remove('error-input');
//     } else {
//         error = true;
//         txtNombreFactura.classList.add('error-input');
//     }

//     if (txtNombreFactura.value == '') {
//         error = true;
//         txtNombreFactura.classList.add('error-input');
//     }

//     if (error == false) {
//         obtenerDatos();
//     } else {
//         Swal.fire({
//             'title': 'No se pudo enviar su mensaje',
//             'icon': 'warning',
//             'text': 'Por favor revise los campos resaltados'
//         });
//     }

// }