'use strict';

const tabla = document.querySelector('#tablaReportes tbody');
const tabla_abusos_usuarios = document.querySelector('#tabla-reportes-usuarios tbody');

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
        celda_estado.innerHTML = usuario.estado;

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

        let celda_editar = fila.insertCell();
        let boton_editar = document.createElement('button');
        boton_editar.innerText = 'Editar';
        boton_editar.type = 'button';
        let celda_btn_estado = fila.insertCell();
        let boton_estado = document.createElement('button');
        boton_estado.type = 'button';
        if (ejercicio.estado == 'Inactivo') {
            boton_estado.innerText = 'Activar';
        } else {
            boton_estado.innerText = 'Desactivar';
        }
        boton_editar.addEventListener('click', async() => {
            mostrar_modal_editar(ejercicio._id, ejercicio.nombre, ejercicio.zona);
        });
        boton_estado.addEventListener('click', () => {
            //Servicio
            cambiar_estado(ejercicio._id, ejercicio.estado);
        });
        celda_editar.appendChild(boton_editar);
        celda_btn_estado.appendChild(boton_estado);

    });
};

mostrar_abusos();