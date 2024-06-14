//var name = "MarthaPatricia"
//console.log("hola", name)

//var edad = 25
//if(edad <= 18){
//    console.log("puede votar")

//}else{
 //   console.log("No puede votar")
//}

// configuracion de >Express
const express = require('express') //importando libreria
const app = express() //Iniacializalizamos la variable libreria  -variable con todo lo necesario pra el proyecto
const port = 3000 //definimos puerto a usar puede ser 8080
const mongoose = requiere ('mongoose');//importando libreria

// obtengo la cadena de conexion del archivo .env
requiere('dotenv').config()
const DB_CONNECTION = process.env.DB_CONNECTION || '' 
mongoose.connect (DB_CONNECTION) //creo cadena de conexion

//coneccion prestada por el profe
//mongoose.connect ("mongodb+srv://msanchez:Qa5diWRtyuVRy3Bb@cluster0.1tpxkve.mongodb.net/talentotech2")


//Importamos las rutas del otro archivo
app.use(express.urlencoded)
const UserRoutes = requiere( './routers/userRoutes')
app.use ( '/', UserRoutes)

// taller de carros
const CarroRoutes = requiere( './routers/carrosRoutes')
app.use ( '/', CarroRoutes)

// Creamos servicio web
//Funcionalidad de nuesta API
// [get, post, put ,patch, delete]
//res = Response = Respuesta
// req = Request = Información de enntrada
// definimos metodo  creamos servicio web // enviamos mensaje // nombre de la pagina "/" podemos colocar cualquier nombre despues del / que es la raiz
app.get('/ ', (req, res)  => {
    //muestra en pantalla hello World
    res.send("Hello World")

})

//servicio web
app.get('/saludar', (req, res) =>{
    res.send("Hola")
})
//servicio web
app.get('/despedirse', (req, res) =>{
    res.send("Adios")
})

//servicio web
app.get('/conversar', (req, res)  =>{
    res.send("Conversemos")
})

//servicio web
app.get('/reunion', (req, res)  =>{
    res.send("Reunamonos")
})

//servicio web
app.get('/gato', (req, res)  =>{
    res.send("miauuuu")
})

//servicio web
app.get('/perro', (req, res)  =>{
    res.send("guauuu")
})

//servicio web
app.get('/feliz', (req, res)  =>{
    res.send("Soy Feliz")
})


//servicio web con parametros para despues de saludar ponemos un nombre //express es la libreria usada
app.get('/saludar/:nombre', (req, res)  =>{
    var nombre = req.params.nombre
    res.send("Hola" + nombre)

})
app.get('/despedirse/:nombre', (req, res)  =>{
    var nombre = req.params.nombre
    res.send("Adios" + nombre)
})

// con la funcion => fkecha oasamos los parametros 
app.get('/saludar/:nombre/:edad', (req, res)  =>{
    var nombre = req.params.nombre
    var edad = req.params.edad
    res.send("Hola, me llamo " + nombre + " y tengo" + edad)
})

app.get('/mascotas/:tipo', (req, res)  =>{
    var nombre = req.params.tipo
    var animal = " "
    if(tipo == "perro"){
        animal = "Guauuuu"
    }else if(tipo == "gato"){
        animal = "miauuu"
    }else if(tipo == "pajaro"){
        animal = "pio pio pio"
    }else if(tipo == "sepiente"){
        animal = "ZZZZZZ"
    }else {
        animal = "No conoxco el animal"
    }

    res.send(animal)
})
// solicitud por post crear usuario
app.post('/usuario', (req, res) => {
    res.send("estoy creando un usuario")

})

// solicitud por put actualizar usuario
app.put('/usuario', (req, res) => {
    res.send("estoy actualizando un usuario con PUt ")

})
// solicitud por patch actualizar usuario
app.patch('/usuario', (req, res) => {
    res.send("estoy actializando  un usuario con PACH")

})

// solicitud por Delete /eliminar usuario
app.get('/usuario', (req, res) => {
    res.send("estoy eliminando un usuario ")

})

// ejecutamos el servidor
app.listen(port, () => {
    console.log("listen on" + port)

})












 // todo esto es como el backend o la parte de atras de las paginas web
