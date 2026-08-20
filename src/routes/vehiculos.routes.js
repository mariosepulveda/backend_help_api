const express = require('express');

const vehiculosController = require('../controllers/vehiculos.controller');

const router = express.Router();

router.get('/get-all', vehiculosController.getAll);

router.post('/create', vehiculosController.create);

router.get('/find-id/:id', vehiculosController.getById);

router.put('/update/:id', vehiculosController.update);

router.delete('/delete/:id', vehiculosController.remove);

module.exports = router;
