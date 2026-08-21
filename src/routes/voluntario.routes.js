const express = require('express');

const voluntarioController = require('../controllers/voluntario.controller');

const router = express.Router();

router.get('/get-all', voluntarioController.getAll);
router.get('/find-id/:id', voluntarioController.getById);
router.post('/create', voluntarioController.create);
router.put('/update/:id', voluntarioController.update);
router.delete('/delete/:id', voluntarioController.remove);

module.exports = router;