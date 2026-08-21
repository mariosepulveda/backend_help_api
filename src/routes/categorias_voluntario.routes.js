const express = require('express');

const categorias_voluntarioController = require('../controllers/categorias_voluntario.controller');

const router = express.Router();

router.get('/get-all', categorias_voluntarioController.getAll);

router.post('/create', categorias_voluntarioController.create);

router.get('/find-id/:id', categorias_voluntarioController.getById);

router.put('/update/:id', categorias_voluntarioController.update);

router.delete('/delete/:id', categorias_voluntarioController.remove);

module.exports = router;
