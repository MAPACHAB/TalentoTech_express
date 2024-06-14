const express = require('express') //importando libreria
const app = express() //Iniacializalizamos la variable libreria  -variable con todo lo necesario pra el proyecto
const carroController = require("../controller/carroController") //importando el controlador 
const controller  = UsuarioController(); //creando una instancia

//Creamos nuestros servicios web
app.get('/carro', controller.getCarros)//Obtengo todos los usuarios
app.post('/carro', controller.createCarros)//creo un usuario
app.get('/carro/:id', controller.getCarrosById)//consulto un usuario
app.put('/carro/:id', controller.updateCarros) //Actualizar un usuario
app.delete('/carro/:id', controller.deleteCarros) //elimino un usuario


module.exports = app