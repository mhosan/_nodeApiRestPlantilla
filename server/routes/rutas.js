const express = require('express');
const router = express.Router();
const usuariosCtrl = require('../controllers/controlador');

router.get('/', usuariosCtrl.getUsuarios);

router.post('/', usuariosCtrl.createUsuario);

router.get('/:id', usuariosCtrl.getUsuario); //esto es /id, ojo, NO es un parametro de la forma ?id=9849389

router.put('/:id', usuariosCtrl.editUsuario);

router.delete('/:id', usuariosCtrl.deleteUsuario);


module.exports = router;