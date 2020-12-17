'use strict';

const registrarFacturas = async(nombre, fecha, tipo, proveedor, porcentaje, usuario, activa) => {
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
            usuario: usuario,
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
        listaFacturas = response.data.lista_facturas;
    }).catch((response) => {

    });
    return listaFacturas;
};

const listarUsuariosFacturas = async() => {
    let listaUsuarios = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-usuarios',
        responseType: 'json'
    }).then((response) => {
        listaUsuarios = response.data.lista_usuarios;
    }).catch((response) => {

    });
    return listaUsuarios;
}

const listar_proveedores = async() => {
    let listaProveedores = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-proveedores',
        responseType: 'json'
    }).then((response) => {
        listaProveedores = response.data.lista_proveedores;
    }).catch((response) => {

    });

    return listaProveedores
}



//otro codigo que en realidad es exactamente el mismo pero tampoco funciona 

// const listarFacturas = async() => {
//     let listaFacturas = [];
//     await axios({
//         method: 'get',
//         url: 'http://localhost:3000/api/listar-facturas',
//         responseType: 'json'
//     }).then((response) => {
//         listaFacturas = response.data.listaFacturas;
//     }).catch((response) => {

//     });

//     return listaFacturas;
// };