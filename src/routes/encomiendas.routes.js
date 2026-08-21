const express = require('express');

const encomiendasController = require('../controllers/encomiendas.controller');

const router = express.Router();

router.get('/get-all', encomiendasController.getAll);

router.post('/create', encomiendasController.create);

router.get('/find-id/:id', encomiendasController.getById);

router.put('/update/:id', encomiendasController.update);

router.delete('/delete/:id', encomiendasController.remove);

module.exports = router;
