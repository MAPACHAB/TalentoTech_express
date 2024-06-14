const carroSchema = requiere( "../models/carro") //accedemos a los datos del pruyecto

class CarroController{
   
    //creacmos funcion async y await deben ir juntos para la sincronia
  async getcarros(req, res) {
        var carros = await carroSchema.find();
        res.json(carros)
    }
      // obtenemos un carro pasando el ID
    async getcarroById (req, res){
        var id = req.params.id
        var carro =  await carroSchema.findById(id)
        res.json(carro)
    }

    async cratecarro (req, res){

        var nuevoCarro = {
            modelo: req.body.modelo,
            marca: req.body.marca,
            color: req.body.color,
            cilindraje: req.body.cilindraje,
            placa: req.body.placa,
            capacidad: req.body.capacidad,
        }
        //then cuardo se guerda correcta menteo y el chach cuando es errrado y el estatus seria error 
       await carroSchema(nuevoCarro).save()
       .then((result) => { //cuando se ejecuta correctamente
            res.send ({"status": "success", "message":  "Carro guardado correctamente"})
         }).catch ((error) => { // cuando no hay error
            res.send ({"status": "error", "message": error.message})
         })

        }
       
    async updatecarro(req, res){
        var id =req.params.id;

        var nuevoCarro = {
            modelo: req.body.modelo,
            marca: req.body.marca,
            color: req.body.color,
            cilindraje: req.body.cilindraje,
            placa: req.body.placa,
            capacidad: req.body.capacidad,
        }
        //then cuardo se guerda correcta menteo y el chach cuando es errrado y el estatus seria error 
       await carroSchema(nuevoCarro).save()
       .then((result) => { //cuando se ejecuta correctamente
            res.send ({"status": "success", "message":  "Carro Actualizado correctamente"})
         }).catch ((error) => { // cuando no hay error
            res.send ({"status": "error", "message": error.message})
         })
        }

    async deleteCarro(req, res){
        var id = req.params.id
        await userSchema.deleteOne({_id: id}) //_id campo identificador el valor lo coloca automaticamente mongoDB

        res.json({"status": "success", "message": "Carro Eliminado correctamente"})
    }
} //cierre de clase


module.exports = carroController