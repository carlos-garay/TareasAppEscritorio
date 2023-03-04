const path = require('path');
const express = require('express');


function cargarHome(req,res){
    console.log('test api');
    res.render('home');
}

module.exports = function(app){
    app.use('/assets',express.static(path.join(__dirname, 'assets')));

    app.get('/', cargarHome);

    app.get('*', function (req,res){
        res.status(404).send('Pagina no encontrada');
    });
}