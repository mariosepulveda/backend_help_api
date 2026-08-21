const express = require('express');

const tipos_voluntarioController = require('../controllers/tipos_voluntario.controller');

const router = express.Router();

router.get('/get-all', tipos_voluntarioController.getAll);

router.post('/create', tipos_voluntarioController.create);

router.get('/find-id/:id', tipos_voluntarioController.getById);

router.put('/update/:id', tipos_voluntarioController.update);

router.delete('/delete/:id', tipos_voluntarioController.remove);

module.exports = router;
