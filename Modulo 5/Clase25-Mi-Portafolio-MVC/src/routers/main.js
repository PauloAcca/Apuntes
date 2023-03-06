// DEFINIMOS EL SISTEMA DE RUTEO

const express = require('express');
const router = express.Router();

// REQUERIMOS EL CONTROLADOR
const mainController = require('../controllers/mainController.js')

// LE ASIGNAMOS LA RUTA
router.get('/', mainController.index);

// EXPORTAMOS LAS RUTAS PARA EL APP.JS
module.exports = router;
