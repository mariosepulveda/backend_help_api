const express = require('express');

const tipos_vehiculoController = require('../controllers/tipos_vehiculo.controller');

const router = express.Router();

router.get('/get-all', tipos_vehiculoController.getAll);

router.post('/create', tipos_vehiculoController.create);

router.get('/find-id/:id', tipos_vehiculoController.getById);

router.put('/update/:id', tipos_vehiculoController.update);

router.delete('/delete/:id', tipos_vehiculoController.remove);

module.exports = router;
