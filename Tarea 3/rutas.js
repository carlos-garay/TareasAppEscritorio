const path = require('path');
const express = require('express');
//const {auth} = require('./src/middlewares');

function cargarHome(req,res){
    //const paginado = req.query.paginado === 'false' ? false : true;
    console.log('api works');
    res.sendFile(__dirname + '/views/perfil.html');
}


module.exports = function(app){
    app.use('/assets',express.static(path.join(__dirname, 'assets')));

    app.get('/', cargarHome);

    app.get('*', function (req,res){
        res.status(404).send('Pagina no encontrada');
    });
}