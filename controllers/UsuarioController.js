const UserSchema = require("../models/Usuario") // Accedemos a los datos del modelo
const bcrypt = require('bcrypt') // Importamos la libreria de encriptacion
const jwt = require('jsonwebtoken')


// Permite agrupar atributos y funciones
class UsuarioController{
   
    //creacmos funcion async y await deben ir juntos para la sincronia
  async getUsuarios(req, res) {
        var usuario = await UserSchema.find();
       
    }

    //obtenemos los datos del usuario
    //con ctrl d podemos cambiar el nombre para varias variables o textos

   async createUsuario ( req, res){
        //encriptamos la contraseña 
        const hashedPassword =  await bcrypt.hash(req.body.password, 10)


        var nuevoUsuario = {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
           // password: req.body.password, lo remplazamos por la siguiente linea- seguridad en contraseña 
           //Guardo contraseña hasehada
           password: hashedPassword, //guardo scontraseña hasheada
        }
        //then cuardo se guerda correcta menteo y el chach cuando es errrado y el estatus seria error 
       await UserSchema(nuevoUsuario).save()
       .then((result) => { //cuando se ejecuta correctamente
            res.send ({"status": "success", "message": "Usuario guardado correctamente"})
         }).catch ((error) => { // cuando no hay error
            res.send ({"status": "error", "message": error.message})
         })

        }
           

      // res.send ("Guardado Corecctamente")
    

    async getUsuarioById(req, res){
        var id = req.params.id
        var usuario = await UserSchema.findById(id)
        res.json(usuario)
    }

    async updateUsuario(req, res){

        var id = req.params.id;
        const hashedPassword =  await bcrypt.hash(req.body.password, 10)

        var updateUser = {
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            correo: req.body.correo,
            //password: req.body.password,
            password: hashedPassword,

        }
        await UserSchema.findByIdAndUpdate(id, updateUser, { new: true})
        .then((result) => { //cuando se ejecuta correctamente
             res.send ({"status": "success", "message": "Usuario actualizado correctamente"})
          }).catch ((error) => { // cuando no hay error
             res.send ({"status": "error", "message": error.message})
          })
        }
        

        // podemos manejar tambien este json
        //  res.json({"status": "success", "message": "Usuario actualizado correctamente"})
        //}

    async deleteUsuario(req, res){
        var id = req.params.id
        await UserSchema.deleteOne({_id: id})

        res.json({"status": "success", "message": "Usuario Eliminado correctamente"})
    }

    async login(req, res){
        //capturo el coreo y la contraseña ingresados
        var correo = req.body.correo;
        var password = req.body.password
        //buscamos el ususario por el correo 
        var usuario = await UserSchema.findOne ({correo})
        if (usuario){
            //comparar la contraseña ingresada con la registrada por el usuario
                                                        //ingreso   almacenado Encriptado
            var verificacionClave = await bcrypt.compare(password, usuario.password)
            if(verificacionClave){

                //codifique los datos del usuario. Crea un token con la informacion codificada del usuario 
                //clave = secret y con tiempo de una hora 
                usuario.password = null
                const token = jwt.sing({usuario}, 'secret', { expiresIn: '1h'})

                res.send({"status": "success",
                          "message": "Bienvenido" + usuario.nombre + "   " + usuario.apellidos,
                          "user_Id": usuario._id,
                          //retornamos el token
                          "token": token
                        })
            }else{
             res.status(401).send({"status": "error", "message": "Datos invalidos"})
            }
        }else{
            //cuando el correo ingresado no esta registrado
            res.status(401).send({"status": "error", "message":  " El correo ingresado no existe"})
        }

    }
}


module.exports = UsuarioController