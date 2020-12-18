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

};

const eliminar_proveedores = async(_id) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-proveedores',
        responseType: 'json',
        data: {
            _id: _id
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El proveedor ha sido eliminado',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_proveedores();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        });
    });
};