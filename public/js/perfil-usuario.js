let span_nombre_usuario = document.querySelector('#nombre-usuario');
let tabla = document.querySelector('#tbl-usuario tbody');
let btn_editar = document.querySelector('#btn-editar');
let foto_usuario = document.querySelector('#fotoNoticias');

const mostrar_modal_editar = async(_id, nombre, apellido, correo, telefono, cedula, direccion) => {
    const { value: formValues } = await Swal.fire({
        title: 'Editar usuario',
        html: ` <div>
                    <label for="">Nombre</label>
                    <input type="text" id="txt-nombre" class="swal2-input" value="${nombre}">
                </div>
                <div>
                    <label for="">Apellidos</label>
                    <input type="text" id="txt-apellidos" class="swal2-input"  value="${apellido}">
                </div>
                <div>
                    <label for="">Correo</label>
                    <input type="text" id="txt-correo" class="swal2-input"  value="${correo}">
                </div>
                <div>
                    <label for="">Teléfono</label>
                    <input type="text" id="txt-telefono" class="swal2-input"  value="${telefono}">
                </div>
                <div>
                    <label for="">Cédula</label>
                    <input type="text" id="txt-cedula" class="swal2-input"  value="${cedula}">
                </div>
                <div>
                    <label for="">Dirección exacta</label>
                    <textarea id="txt-direccion" class="swal2-input" rows="4" cols="50">${direccion}</textarea>
                </div>`,
        focusConfirm: false,
        preConfirm: () => {
            return [
                _id,
                document.getElementById('txt-nombre').value,
                document.getElementById('txt-apellidos').value,
                document.getElementById('txt-correo').value,
                document.getElementById('txt-telefono').value,
                document.getElementById('txt-cedula').value,
                document.getElementById('txt-direccion').value
            ]
        }
    });

    if (formValues) {
        const { value: accept } = await Swal.fire({
            icon: 'warning',
            text: '¿Está seguro que desea modificar el usuario?',
            showCancelButton: true,
            confirmButtonText: 'Sí'
        })
        if (accept) {
            modificar_usuario(formValues[0], formValues[1], formValues[2], formValues[3], formValues[4], formValues[5], formValues[6]);
        }
    };
};

const mostrar_info = async() => {
    let usuario = await buscar_usuario();
    span_nombre_usuario.innerText = usuario.nombre + ' ' + usuario.apellido;

    let telefono = tabla.insertRow();
    telefono.insertCell().innerHTML = 'Número telefónico:';
    telefono.insertCell().innerHTML = usuario.telefono;
    let correo = tabla.insertRow();
    correo.insertCell().innerHTML = 'Correo Electrónico:';
    correo.insertCell().innerHTML = usuario.correo;
    let cedula = tabla.insertRow();
    cedula.insertCell().innerHTML = 'Identificación:';
    cedula.insertCell().innerHTML = usuario.cedula;
    let direccion = tabla.insertRow();
    direccion.insertCell().innerHTML = 'Dirección exacta:';
    direccion.insertCell().innerHTML = usuario.direccion;

    btn_editar.addEventListener('click', async() => {
        mostrar_modal_editar(usuario._id, usuario.nombre, usuario.apellido, usuario.correo, usuario.telefono, usuario.cedula, usuario.direccion);
    });
};

if (localStorage.getItem('usuario_seleccionado')) {
    mostrar_info();
} else {
    Swal.fire({
        title: 'Atención',
        text: 'Debe seleccionar un usuario primero, para ver la información',
        icon: 'warning'
    }).then(() => {
        window.location.href = 'administrador-usuarios.html';
    });
}