'use strict';

const registrarFacturas = async(nombre, fecha, tipo, proveedor, porcentaje, activa) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-factura',
        responseType: 'json',
        data: {
            nombre: nombre,
            fecha: fecha,
            tipo: tipo,
            proveedor: proveedor,
            porcentaje: porcentaje,
            activa: activa
        }
    }).then((response) => {
        Swal.fire({
            'title': 'Se ha registrado la factura',
            'icon': 'success',
            'text': ''
        })
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        });
    });
};




const listarFacturas = async() => {
    let listaFacturas = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-facturas',
        responseType: 'json'
    }).then((response) => {
        listaTareas = response.data.listaFacturas;
    }).catch((response) => {

    });

    return listaFacturas;
};


//otro codigo que en realidad es exactamente el mismo pero tampoco funciona y jueputa jueputa jueputa

// const listarFacturas = async() => {
//     let listaFacturas = [];
//     await axios({
//         method: 'get',
//         url: 'http://localhost:3000/api/listar-facturas',
//         responseType: 'json'
//     }).then((response) => {
//         listaTareas = response.data.listaFacturas;
//     }).catch((response) => {

//     });

//     return listaFacturas;
// };