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

}