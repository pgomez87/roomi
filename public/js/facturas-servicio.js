'use strict';

const registrarFacturas = async(nombre, fecha, tipo, proveedor, porcentaje) => {
    await axios({
        method: 'post',
        url: 'http://localhost:3000/api/registrar-factura',
        responseType: 'json',
        data: {
            nombre: nombre,
            fecha: fecha,
            tipo: tipo,
            proveedor: proveedor,
            porcentaje: porcentaje
        }
    }).then((response) => {
        alert('se ha registrado la factura')
    }).catch((response) => {
        alert('no se ha podido registrar nada')
    });
};