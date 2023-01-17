// MICRODESAFIO 1
const peliculas = require("./peliculas");


function pelicula (nombre) {
    for (let i = 0; i < peliculas.length; i++) {
    if (nombre == peliculas[i].nombre) {
        console.log(peliculas[i]);
    }
    }
}

pelicula("Harry Potter")

// MICRODESAFIO 2
const fs = require("fs");

let mensaje = fs.readFileSync("./mensaje.txt" , "utf-8");

console.log(mensaje);