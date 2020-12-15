'use strict';

//para poder elegir un elemento:
//const botonEnviar = document.getElementById('btn-enviar');
//const botonEnviar = document.querySelector('#btn-enviar'); <--- mejor
const btn_iniciar = document.querySelector('#btn-iniciar');
const btn_recuperar = document.querySelector('#btn-olvido-contrasenna');
const botonEnviar = document.querySelector('#btn-enviar');
const textoEmail = document.querySelector('#txt-email')
const textoContrasena = document.querySelector('#txt-contrasena');


//validar edad, entre 1 y 99 años: ^[0-9]{1,2}+$ 

const detectar_usuario = () => {
    switch (textoEmail.value) {
        case 'user@roomi.com':
            window.location.href = 'dashboard-usuario.html';
            break;
        case 'admin@roomi.com':
            window.location.href = 'dashboard-admin.html';
            break;
        case 'coordinador@roomi.com':
            window.location.href = 'dashboard-coordinador.html';
            break;
        default:
            window.location.href = "dashboard-coordinador.html";
            break;
    }
};

const limpiar = () => {
    textoEmail.value = '';
    textoContrasena.value = '';
}
const obtener_datos = async() => {
    let correo = document.querySelector('#txt-correo').value;
    let contrasenna = document.querySelector('#txt-contrasenna').value;
    iniciar_sesion(correo, contrasenna);
};

function obtenerDatos() {
    let nombre = textoEmail.value;
    let contrasena = textoContrasena.value;

    console.log(`el username es ${nombre}`);
    console.log(`el password es ${contrasena}`);

    //detectar_usuario(); // Esta linea fue agragada y su funcion respectiva tambien
    iniciar_sesion(nombre, contrasena);
}

const validar = () => {
    let error = false;
    let regexEmail = /^[a-zA-Z0-9]+@{1}[a-zA-Z]+(.com|.net.org.ac.cr)$/;
    let regexContrasena = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    let camposRequeridos = document.querySelectorAll(':required');

    camposRequeridos.forEach(campo => {
        if (campo.value == '') {
            error = true;
            campo.classList.add('error-input');
        } else {
            error = false;
            campo.classList.remove('error-input');
        }
    });

    if (!regexEmail.test(textoEmail.value)) {
        error = true;
        textoEmail.classList.add('error-input');
    } else {
        error = false;
        textoEmail.classList.remove('error-input');
    }

    if (!regexContrasena.test(textoContrasena.value)) {
        error = true;
        textoContrasena.classList.add('error-input');
    } else {
        error = false;
        textoContrasena.classList.remove('error-input');
    }

    if (error == false) {
        obtenerDatos();
    } else {
        Swal.fire({
            'title': 'No se pudo iniciar sesión',
            'icon': 'warning',
            'text': 'Por favor revise los campos resaltados'
        });
    }
};
/*Yoss hizo esto*/
const mostrar_modal_recuperar = async() => {
    let lista_usuarios = await listar_usuarios();
    let error = true;
    console.log(`linea 99 ${error}`);

    const { value: formValues } = await Swal.fire({
        title: 'Ingrese su correo electrónico para recuperar la contraseña',
        html: `<div>
        <label for="txt-correo">Correo</label>
        <input type="text" id="txt-correo-reestablecer" class="swal2-input">
        </div>`,
        focusConfirm: false,
        preConfirm: () => {
            return [
                document.getElementById('txt-correo-reestablecer').value
            ]
        }
    });

    lista_usuarios.forEach((usuario) => {
        if (formValues[0] == usuario.correo) {
            error = false;
        }
    });

    if (formValues && !error) {
        const { value: accept } = await Swal.fire({
            icon: 'warning',
            text: '¿Está seguro que desea reestablecer la contraseña?',
            showCancelButton: true,
            confirmButtonText: 'Sí'
        })
        if (accept) {
            // Servicio
            reestablecer_contrasena(formValues[0]);
        }
    } else {
        Swal.fire({
            'title': 'El correo ingresado no es valido.',
            'icon': 'error',
            'text': 'Por favor intentelo de nuevo.'
        });
    };
};

botonEnviar.addEventListener('click', validar);
btn_recuperar.addEventListener('click', mostrar_modal_recuperar);