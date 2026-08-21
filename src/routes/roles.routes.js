const express = require('express');

const rolesController = require('../controllers/roles.controller');

const router = express.Router();

router.get('/get-all', rolesController.getAll);

router.post('/create', rolesController.create);

router.get('/find-id/:id', rolesController.getById);

router.put('/update/:id', rolesController.update);

router.delete('/delete/:id', rolesController.remove);

module.exports = router;
