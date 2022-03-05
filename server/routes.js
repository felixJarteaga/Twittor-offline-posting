// Routes.js - Módulo de rutas
var express = require('express');
var router = express.Router();

const mensajes = [
  {
    _id:'XXX',
    user:'Spiderman',
    mensaje:'Soy su vecino y amigo Spiderman'
  }
];





// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});

// Post mensaje
router.post('/', function (req, res) {


  const mensaje = {
    user: req.body.user,
    mensaje: req.body.mensaje
  };

  mensajes.push(mensaje);

  console.log(mensajes);

  res.json( {
    ok:true,
    mensaje:mensaje
  } );
});




module.exports = router;