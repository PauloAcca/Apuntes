const fs = require("fs");

let bicis = fs.readFileSync("./bicicletas.json", "utf-8");

let infoBicis = JSON.parse(bicis);

module.exports = infoBicis ;


