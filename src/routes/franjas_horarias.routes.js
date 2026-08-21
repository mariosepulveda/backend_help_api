const express = require('express');

const franjas_horariasController = require('../controllers/franjas_horarias.controller');

const router = express.Router();

router.get('/get-all', franjas_horariasController.getAll);

router.post('/create', franjas_horariasController.create);

router.get('/find-id/:id', franjas_horariasController.getById);

router.put('/update/:id', franjas_horariasController.update);

router.delete('/delete/:id', franjas_horariasController.remove);

module.exports = router;
