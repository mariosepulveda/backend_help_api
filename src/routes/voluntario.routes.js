const express = require('express');

const voluntarioController = require('../controllers/voluntario.controller');

const router = express.Router();

router.get('/', voluntarioController.getAll);
router.get('/:id', voluntarioController.getById);
router.post('/', voluntarioController.create);
router.put('/:id', voluntarioController.update);
router.delete('/:id', voluntarioController.remove);

module.exports = router;