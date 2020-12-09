'use strict';

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var btnc = document.getElementsByClassName("cancelar")[0];
var btns = document.getElementsByClassName("si")[0];


btn.onclick = function() {
    modal.style.display = "block";
}

btnc.onclick = function() {
    modal.style.display = "none";
}

btns.onclick = function() {
    modal.style.display = "none";
    Swal.fire({
        'icon': 'success',
        'text': 'Se envió un mensaje a su contacto de emergencia.'
    });
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}