let autos = 
[
    {
    marca:"Ford",
    modelo:"Fiesta", 
    precio:150000, 
    km:200,
    color:"Azul",
    cuotas:12,
    anio:2019,
    patente:"APL123",
    vendido: false  
    },
    {
    marca:"Toyota",
    modelo:"Corolla", 
    precio:100000, 
    km:0,
    color:"Blanco",
    cuotas:14,
    anio:2019,
    patente:"JJK116",
    vendido:false   
    }
]
let personas = [ 
   {
   nombre: "Juan",
   capacidadDePagoEnCuotas: 30000,
   capacidadDePagoTotal: 100000000
},
{
   nombre: "Pedro",
   capacidadDePagoEnCuotas: 7200,
   capacidadDePagoTotal: 100000000
}
]

let concesionaria = {
   autos: autos,
   personas: personas,
    buscarAuto: function(nmPatente){
       let autoEncontrado = this.autos.find(function(auto){
          return auto.patente == nmPatente ;
       })
       if(autoEncontrado != undefined){
          return autoEncontrado
       } else {
          return null
       } 
    },
 
    venderAuto:function(nmPatente){
       let autoEncontrado = this.buscarAuto(nmPatente);
       if (autoEncontrado != null){
          autoEncontrado.vendido = true;
       }
    },
 
    autosParaLaVenta: function(){
       let autosEnVenta = this.autos.filter(function(auto){
          return auto.vendido == false
       })
       return autosEnVenta
    },
 
    autosNuevos: function(){
       let auto0Km = this.autosParaLaVenta().filter(function(auto){
          return auto.km < 100 ;
       })
       return auto0Km
    },
    listaDeVentas: function(){
       autosVendidos = this.autos.filter(function(auto){
          return auto.vendido == true
       })
       let listaPreciosAutosVendidos = autosVendidos.map(function(auto){
          return auto.precio
       })
       return listaPreciosAutosVendidos
    },
 
    totalDeVentas:function(){
        let preciosArray = this.listaDeVentas() ;
        if(preciosArray.length >= 1){
            let sumatoriaValorDeVentas = preciosArray.reduce(function(acum,auto){
                return acum + auto
            },0)
            return sumatoriaValorDeVentas
        }
     },
   puedeComprar: function(auto,persona){
         let precioCuotas = auto.precio/auto.cuotas ;
         if(auto.precio <= persona.capacidadDePagoTotal && precioCuotas <= persona.capacidadDePagoEnCuotas){
            return true
         } else {
            return false
         }
   },
    autosQuePuedeComprar: function(persona){
      let autosParaLaVenta = this.autosParaLaVenta() ;
      let autosParaLaCompra = autosParaLaVenta.filter(function(auto){
         return concesionaria.puedeComprar(auto,persona) == true
      })
      return autosParaLaCompra
   }
   }
   
   //  console.log(concesionaria.puedeComprar(autos[0], personas[0]))
 console.log(concesionaria.autosQuePuedeComprar(personas[0]));
