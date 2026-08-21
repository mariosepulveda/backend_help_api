const express = require('express');

const centros_acopioController = require('../controllers/centros_acopio.controller');

const router = express.Router();

router.get('/get-all', centros_acopioController.getAll);

router.post('/create', centros_acopioController.create);

router.get('/find-id/:id', centros_acopioController.getById);

router.put('/update/:id', centros_acopioController.update);

router.delete('/delete/:id', centros_acopioController.remove);

module.exports = router;
