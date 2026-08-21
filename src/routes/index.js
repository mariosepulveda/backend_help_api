const express = require('express');

const voluntarioRoutes = require('./voluntario.routes');
const vehiculosRoutes = require('./vehiculos.routes');
const tipos_vehiculoRoutes = require('./tipos_vehiculo.routes');

const router = express.Router();

router.use('/voluntarios', voluntarioRoutes);

router.use('/vehiculos', vehiculosRoutes);

router.use('/tipos_vehiculo', tipos_vehiculoRoutes);
module.exports = router;