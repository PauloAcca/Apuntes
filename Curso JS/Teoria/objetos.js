class auto{
    constructor(marca, annio, color){
        this.marca = marca;
        this.annio = annio;
        this.color = color;
        this.info = `Es un ${this.marca} de ${annio} color ${this.color}`
    }
    verinfo(){
        document.write(this.info + "<br>")
    }
}

// HERENCIA

class Electrico extends auto {
    constructor(marca, annio, color, watts){
        super(marca, annio, color);
        this.watts = null;
    }
    static cargar(){
        alert("CARGADO");
    } //(SI PONEMOS STATIC SE VA A PODER LLAMAR A LA FUNCION SIN CREAR EL OBJETO SINO NO)
    set setWatts(num){
        this.watts = num;
    }
    get getMarca(){
        return this.marca;
    }
}
const electrico = new Electrico ("BMW", "2003", "Negro", 2000)

electrico.setWatts = 4000;


var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020, 
    detallesDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.año}`);
    }
}

miAuto.detallesDelAuto();
// Auto Corolla 2020

miAuto.marca 
// "Toyota"


// GENERAR MUCHOS OBJETOS

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Tesla", "Model X", 2018);
var autoNuevo3 = new auto("Toyota", "Corolla", 2020);


// AUTOS AUTOMATICOS

var marca = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Bentley",
    "BMW",	
   "Cadillac",
    "Caterham",
    "Chevrolet",
    "Citroen",
    "Dacia",
    "Ferrari",
    "Fiat",
    "Ford",
    "Honda",
    "Infiniti",
    "Isuzu",
    "Iveco",
    "Jaguar"   	 	 
]

var modelo = [
    "C-Max",
    "Fiesta",
    "Focus",
    "Mondeo",
    "Ka",
    "S-MA",
   " B-MAX",
    "Grand C-Max",
    "Tourneo Custom",
    "Kuga",
    "Galaxy",
    "Grand Tourneo Connect",
    "Tourneo Connect",
    "EcoSport",
    "Tourneo Courier",
    "Mustang",
    "Transit Connect",
    "Edge",
    "Ka+"
]

var annio = [
    "1988",
    "1989",
    "1978",
    "1989",
    "1928",
    "1989",
    "1968",
    "1989",
    "1888",
    "1989",
    "1288",
    "1989",
    "1938",
    "1989",
    "1988",
    "1999",
    "1983",
    "1989",
    "1918"
]

function auto (marca, modelo, annio){
        this.marca = marca;
        this.modelo = modelo;
        this.annio = annio;
}
for (var i=0; marca.length > i && modelo.length > i && annio.length > i; i++){
    var nuevoAuto = new (marca[i],modelo[i], annio[i])
    return(nuevoAuto);
}