const express = require('express');

const tipos_inventarioController = require('../controllers/tipos_inventario.controller');

const router = express.Router();

router.get('/get-all', tipos_inventarioController.getAll);

router.post('/create', tipos_inventarioController.create);

router.get('/find-id/:id', tipos_inventarioController.getById);

router.put('/update/:id', tipos_inventarioController.update);

router.delete('/delete/:id', tipos_inventarioController.remove);

module.exports = router;
