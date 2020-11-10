'use strict';

const navSlide = () => {
    const iconBurguer = document.querySelector('.icon-burguer');
    const burguerMenu = document.querySelector('.burguer-menu');


    iconBurguer.addEventListener('click', () => {
        burguerMenu.classList.toggle('burguer-menu-active');
    });

}

navSlide();