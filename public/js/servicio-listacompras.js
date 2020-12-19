'use strict';

const registrar_listacompras = async(nombre, encargado, compras) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-listacompras',
        responseType: 'json',
        data: {
            nombre: nombre,
            encargado: encargado,
            compras: JSON.stringify(compras)

        }
    }).then((response) => {
        Swal.fire({
            'title': 'La lista de compras ha sido registrada',
            'icon': `success`
        }).then(() => {
            // limpiar();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });
};

const listar_listascompras = async() => {
    let lista_listascompras = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-listascompras',
        responseType: 'json'
    }).then((response) => {

        lista_listascompras = response.data.lista_listascompras;
    }).catch((response) => {

    });

    return lista_listascompras;
};


const buscar_listacompras = async() => {
    let listacompras;

    await axios({
        method: 'get',
        params: { _id: localStorage.getItem('listacompras_seleccionada') },
        url: 'http://localhost:3000/api/buscar-listacompras',
        responseType: 'json'
    }).then((response) => {
        listacompras = response.data.listacompras;
    }).catch((response) => {

    });

    return listacompras;
    console.log(listacompras)
};


const eliminar_listacompras = async(_id) => {
    await axios({
        method: 'delete',
        url: 'http://localhost:3000/api/eliminar-listacompras',
        responseType: 'json',
        data: {
            _id: _id
        }
    }).then((response) => {
        Swal.fire({
            'title': 'La lista de compras ha sido eliminada',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_listascompras();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        })
    });
};