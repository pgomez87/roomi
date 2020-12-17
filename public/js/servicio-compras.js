'use strict';

const registrar_compra = async(producto, categoria, cantidad) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-compra',
        responseType: 'json',
        data: {
            producto: producto,
            categoria: categoria,
            cantidad: cantidad

        }
    }).then((response) => {
        Swal.fire({
            'title': 'El artículo ha sido registrado',
            'icon': `success`
        });
    });
};

const listar_compras = async() => {
    let lista_compras = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-compras',
        responseType: 'json'
    }).then((reponse) => {
        lista_compras = reponse.data.lista_compras;
    }).catch((reponse) => {

    });
    return lista_compras;
};