const express = require('express');

const necesidadesController = require('../controllers/necesidades.controller');

const router = express.Router();

router.get('/get-all', necesidadesController.getAll);

router.post('/create', necesidadesController.create);

router.get('/find-id/:id', necesidadesController.getById);

router.put('/update/:id', necesidadesController.update);

router.delete('/delete/:id', necesidadesController.remove);

module.exports = router;
