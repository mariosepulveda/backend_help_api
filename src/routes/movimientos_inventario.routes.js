const express = require('express');

const movimientos_inventarioController = require('../controllers/movimientos_inventario.controller');

const router = express.Router();

router.get('/get-all', movimientos_inventarioController.getAll);

router.post('/create', movimientos_inventarioController.create);

router.get('/find-id/:id', movimientos_inventarioController.getById);

router.put('/update/:id', movimientos_inventarioController.update);

router.delete('/delete/:id', movimientos_inventarioController.remove);

module.exports = router;
