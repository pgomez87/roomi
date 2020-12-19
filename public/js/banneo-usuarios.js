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