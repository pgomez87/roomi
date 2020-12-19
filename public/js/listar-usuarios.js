'use strict';

let tabla = document.querySelector('#tabla-usuarios tbody');
let input_filtro = document.querySelector('#txt-id')


const mostrar_usuarios = async() => {
    let lista_usuarios = await listar_usuarios();
    let filtro = input_filtro.value.toLowerCase();
    tabla.innerHTML = '';

    lista_usuarios.forEach((usuario) => {
        if (usuario._id.toLowerCase().includes(filtro)) {
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
        }

    });
};

mostrar_usuarios();
input_filtro.addEventListener('keyup', mostrar_usuarios);