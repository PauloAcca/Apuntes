// Requerimos express y guardamos la ejecución del método Router, que usaremos en el archivo.
const express = require("express");
const router = express.Router();

// Importamos el controlador de usuarios
const usersController = require("../controllers/usersController.js");

// En vez de app.get, utilizamos router.get. Esto va "guardando" en router las distintas rutas, que luego exportamos

// Procesa el pedido get con ruta /usuarios/registrarse
router.get("/registrarse", usersController.register)
// Procesa el pedido get con ruta /usuarios/conectarse
router.get("/conectarse", usersController.login)
// Procesa el pedido get con ruta /usuarios/perfil
router.get("/perfil", usersController.profile);

// Exportamos la variable router ya con todas las rutas "guardadas", que se usará en app.js
module.exports = router;