const express = require('express');

const transporte_detalleController = require('../controllers/transporte_detalle.controller');

const router = express.Router();

router.get('/get-all', transporte_detalleController.getAll);

router.post('/create', transporte_detalleController.create);

router.get('/find-id/:id', transporte_detalleController.getById);

router.put('/update/:id', transporte_detalleController.update);

router.delete('/delete/:id', transporte_detalleController.remove);

module.exports = router;
