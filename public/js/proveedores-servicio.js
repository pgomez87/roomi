'use strict';

const registrar_proveedor = async(nombre, servicio) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-proveedor',
        responseType: 'json',
        data: {
            nombre: nombre,
            servicio: servicio
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El proveedor ha sido registrado con éxito',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            limpiar();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err,
        });
    });
};

const listar_proveedores = async() => {
    let lista_proveedores = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-proveedores',
        responseType: 'json'
    }).then((response) => {
        lista_proveedores = response.data.lista_proveedores;
    }).catch((response) => {

    });

    return lista_proveedores
}