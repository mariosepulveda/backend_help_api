const express = require('express');

const inventario_centroController = require('../controllers/inventario_centro.controller');

const router = express.Router();

router.get('/get-all', inventario_centroController.getAll);

router.post('/create', inventario_centroController.create);

router.get('/find-id/:id', inventario_centroController.getById);

router.put('/update/:id', inventario_centroController.update);

router.delete('/delete/:id', inventario_centroController.remove);

module.exports = router;
