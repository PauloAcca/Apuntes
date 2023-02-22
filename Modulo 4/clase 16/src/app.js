const express = require("express")
const app = express();
const path = require("path");

app.use(express.static(path.resolve(__dirname,"../public")))

app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

app.listen(3030, ()=>console.log("Servidor corriendo en el puerto 3030"));