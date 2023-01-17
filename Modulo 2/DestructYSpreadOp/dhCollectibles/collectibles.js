const fs = require("fs");



function importar(marca) {
    let direccion = "";
    switch (marca) {
        case "HotToys":
            direccion = "./datos/figuras1.json"
            break;
        case "Bandai":
            direccion = "./datos/figuras2.json"
            break
        case "StarWars":
            direccion = "./datos/figuras3.json"
            break
        default:
            break;
    }
    let leerDireccion = fs.readFileSync(direccion, "utf-8")
    let infoFigus = JSON.parse(leerDireccion);
    return infoFigus
}

module.exports = importar; 