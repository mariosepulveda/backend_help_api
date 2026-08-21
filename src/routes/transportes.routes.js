const express = require('express');

const transportesController = require('../controllers/transportes.controller');

const router = express.Router();

router.get('/get-all', transportesController.getAll);

router.post('/create', transportesController.create);

router.get('/find-id/:id', transportesController.getById);

router.put('/update/:id', transportesController.update);

router.delete('/delete/:id', transportesController.remove);

module.exports = router;
