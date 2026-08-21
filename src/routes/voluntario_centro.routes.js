const express = require('express');

const voluntario_centroController = require('../controllers/voluntario_centro.controller');

const router = express.Router();

router.get('/get-all', voluntario_centroController.getAll);

router.post('/create', voluntario_centroController.create);

router.get('/find-id/:id', voluntario_centroController.getById);

router.put('/update/:id', voluntario_centroController.update);

router.delete('/delete/:id', voluntario_centroController.remove);

module.exports = router;
