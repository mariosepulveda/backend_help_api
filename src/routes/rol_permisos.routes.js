const express = require('express');

const rol_permisosController = require('../controllers/rol_permisos.controller');

const router = express.Router();

router.get('/get-all', rol_permisosController.getAll);

router.post('/create', rol_permisosController.create);

router.get('/find-id/:id', rol_permisosController.getById);

router.put('/update/:id', rol_permisosController.update);

router.delete('/delete/:id', rol_permisosController.remove);

module.exports = router;
