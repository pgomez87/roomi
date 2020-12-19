'use strict';


const registrar_abusos = async(usuario_reportar, tipo_abuso, pruebas, comentario) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-abuso',
        responseType: 'json',
        data: {
            usuario_reportar: usuario_reportar,
            tipo_abuso: tipo_abuso,
            pruebas: pruebas,
            comentario: comentario
        }

    }).then((response) => {
        console.log('Sí llega al servicio');
        Swal.fire({
            'title': 'Su reporte se registró correctamente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            limpiar();
        });
    }).catch((response) => {
        Swal.fire({
            'title': 'Error Inesperado',
            'icon': 'error',
            'text': response.err
        }).then(() => {

        });
    });

};
const listarUsuariosAbusos = async() => {
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
};

const listar_abusos = async() => {
    let lista_abusos = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-abusos',
        responseType: 'json'
    }).then((response) => {
        lista_abusos = response.data.lista_abusos;

    }).catch((response) => {
        //console.log(response.data.err);
    });
    return lista_abusos;
};