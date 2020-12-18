'use strict';

const registrar_listacompras = async(nombre, encargado, compras_slc) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-listacompras',
        responseType: 'json',
        data: {
            nombre: nombre,
            encargado: encargado,
            compras: JSON.stringify(compras_slc)

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

// const listar_listacompras = async() => {
//     let lista_compras = [];
//     await axios({
//         method: 'get',
//         url: 'http://localhost:3000/api/listar-compras',
//         responseType: 'json'
//     }).then((response) => {
//         lista_compras = response.data.lista_compras;
//     }).catch((response) => {

//     });

//     return lista_compras;
// };