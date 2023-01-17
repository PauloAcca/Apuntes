// MICRO DESAFIO 1

// let electroDomesticos = ["heladera", "lavadora", "calefactor","television","microondas","horno"]

// // 1.
// console.table(electroDomesticos[4]);

// // 2.

// let primerElemento = electroDomesticos.shift()
// electroDomesticos.push(primerElemento)


// // 3.
// electroDomesticos.push("liquadora", "tostadora")


// // 4.

// console.log(electroDomesticos.length)

// // 5.

// if(electroDomesticos.includes("lavadora") == true){
//     console.log("Producto Encontrado")
// } else {
//     console.log("El producto buscado no existe")
// }

// // 6.

// let cadenaDeTextoElectro = electroDomesticos.join(" ")

// // 7.

// console.log(cadenaDeTextoElectro.length)

// // 8.

// cadenaDeTextoElectro.replace("heladera", "tostadora")

// // 9.

// console.log(cadenaDeTextoElectro.split(" "))

// MICRO DESAFIO 2

// 2.
let peliculas = ["Turno de día", "30 noches con mi ex", "Bestia", "El monte", "Top gun maverick", "Elvis","Thor: amor y trueno"]

// 3.
function masVendida(pelicula){
    return pelicula.toUpperCase()
}

console.log(masVendida("Thor: amor y trueno"))

// *

let aEstrenar = ["Counter-Strike", "NOP", "Vértigo", "Nick", "Avatar"]

aEstrenar.shift()

let cadenaTextoEstrenar = aEstrenar.join(",")

console.table(cadenaTextoEstrenar)

// 4.

function todasLasPelis(primerLista,segundaLista){
    return primerLista.concat(segundaLista)
}
console.log(todasLasPelis(peliculas,aEstrenar))

