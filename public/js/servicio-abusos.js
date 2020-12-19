'use strict';


const registrar_abusos = async(usuario_reportar, estado_usuario, id_usuario, tipo_abuso, pruebas, comentario) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-abuso',
        responseType: 'json',
        data: {
            usuario_reportar: usuario_reportar,
            estado_usuario: estado_usuario,
            id_usuario: id_usuario,
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

const cambiar_estado = async(_id, estado) => {
    let url;
    if (estado == false) {
        url = 'http://localhost:3000/api/activar-usuario';
    } else {
        url = 'http://localhost:3000/api/desactivar-usuario';
    };

    await axios({
        method: 'put',
        url: url,
        responseType: 'json',
        data: {
            _id: _id
        }
    }).then((response) => {
        Swal.fire({
            'title': 'El estado del usuario se modificó correctamente',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            mostrar_abusos();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        });
    });
};