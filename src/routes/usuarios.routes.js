const express = require('express');

const usuariosController = require('../controllers/usuarios.controller');

const router = express.Router();

router.get('/get-all', usuariosController.getAll);

router.post('/create', usuariosController.create);

router.get('/find-id/:id', usuariosController.getById);

router.put('/update/:id', usuariosController.update);

router.delete('/delete/:id', usuariosController.remove);

module.exports = router;
