// Creamos el objeto literal con los métodos a exportar
const usersController = {

    // Manejo del pedido get con ruta /usuarios/conectarse
    login: (req, res) => {
        res.send("Formulario de conexión")
    },

    // Manejo del pedido get con ruta /usuarios/registrarse
    register: (req, res) => {
        res.send("Formulario de creación")
    },

    profile: (req, res) => {
        //lógica de mostrar el profile
        res.send("Perfil del usuario")
    }
}

// Exportamos el objeto literal con los distintos metodos, que se usará en el enrutador de usuarios
module.exports = usersController;