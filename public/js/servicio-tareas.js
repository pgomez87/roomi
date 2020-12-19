'use strict';

const registrarTarea = async(nombre, detalles, area, encargado) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-tarea',
        responseType: 'json',
        data: {
            nombre: nombre,
            detalles: detalles,
            area: area,
            encargado: encargado
        }
    }).then((response) => {
        Swal.fire({
            'title': 'Se ha registrado la tarea',
            'icon': 'success',
            'text': ''
        }).then(function() {
            window.location.href = "tareas-coordinador.html"
        })
    }).catch((response) => {
        Swal.fire({
            'title': response.msj,
            'icon': 'error',
            'text': response.err
        });
    });
    console.log(nombre, detalles, area, encargado);
};



const listar_tareas = async() => {
    let listatareas = [];
    await axios({
        method: 'get',
        url: 'http://localhost:3000/api/listar-tareas',
        responseType: 'json'
    }).then((response) => {
        listatareas = response.data.lista_tareas;
    }).catch((response) => {
        console.log('error')
    });
    return listatareas;
};