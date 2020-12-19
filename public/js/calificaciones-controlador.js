'use strict';

const seccion_cartas = document.querySelector('.cards');

const lista_preguntas = ['Puntualidad al realizar las tareas:','Orden que mantiene en zonas comunes:','Puntualidad al realizar pagos:','Ambiente de convivencia:','¿Como considera la puntualidad al realizar las tareas?']
const lista_respuestas = ['Pésimo','Mal','Regular','Bien','Excelente']

const verificaciones = () => {
    const lista_cards = document.querySelectorAll('.card');

    lista_cards.forEach(card => {
        let card_button = card.querySelector('button');
        
        card_button.addEventListener('click', () => {
            let error = false;
            let lista_forms = card.querySelectorAll('form');

            lista_forms.forEach(form => {
                let lista_label = form.querySelectorAll('label');

                if (form.querySelector('input[type=radio]:checked')) {
                    lista_label.forEach(label => {
                        label.classList.remove('error');
                    });
                } else {
                    lista_label.forEach(label => {
                        label.classList.add('error');
                    });
                    error = true;
                }
            });

            if (error == true) {
                Swal.fire({
                    'title': 'No se puede enviar la calificacion',
                    'icon': 'error',
                    'text': 'Por favor llene los espacios en rojo'
                })
            } else {
                Swal.fire({
                    'title': 'Exito',
                    'icon': 'success',
                    'text': 'Se ha enviado la calificacion correctamente'
                })
                let inputs_lista = document.querySelectorAll('input[type=radio]:checked');
                inputs_lista.forEach(input => {input.checked = false;});
            }
        });  
    });
};

const generar_radio_buttons = (html_element) => {
    lista_respuestas.forEach(respuesta => {

        let label = document.createElement('label');
        label.innerText = respuesta;

        let input_radio = document.createElement('input');
        input_radio.type = 'radio';
        input_radio.value = respuesta;
        input_radio.name = 'rbtPuntualidad';

        html_element.appendChild(label);
        html_element.appendChild(input_radio);
    });
};

const mostrar_companeros = async() => {
    const lista_companeros = await listar_usuarios();
    seccion_cartas.innerHTML = '';

    lista_companeros.forEach(companero => {

        let card = document.createElement('div');
        card.classList.add('card');

        let info_container = document.createElement('div');
        info_container.classList.add('info-u')

        let nombre = document.createElement('h5');
        nombre.innerText = companero.nombre;

        let tipo_usuario = document.createElement('h5');
        tipo_usuario.innerText = `Usuario: ${companero.tipo_usuario}`;


        info_container.appendChild(nombre);
        info_container.appendChild(tipo_usuario);


        let contenedor_evaluacion = document.createElement('div');
        contenedor_evaluacion.classList.add('container-eva');

        let evaluacion = document.createElement('h6');
        evaluacion.innerText = 'Evaluación';

        contenedor_evaluacion.appendChild(evaluacion);

        lista_preguntas.forEach(pregunta => {
            let p_pregunta = document.createElement('p');
            p_pregunta.innerText = pregunta;

            let form = document.createElement('form');
            form.classList.add('form-eva');

            contenedor_evaluacion.appendChild(p_pregunta);
            contenedor_evaluacion.appendChild(form);
            
            generar_radio_buttons(form);
        });
        
        let boton = document.createElement('button');
        boton.type = 'button';
        boton.classList.add('btn-enviar-calif')
        boton.innerText = 'Enviar calificación';

        card.appendChild(info_container);
        card.appendChild(contenedor_evaluacion);
        card.appendChild(boton);

        seccion_cartas.appendChild(card);
    });

    verificaciones();
};

mostrar_companeros();