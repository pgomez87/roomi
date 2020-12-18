'use strict';

const cont_usuarios = document.querySelector('#conteo-usuarios');
const cont_viviendas = document.querySelector('#conteo-viviendas');
const cont_compras = document.querySelector('#conteo-compras');
const cont_facturas = document.querySelector('#conteo-facturas');
const cont_tareas = document.querySelector('#conteo-tareas');

const mostrar_metricas = async() => {
    let lista_metricas_usuarios = await listar_metricas_usuarios();
    let lista_metricas_viviendas = await listar_metricas_viviendas();
    let lista_metricas_compras = await listar_metricas_compras();
    let lista_metricas_facturas = await listar_metricas_facturas();
    let lista_metricas_tareas = await listar_metricas_tareas();
    cont_usuarios.innerHTML = '';
    cont_viviendas.innerHTML = '';
    cont_compras.innerHTML = '';
    cont_facturas.innerHTML = '';
    cont_tareas.innerHTML = '';

    lista_metricas_usuarios.forEach((usuario) => {
        cont_usuarios = +1;
    });

    lista_metricas_viviendas.forEach((vivienda) => {
        let numero_vivienda = +1;
    });

    lista_metricas_compras.forEach((compra) => {
        let numero_compras = +1;
    });

    lista_metricas_facturas.forEach((factura) => {
        let numero_facturas = +1;
    });

    lista_metricas_tareas.forEach((tarea) => {
        let numero_tareas = +1;
    });

};