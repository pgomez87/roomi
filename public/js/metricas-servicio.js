'use strict';

const listar_metricas_usuarios = async() => {
    let lista_metricas_usuarios = [];
    await axios({
        method: 'get',
        //    url: 'http://localhost:3000/api/listar-usuarios',
        responseType: 'json'
    }).then((response) => {
        lista_metricas_usuarios = response.data.lista_metricas_usuarios;
    }).catch((response) => {

    });

    return lista_metricas_usuarios
};

const listar_metricas_viviendas = async() => {
    let lista_metricas_viviendas = [];
    await axios({
        method: 'get',
        //    url: 'http://localhost:3000/api/listar-viviendas',
        responseType: 'json'
    }).then((response) => {
        lista_metricas_viviendas = response.data.lista_metricas_viviendas;
    }).catch((response) => {

    });

    return lista_metricas_viviendas
};

const listar_metricas_compras = async() => {
    let lista_metricas_compras = [];
    await axios({
        method: 'get',
        //    url: 'http://localhost:3000/api/listar-compras',
        responseType: 'json'
    }).then((response) => {
        lista_metricas_compras = response.data.lista_metricas_compras;
    }).catch((response) => {

    });

    return lista_metricas_compras
};

const listar_metricas_facturas = async() => {
    let lista_metricas_facturas = [];
    await axios({
        method: 'get',
        //    url: 'http://localhost:3000/api/listar-facturas',
        responseType: 'json'
    }).then((response) => {
        lista_metricas_facturas = response.data.lista_metricas_facturas;
    }).catch((response) => {

    });

    return lista_metricas_facturas
};

const listar_metricas_tareas = async() => {
    let lista_metricas_tareas = [];
    await axios({
        method: 'get',
        //    url: 'http://localhost:3000/api/listar-tareas',
        responseType: 'json'
    }).then((response) => {
        lista_metricas_tareas = response.data.lista_metricas_tareas;
    }).catch((response) => {

    });

    return lista_metricas_tareas
};