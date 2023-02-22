const express = require("express");
const app = express();
const path = require("path")

app.use(express.static(path.resolve(__dirname,"../public")))
app.use(express.static(path.resolve(__dirname,"./views")))

app.listen(8000, ()=>{
    console.log("El server escucha en el puerto 8000")
});

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/index.html"))
})
app.get("/register.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/register.html"))
})

app.get("/login.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"./views/login.html"))
})

