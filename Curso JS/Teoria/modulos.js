// modulos nativos
// modulos terceros
// modulos propios

//----------- MODULOS PROPIOS -----------

// exportar
module.exports = elobjeto ;// (siempre al final!)
// importar
const nombre = require("./nombre de la carpeta donde esta / el archivo")

// ---------- MODULOS NATIVOS -----------

// importar
const fs = require("fs");

// fs hace muchas cosas entre ellas leer archivos de forma sincronica con:
let texto = fs.readFileSync("./texto.txt", "utf-8");


// ---------- MODULOS TERCEROS ----------

// 1 -Hacemos npm init en la consola o sino npm init -y para darle okay a todo
// 2 - hacemos npm install y el nombre del archivo a descargar
//     se te crea una carpeta llamada node modules

// depues igual que los demas
// importar
const dayjs = require("dayjs")


