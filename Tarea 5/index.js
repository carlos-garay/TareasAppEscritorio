const express = require('express');
const routes = require('./src/rutas');
const mongoose = require('mongoose');
require('dotenv').config();


const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const swaggerConf = require('./swagger.config');


const app = express();

const mongoUrl = process.env.MONGO_URL

const port = process.env.PORT || 3000; 


mongoose.connect(mongoUrl).then(() =>{
    console.log('Se conectó correctamente a la base de datos');
    app.listen(port,function(){
        console.log('app is running in port ' + port);
    })
}).catch(err =>{
    console.log('No se pudo conectar a la base de datos',err);
});

const swaggerDocs = swaggerJsDoc(swaggerConf);
app.use('/swagger',swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('',routes);


