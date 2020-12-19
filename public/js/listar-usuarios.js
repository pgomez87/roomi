'use strict';

const tabla = document.querySelector('#tabla-usuarios tbody');

const mostrar_usuarios = async() => {
    let lista_usuarios = await listar_usuarios();
    tabla.innerHTML = '';

    lista_usuarios.forEach((usuario) => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = usuario.nombre;
        fila.insertCell().innerHTML = usuario.apellido;
        fila.insertCell().innerHTML = usuario._id;

        let celda_estado = fila.insertCell();
        let celda_btn_estado = fila.insertCell();
        let boton_estado = document.createElement('button');
        celda_btn_estado.appendChild(boton_estado);

        celda_estado.innerHTML = usuario.estado;
        boton_estado.type = 'button';

        switch (usuario.estado) {
            case 'true':
                celda_estado.classList.add('estado-activo');
                break;
            case 'false':
                celda_estado.classList.add('estado-inactivo');
                break;
            default:
                celda_estado.classList.add('estado-otro');
                break;
        }


        if (usuario.estado == 'false') {
            boton_estado.innerText = 'Activar';
        } else {
            boton_estado.innerText = 'Desactivar';
        }
        boton_estado.addEventListener('click', () => {
            cambiar_estado(usuario._id, usuario.estado);
        });

    });
};

mostrar_usuarios();