const express = require('express');

const voluntarioRoutes = require('./voluntario.routes');
const vehiculosRoutes = require('./vehiculos.routes');
const tipos_vehiculoRoutes = require('./tipos_vehiculo.routes');
const categorias_voluntarioRoutes = require('./categorias_voluntario.routes');

const router = express.Router();

router.use('/voluntarios', voluntarioRoutes);

router.use('/vehiculos', vehiculosRoutes);

router.use('/tipos_vehiculo', tipos_vehiculoRoutes);
router.use('/categorias_voluntario', categorias_voluntarioRoutes);
module.exports = router;