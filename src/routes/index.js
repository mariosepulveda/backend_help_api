const express = require('express');

const voluntarioRoutes = require('./voluntario.routes');

const router = express.Router();

router.use('/voluntarios', voluntarioRoutes);

module.exports = router;