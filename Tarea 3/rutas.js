const path = require('path');
const express = require('express');

module.exports = function(app){
    app.use('/assets',express.static(path.join(__dirname, 'assets')));

    app.get('/', function(req,res){
        const ruta = path.join(__dirname,'views','perfil.html');
        res.sendFile(ruta);
    });

    app.get('/metas', function(req,res){
        const ruta = path.join(__dirname,'views','metas.html');
        res.sendFile(ruta);
    });

    app.get('/gustos', function(req,res){
        const ruta = path.join(__dirname,'views','gustos.html');
        res.sendFile(ruta);
    });

    app.get('*', function (req,res){
        const ruta = path.join(__dirname,'views','error.html');
        res.sendFile(ruta);
    });
}