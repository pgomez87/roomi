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
        alert('no se ha podido registrar nada');
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
    }).cath((response) => {

    });

    return listaFacturas;
}