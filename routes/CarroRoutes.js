const express = require('express') //importando libreria
const app = express() //Iniacializalizamos la variable libreria  -variable con todo lo necesario pra el proyecto
const CarroController = require("../controllers/carroController") //importando el controlador 
const controller  = new CarroController(); //creando una instancia

//Creamos nuestros servicios web
app.get('/carro', controller.getCarros)//Obtengo todos los usuarios
app.post('/carro', controller.createCarro)//creo un usuario
app.get('/carro/:id', controller.getCarroById)//consulto un usuario
app.put('/carro/:id', controller.updateCarro) //Actualizar un usuario
app.delete('/carro/:id', controller.deleteCarro) //elimino un usuario


module.exports = app