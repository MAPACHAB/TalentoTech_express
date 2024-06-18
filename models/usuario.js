const mongoose = require("mongoose") //importa libreria mongoose
//sintaxis
const userSchema = new mongoose.Schema({
    nombre:{
        type: String,
        requiered: true
    },
    apellidos: {
        type: String,
        requiered: true
    },
    correo: {
        type: String,
        requiered: true,
        unique: true,
        validate: {
           validator: function(correo){
             //agregamos la expresion regular para validar el correo
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
            },
            message: props  => props.value + "no es un correo electronico valido"
     }
    },
    password:{
        type: String,
        requiered: true
    }
})

module.exports = mongoose.model('usuario', userSchema)