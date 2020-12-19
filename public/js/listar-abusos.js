'use strict';

const tabla = document.querySelector('#tablaReportes tbody');
//const tabla_abusos_usuarios = document.querySelector('#tabla-reportes-usuarios tbody');

const mostrar_abusos = async() => {
    let lista_abusos = await listar_abusos();
    tabla.innerHTML = '';

    lista_abusos.forEach((abuso) => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = abuso.usuario_reportar;
        fila.insertCell().innerHTML = abuso.tipo_abuso;
        fila.insertCell().innerHTML = abuso.pruebas;
        fila.insertCell().innerHTML = abuso.comentario;
        let celda_estado = fila.insertCell();
        let celda_btn_estado = fila.insertCell();
        let boton_estado = document.createElement('button');

        celda_estado.innerHTML = usuario.estado;
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


        if (ejercicio.estado == false) {
            boton_estado.innerText = 'Activar';
        } else {
            boton_estado.innerText = 'Desactivar';
        }
        boton_estado.addEventListener('click', () => {
            cambiar_estado(usuario._id, usuario.estado);
        });
        celda_btn_estado.appendChild(boton_estado);

    });
};

mostrar_abusos();