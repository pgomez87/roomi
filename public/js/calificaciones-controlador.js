'use strict';


const boton_enviar = document.querySelector('#btn-enviar');
const radio1 = document.getElementById('rbt-pesimo').check;
const radio2 = document.getElementById('rbt-mal');
const radio3 = document.getElementById('rbt-regular');
const radio4 = document.getElementById('rbt-bien');
const radio5 = document.getElementById('rbt-excelente');

const obtener_datos = () => {
    let pesimo = radio1.value;
    let mal = radio2.value;
    let regular = radio3.value;
    let bien = radio4.value;
    let excelente = radio5.value;

    console.log(radio1);
    console.log(radio2);
    console.log(radio3);


    const validar = () => {
        if ((radio1 == '') && (radio2 == '') && (radio3 == '') && (radio4 == '') && (radio5 == '')) {
            Swal.fire({
                'title': 'No se pudo enviar el reporte',
                'icon': 'warning',
                'text': 'Por favor revise los campos resaltados'
            });
        } else {
            Swal.fire({
                'title': 'El reporte ha sido enviado',
                'icon': 'success',
                'text': 'Nos pondremos en contacto con usted lo antes posible'
            });
        };
    };

};

boton_enviar.addEventListener('click', obtener_datos);