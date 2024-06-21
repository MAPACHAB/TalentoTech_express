const express = require('express') //importando libreria
const app = express() //Iniacializalizamos la variable libreria  -variable con todo lo necesario pra el proyecto
const UsuarioController = require("../controllers/UsuarioController") //importando el controlador 
const controller  = new UsuarioController(); //creando una instancia

//Creamos nuestros servicios web

app.get('/usuario', controller.getUsuarios)//Obtengo todos los usuarios
app.post('/usuario', controller.createUsuario)//creo un usuario
app.get('/usuario/:id', controller.getUsuarioById)//consulto un usuario
app.put('/usuario/:id', controller.updateUsuario) //Actualizar un usuario
app.delete('/usuario/:id', controller.deleteUsuario) //elimino un usuario
app.post( '/login', controller.login)//login

module.exports = app