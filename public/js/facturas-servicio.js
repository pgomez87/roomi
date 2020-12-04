'use strict';

const registrarFacturas = async(nombre, fecha, tipo, proveedor, porcentaje) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/'
    })
}