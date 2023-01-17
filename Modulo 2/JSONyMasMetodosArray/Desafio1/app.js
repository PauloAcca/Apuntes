const datosBicis = require("./datosBici");


let dhBici = {

    bicicletas: datosBicis,
    // 2.a
    buscarBici: function(idABuscar){
        let bicicletaADevolver = this.bicicletas.filter(bicicleta =>{
            return bicicleta.id == idABuscar
        })
        if(bicicletaADevolver.length > 0){
            return bicicletaADevolver[0]
        }else{
            return null
        }
    },
    // 2.b
    venderBici: function(idABuscar){
        let bicicletaEncontrada = this.buscarBici(idABuscar)
        if (bicicletaEncontrada != null) { 
            bicicletaEncontrada.vendida = true
            this.bicicletas.vendida = true 
            return bicicletaEncontrada
        } else {
            return "Bicicleta no encontrada"
        }
    },
    // 2.c
    biciParaLaVenta : function () {
        let bicicletasDisponibles = this.bicicletas.filter(bicicleta => {
            return bicicleta.vendida == false
        })
        return bicicletasDisponibles
    },
    //2.d
    totalDeVentas: function(){
        let bicicletasVendidas = this.bicicletas.filter(bicicleta => {
            return bicicleta.vendida == true
        })
        let ventasTotales = bicicletasVendidas.reduce((acum, num) => {
            return acum + num.precio;
        }, 0);
        return ventasTotales
    }

}
console.log(dhBici.totalDeVentas());


