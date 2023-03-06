const path = require("path");

// CREAMOS UN CONTROLADOR
const controladorMain = {
    index: (req,res)=>{
        res.sendFile(path.resolve(__dirname,"../views/home.html"))
    }
};

// LO EXPORTAMOS PARA EL ARCHIVO DE RUTAS
module.exports = controladorMain