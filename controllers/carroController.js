const CarroSchema = require( "../models/carro") //accedemos a los datos del pruyecto

class CarroController{
   
    //creacmos funcion async y await deben ir juntos para la sincronia //obtenemos todos los carros
  async getCarros(req, res) {
        var carros = await CarroSchema.find();
        res.json(carros)
    }
      // obtenemos un carro pasando el ID
    async getCarroById (req, res){
        var id = req.params.id
        var carro =  await CarroSchema.findById(id)
        res.json(carro)
    }

    async createCarro (req, res){

        var nuevoCarro = {
            modelo: req.body.modelo,
            marca: req.body.marca,
            color: req.body.color,
            cilindraje: req.body.cilindraje,
            placa: req.body.placa,
            linea: req.body.linea,
            capacidad: req.body.capacidad,
        }
        //then cuardo se guerda correcta menteo y el chach cuando es errrado y el estatus seria error 
       await CarroSchema(nuevoCarro).save()
       .then((result) => { //cuando se ejecuta correctamente
            res.send ({"status": "success", "message":  "Carro guardado correctamente"})
         }).catch ((error) => { // cuando no hay error
            res.status (400).send ({"status": "error", "message": error.message}) //colocamos un control de error status 400 cuando no se guarde correctamente
         })

        }
       
    async updateCarro(req, res){
        var id =req.params.id;

        var nuevoCarro = {
            modelo: req.body.modelo,
            marca: req.body.marca,
            color: req.body.color,
            cilindraje: req.body.cilindraje,
            placa: req.body.placa,
            linea: req.body.linea,
            capacidad: req.body.capacidad,
        } 
        //then cuardo se guerda correcta menteo y el chach cuando es errrado y el estatus seria error 
        await CarroSchema.findByIdAndUpdate(id, nuevoCarro, { new: true })
        .then((result) => { // Cuando se ejecuta correctamente
            res.send({"status": "success", "message": "Carro Actualizado correctamente"})
        }).catch((error) => { // Cuando hay un error
            res.status(400).send({"status": "error", "message": error.message})
        })
    }

    async deleteCarro(req, res){
        var id = req.params.id
        await userSchema.deleteOne({_id: id}) //_id campo identificador el valor lo coloca automaticamente mongoDB

        res.json({"status": "success", "message": "Carro Eliminado correctamente"})
    }
} //cierre de clase


module.exports = CarroController