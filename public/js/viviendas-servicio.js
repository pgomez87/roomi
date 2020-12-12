'use strict';

const registrar_vivienda = async(nombre, costo, capacidad, direccion, descripcion, imagen, habitaciones, bannos, cocina, pilas, comedor, sala, jardin, garaje) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-vivienda',
        responseType: 'json',
        data: {
            nombre: nombre,
            costo: costo,
            capacidad: capacidad,
            direccion: direccion,
            descripcion: descripcion,
            imagen: imagen,
            habitaciones: habitaciones,
            bannos: bannos,
            cocina: cocina,
            pilas: pilas,
            comedor: comedor,
            sala: sala,
            jardin: jardin,
            garaje: garaje,
        }
    }).then((response) => {
        Swal.fire({
            'title': 'La vivienda ha sido registrada con éxito',
            'icon': 'success',
            'text': response.msj
        }).then(() => {
            limpiar();
        });
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err,
        });
    });
};

const listar_viviendas = async() => {
    let lista_viviendas = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-viviendas',
        responseType: 'json'
    }).then((response) => {
        lista_viviendas = response.data.lista_viviendas;
    }).catch((response) => {

    });

    return lista_viviendas
}