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