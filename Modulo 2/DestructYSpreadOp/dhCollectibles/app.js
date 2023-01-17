const importar = require("./collectibles.js");
let hotToys = importar("HotToys");
let bandai = importar("Bandai");
let starWars = importar("StarWars");

let unifiedCollectibles = [...hotToys,...bandai,...starWars];

let collectibles = {
    figuras: unifiedCollectibles,
    listfigures: function(){
        for (let figus of this.figuras) {
            console.log(figus)
        };
    },
    figuresByBrand: function(marcaFigura){
        let nuestraFigura = this.figuras.filter(function(figura){
            return figura.marca == marcaFigura
        })
        return nuestraFigura
    }
}

// collectibles.listfigures()
console.log(collectibles.figuresByBrand("Bandai"));

