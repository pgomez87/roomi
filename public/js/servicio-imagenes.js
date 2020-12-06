'use strict';

const botonFoto = document.querySelector('#btnFoto');
const imagen = document.querySelector('#fotoNoticias');

let widgetCloudinary = cloudinary.createUploadWidget({
    cloudName: 'imagenes3d',
    uploadPreset: 'preset_3d'

}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});


botonFoto.addEventListener('click', () => {
    widgetCloudinary.open();
}, false);