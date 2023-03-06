const express = require("express");
const app = express()
const rutasmain = require('./routers/main.js')
app.use(express.static("public"));

app.listen(3000, ()=>{
    console.log('Servidor funcionando en puerto 3000') ;
});

app.use('/', rutasmain)


