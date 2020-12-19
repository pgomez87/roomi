'use strict';

const lista_descripciones = ['Me gusta mucho coleccionar jackets amarillas. Trabajo con maquinaria compleja. Ultimamente mi vida se ha desordenado, pero planeo poner todo en su lugar en el futuro. He tenido problemas para quedarme en un solo lugar mucho tiempo.','Me gusta mucho la fotografía y la música. Trabajo en diseño. Soy responsable y me gusta tener las cosas en orden. Soy alérgica al pelo de varios animales.','Me gusta el arte, particularmente la pintura Me dedico a la actuacion Ultimamente mi vida se ha desordenado, pero planeo poner todo en su lugar en el futuro. Soy alérgica al pelo de varios animales.','Me gusta mucho la música. Soy pianista profesional. Mi espacio puede estar un poco desordenada. Soy alérgica al pelo de varios animales.','Me gusta armar modelos y rompecabezas. Me gustan los video juegos Trabajo en mercadeo. Puedo ser muy desordenado, pero el desorden no sale de mi espacio Soy más nocturno'];

const div_companeros = document.querySelector('.container-companeros');

const conseguir_lista = async() => {
    let lista_companeros = await listar_usuarios();
    let indice = 0;
    
    div_companeros.innerHTML = '';
    
    lista_companeros.forEach(usuario => {
    
        let card = document.createElement('div');
        card.classList.add('tarjeta-companeros');
    
        let foto = document.createElement('img');
        foto.classList.add('foto-companero');
    
        let nombre = document.createElement('h3');
        nombre.innerText = usuario.nombre;
    
        let info = document.createElement('p');

        info.innerText = lista_descripciones[indice];

        if (indice > 3) {
            indice = Math.floor(Math.random() * 5);
        } else {
            indice++;
        }
    
        card.appendChild(foto);
        card.appendChild(nombre);
        card.appendChild(info);
        div_companeros.appendChild(card);
    });
}

conseguir_lista();