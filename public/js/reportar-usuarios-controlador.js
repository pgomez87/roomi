'use strict';

const select_usuarios = document.querySelector('#txt-usuarios');
const select_abuso = document.querySelector('#txt-abuso');
const select_pruebas = document.querySelector('#btnFoto');
const select_comentarios = document.querySelector('#txt-comentario');
const boton_enviar = document.querySelector('#btn-enviar');

const limpiar = () => {
    select_usuarios.value = '';
    select_abuso.value = '';
    select_comentarios.value = '';
};

const selectAbusos = document.querySelector('#txt-usuarios');

const llenarSelectsUsuario = async() => {
    const usuarios = await listarUsuariosAbusos();
    selectAbusos.innerHTML = '<option value="" selected>Compañeros</option>';

    usuarios.forEach((usuario) => {

        let option = document.createElement('option');
        option.value = `${usuario.nombre} ${usuario.apellido} ${usuario.estado} ${usuario._id} `;
        option.innerHTML = `${usuario.nombre} ${usuario.apellido}`;
        selectAbusos.appendChild(option);
    })

}
const obtener_datos = () => {
    let usuario = select_usuarios.nombre.value;
    let estado = select_usuarios.estado.value;
    let id = select_usuarios._id.value;
    let abuso = select_abuso.value;
    let pruebas = select_pruebas.value;
    let comentario = select_comentarios.value;

    console.log('El usuario reportado por abuso es: ', usuario);
    console.log('El estado del usuario reportado es: ', estado);
    console.log('El id del usuario reportado es: ', id);
    console.log('El tipo de abuso es: ', abuso);
    console.log('Las pruebas adjuntadas son: ', pruebas);
    console.log('El comentario es: ' + comentario);

    registrar_abusos(usuario, estado, id, abuso, pruebas, comentario);


};

const validar = () => {
    let error = false;
    let campos_requeridos = document.querySelectorAll(':required');

    campos_requeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            campo.classList.remove('error-input');
        }
    });


    //Si no hay error previo se llama a la funcion obtener datos
    if (error == false) {
        obtener_datos();
    } else {
        Swal.fire({
            'title': 'No se pudo enviar el reporte',
            'icon': 'warning',
            'text': 'Por favor revise los campos resaltados'
        });
    }

};
llenarSelectsUsuario();
boton_enviar.addEventListener('click', validar);