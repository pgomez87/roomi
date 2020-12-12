'use strict';

const viviendaFoto = document.querySelector('#file-imagen');

let widgetCloudinary = cloudinary.createUploadWidget({
    cloudName: 'imagenes3d',
    uploadPreset: 'preset_3d'

}, (err, result) => {
    if (!err && result && result.event === 'success') {
        console.log('Imagen subida con éxito', result.info);
        imagen.src = result.info.secure_url;
    }
});


viviendaFoto.addEventListener('click', () => {
    widgetCloudinary.open();
}, false);