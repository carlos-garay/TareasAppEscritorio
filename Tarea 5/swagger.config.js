const port = process.env.PORT || 3000;

module.exports = {
    swaggerDefinition: {
        swagger: "2.0",
        info: {
            "title": "API Tareas",
            "description": "API para la tarea 5 de programación de aplicaciones de escritorio",
            "version": "1.0.0",
            "servers": ["https//localhost:"+port]
        }
    },
    apis: ["src/rutas/*.js"] 
}