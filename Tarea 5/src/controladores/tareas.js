const Tarea = require('./../modelos/tareas');

const TareasController = {

    //Listar todas las tareas registradas
    listar: (req,res)=>{ 
        Tarea.find({})
            .then(response =>{
                console.log('Respuestas: ', response);
                res.send(response);
            })
            .catch(error => {
                res.status(400).send('Hubo un error: '+error)
            })
    },

    //Ver el detalle de una tarea buscándola por su ID
    ver: (req,res) =>{
        Tarea.findById(req.params.id)
            .then(response => {
                console.log('Respuestas: ',response)
                res.send(response)
            })
            .catch(error =>{
                res.status(400).send('Hubo un error: '+error)
            })
    },

    //Crear una nueva tarea
    crear: (req, res) =>{
        Tarea.create(req.body)
        .then(response => {
            console.log('Se creó la tarea: ', response.titulo)
            res.send(response)
        })
        .catch(error =>{
            res.status(400).send('Hubo un error: '+error)
        })
    },

    //Actualizar una tarea buscándola por su ID
    actualizar: (req, res) =>{
        Tarea.findByIdAndUpdate(req.params.id,req.body, {new: true})
        .then(response =>{
            console.log('Se actualizó la tarea: ', response.titulo)
            res.send(response)
        })
        .catch(error =>{
            res.status(400).send('Hubo un error: '+error)
        })
    },

    //Eliminar una tarea buscándola por su ID
    eliminar: (req,res) =>{
        Tarea.findByIdAndDelete(req.params.id)
        .then(response => {
            console.log('Se eliminó la tarea: ', response.titulo)
            res.send(response)
        })
        .catch(error =>{
            res.status(400).send('Hubo un error: '+error)
        })
    }
}


module.exports = TareasController;

