'use strict';

const titulo = document.querySelector('#titulo-input');
const descripcion = document.querySelector('#descripcion-input');
const imagen = document.querySelector('#input-imagen')
const boton_publicar = document.querySelector('#boton-publicar');

let widgetCloudinary = cloudinary.createUploadWidget({
    cloudName: 'imagenes3d',
    uploadPreset: 'preset_3d'

}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});

const limpiar_espacios = () => {
    let lista_espacios = document.querySelectorAll('.input');

    lista_espacios.forEach(element => {
        element.value = '';
    });

    imagen.src = '';
};

const valudar_espacios = () => {
    let error = false;

    if (imagen.src == '') {
        error = true;
        imagen.classList.add('error');
    } else {
        imagen.classList.remove('error');
    }

    if (titulo.value == '') {
        error = true;
        titulo.classList.add('error');
    } else {
        titulo.classList.remove('error');
    }


    if (error == false) {
        registrar_publicidad(titulo.value, descripcion.value, imagen.src);
        Swal.fire({
            'title': 'Se ha registrado la publicidad correctamente',
            'icon': 'success'
        });
        limpiar_espacios();
    } else {
        Swal.fire({
            'title': 'La publicidad no se ha registrado.',
            'text': 'Por favor llene los espacios.',
            'icon': 'warning'
        });
    };
};

imagen.addEventListener('click', () => {
    widgetCloudinary.open();
}, false);

boton_publicar.addEventListener('click', valudar_espacios);