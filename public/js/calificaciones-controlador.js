'use strict';

const lista_cards = document.querySelectorAll('.card');

lista_cards.forEach(card => {
    let card_button = card.querySelector('button');
    let error = false;

    card_button.addEventListener('click', () => {

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
            // swal.fire
        } else {
            // swal.fire
        }
    });  
});