const express = require('express'); //Se requiere para datos en el body
const router = express.Router(); //Si no necesito datos del body
const tareaControlador = require('./../controladores/tareas');


router.get('/',tareaControlador.listar);

router.get('/:id',tareaControlador.ver);

router.post('/',express.json(),tareaControlador.crear);

router.put('/:id',express.json(),tareaControlador.actualizar);

router.delete('/:id',tareaControlador.eliminar);

module.exports = router;


/**
 * @swagger
 * /tareas:
 *  get:
 *    description: Obtener la lista de tareas
 * 
 *    responses:
 *      200:
 *        description: Lista de tareas del usuario recuperadas, regresa un arreglo con los objetos de las tareas
 *      400:
 *        description: Error al momento de recuperar la lista
 *  post:
 *    description: Crear una nueva tarea
 *    parameters:
 *      - in: body
 *        name: tarea
 *        description: el título de la tarea
 *        schema:
 *          type: object
 *          properties:
 *            titulo:
 *              type: string
 * 
 *            descripcion:
 *              type: string
 *          
 *            status:
 *              type: string
 *            
 *            fechaCreacion:
 *              type: string
 *            
 *    responses:
 *      200:
 *        description: Creación de la nueva tarea, regresa el objeto de la tarea creada
 *      400:
 *        description: Error al crear una tarea
 * 
 * /tareas/{id}:
 *  get:
 *    description: Obtener los detalles de una tarea especificada por su id
 *      
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        description: Id de la tarea
 *    responses:
 *      200:
 *        description: Tarea especificada recuperada, regresa el objeto de la tarea especificada
 *      400:
 *        description: Error al momento de recuperar los detalles de la tarea
 * 
 *  put:
 *    description: Actualizar una tarea especificada por su id
 *      
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        description: Id de la tarea
 * 
 *      - in: body
 *        name: tarea
 *        description: el título de la tarea
 *        schema:
 *          type: object
 *          properties:
 *            titulo:
 *              type: string
 * 
 *            descripcion:
 *              type: string
 *          
 *            status:
 *              type: string
 *            
 *            fechaCreacion:
 *              type: string
 * 
 *    responses:
 *      200:
 *        description: Tarea especificada actualizada, regresa el objeto con la tarea actualizada
 *      400:
 *        description: Error al momento de intentar actualizar los detalles de la tarea
 * 
 *  delete:
 *    description: Eliminar una tarea especificada por su id
 *      
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        description: Id de la tarea
 *    responses:
 *      200:
 *        description: Tarea especificada eliminada, regresa el objeto de la tarea que se eliminó
 *      400:
 *        description: Error al momento de intentar eliminar la tarea
 * 
 */