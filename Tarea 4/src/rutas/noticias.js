const express = require('express');
const router = express.Router(); 
const noticiaControlador = require('./../controladores/noticias');


router.get('/noticias',noticiaControlador.getNoticias);

module.exports = router;
