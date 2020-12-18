'use strict';

const listar_metricas_usuarios = async() => {
    let lista_metricas = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-usuarios',
        responseType: 'json'
    })
}