const express = require('express');

const permisosController = require('../controllers/permisos.controller');

const router = express.Router();

router.get('/get-all', permisosController.getAll);

router.post('/create', permisosController.create);

router.get('/find-id/:id', permisosController.getById);

router.put('/update/:id', permisosController.update);

router.delete('/delete/:id', permisosController.remove);

module.exports = router;
