// Requerimos express y lo ejecutamos para tener disponibles todos los metodos que vamos a precisar
const express = require("express");
const app = express();

// Importamos los distintos enrutadores
const productsRouter = require("./routes/productsRouter.js")
const usersRouter = require("./routes/usersRouter.js")
const mainRouter = require("./routes/mainRouter.js")

// Usando recursos estáticos.
app.use(express.static("public"));

// Usando los enrutadores importados
app.use("/productos", productsRouter);
app.use("/usuarios", usersRouter);
app.use("/", mainRouter);

// Ponemos a escuchar el servidor
app.listen(3030, () => {
    console.log("Servidor corriendo en http://localhost:3030")
});
