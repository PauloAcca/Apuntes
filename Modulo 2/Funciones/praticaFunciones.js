function alquilerVehiculo (tipo, dias, silla){
    precioFinal = 0 ;
    if (tipo == "compacto"){
        if (silla == true){
            precioFinal = 14000 * dias + 1200 * dias
        } else if (silla == false){
            precioFinal = 14000 * dias
        }
    } else if (tipo == "mediano"){
        if (silla == true){
            precioFinal = 17000 * dias + 1200 * dias
        } else if (silla == false){
            precioFinal = 17000 * dias
        }
    } else if (tipo == "camioneta") {
        if (silla == true){
            precioFinal = 28000 * dias + 1200 * dias
        } else if (silla == false){
            precioFinal = 28000 * dias
        }
    } 

    return("Estimado cliente: en base al tipo de vehículo " + tipo + " alquilado, considerando los " + dias + " días utilizados, el monto total a pagar es de:" + " $" + precioFinal)

}

console.log(alquilerVehiculo("camioneta",2,true))

// -------------------------------------------------------------------------------------------------------------------
let extras = {
    jamon : true,
    queso : true,
    salsa : true,
    mayonesa: false,
    mostaza : true,
    tomate : false ,
    lechuga : false,
    cebolla : true,
};
function totalAPagar (tipoHamburguesa, extras){
    let precioExtras = 0 ;
    let precioHambuerguesa = 0 ;
    switch (tipoHamburguesa) {
        case "Carne a la parrilla":
            precioHambuerguesa = 1800;
            break;

        case "Pollo":
            precioHambuerguesa = 1500;
            break;

        case "Vegetariana":
            precioHambuerguesa = 1200;
            break;

        default:
            return "no existe ese tipo"
            break;
    }
    if (extras.jamon == true ){
        precioExtras += 30
    }

    return precioExtras
  }  

console.log(totalAPagar)