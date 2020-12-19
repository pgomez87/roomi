'use strict';

const tabla = document.querySelector('#tablaReportes tbody');

const mostrar_abusos = async() => {
    let lista_abusos = await listar_abusos();
    tabla.innerHTML = '';

    lista_abusos.forEach((abuso, usuario) => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = abuso.usuario_reportar;
        fila.insertCell().innerHTML = usuario.id_usuario;
        fila.insertCell().innerHTML = abuso.tipo_abuso;
        fila.insertCell().innerHTML = abuso.pruebas;
        fila.insertCell().innerHTML = abuso.comentario;
        let celda_estado = fila.insertCell();
        let celda_btn_estado = fila.insertCell();
        let boton_estado = document.createElement('button');
        celda_btn_estado.appendChild(boton_estado);

        celda_estado.innerHTML = usuario.estado_usuario;
        boton_estado.type = 'button';

        switch (usuario.estado) {
            case true:
                celda_estado.classList.add('estado-activo');
                break;
            case false:
                celda_estado.classList.add('estado-inactivo');
                break;
            default:
                celda_estado.classList.add('estado-otro');
                break;
        }


        if (usuario.estado == false) {
            boton_estado.innerText = 'Activar';
        } else {
            boton_estado.innerText = 'Desactivar';
        }
        boton_estado.addEventListener('click', () => {
            cambiar_estado(usuario._id, usuario.estado);
        });



    });
};

mostrar_abusos();


//const tabla_abusos_viviendas = document.querySelector('#tablaReportes-viviendas tbody');