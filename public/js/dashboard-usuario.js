const tablaNoticiasDash = document.querySelector('#lista-usuarios tbody');
tablaNoticiasDash.innerHTML = '';


const noticiasDashboard = async() => {
    let noticiasDash = await listarNoticias();

    noticiasDash.forEach((noticia) => {
        let fila = tablaNoticiasDash.insertRow();
        fila.insertCell().innerHTML = noticia.titulo;
    });

    // console.log(noticiasDash);

}


const tablaFacturasDash = document.querySelector('#informacion-facturas tbody');
tablaFacturasDash.innerHTML = '';

const facturasDashoard = async() => {
    let facturasDash = await listarFacturas();

    facturasDash.forEach((factura) => {
        let fila = tablaFacturasDash.insertRow();
        fila.insertCell().innerHTML = factura.fecha.substring(0, 10);
        fila.insertCell().innerHTML = factura.nombre;
        fila.insertCell().innerHTML = factura.usuario;
        if (factura.activa === 'inactiva') {
            fila.insertCell().innerHTML = 'Pagada'
        } else {
            fila.insertCell().innerHTML = 'Pendiente'
        }
    })
}

noticiasDashboard();
facturasDashoard();

let cerrarSesion = document.querySelector('#btn-cerrar-sesion');
cerrarSesion.addEventListener('click', () => {
    sessionStorage.clear();
    window.location.href = 'inicio-sesion.html';
    // alert('what');
})