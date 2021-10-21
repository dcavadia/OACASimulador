const porcen_perdida_phytophthora = 0.8;
const porcen_perdida_ralstonia = 0.8;
const porcen_perdida_xanthomonas = 0.7;


function CantidadPlantas(densidad, metros_cuadrados, porcen_germinacion) {
    return (densidad * metros_cuadrados * porcen_germinacion);
}

function CantidadProductos(cant_plantas, rendimiento) {
    return (cant_plantas * rendimiento);
}

function CantidadPerdidas(porcen_perdida, cant_plantas) {
    return (porcen_perdida * cant_plantas)
}

function CantidadProductosPatogeno(cant_producto, cant_perdida) {
    return (cant_producto - cant_perdida)
}