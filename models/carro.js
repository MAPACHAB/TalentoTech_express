const mongoose = requiere("mongoose") //importa libreria mongoose
//sintaxis
const carroSchema = new mongoose.Schema({
    modelo:{
        type: Number,
        requiered: true,
        validate:{
            validator: function(modelo){
                return modelo > 1900;
            },
            message: props => props.value + "no es un modelo valido "
        }     
    },
    placa:{
        type: String,
        requiered: true,
        unique: true,
        validate: {
            validator: function(placa){
            return /^[A-Z]{3}\d{3}$/.test(placa); //cadena de validacion para placas
            },
            message: props => props.value + "no es valida la placa"
        }
    },
    marca:{
        type: String,
         requiered: true,
    },
    color:{
        type: String,
         requiered: true,
    },
    cilindraje:{
         type: Number,
        requiered: true,
         validate:{
        validator: function(cilindraje){
            return cilindraje > 800;
        },
        message: props => props.value + " no es de cilindraje 800"
         }     
    },
    linea:{
        type: String,
        requiered: true,
    },
    capacidad:{
        type: Number,
        requiered: true,
        validate:{
            validator: function(capacidad){
                return capacidad >0 & capacidad < 7;
            },
            message: props => props.value + " la capacidad no es valida "
        }     
    } //cuando es la uitima propiedad no es necesaria cerrar con coma
   
})

module.exports = mongoose.model('carro', carroSchema) //llamamos el esquema carroSchema