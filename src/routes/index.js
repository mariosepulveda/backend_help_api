const express = require('express');

const voluntarioRoutes = require('./voluntario.routes');
const vehiculosRoutes = require('./vehiculos.routes');
const tipos_vehiculoRoutes = require('./tipos_vehiculo.routes');
const categorias_voluntarioRoutes = require('./categorias_voluntario.routes');
const centros_acopioRoutes = require('./centros_acopio.routes');
const encomiendasRoutes = require('./encomiendas.routes');

const router = express.Router();

router.use('/voluntarios', voluntarioRoutes);

router.use('/vehiculos', vehiculosRoutes);

router.use('/tipos_vehiculo', tipos_vehiculoRoutes);
router.use('/categorias_voluntario', categorias_voluntarioRoutes);
router.use('/centros_acopio', centros_acopioRoutes);
router.use('/encomiendas', encomiendasRoutes);
module.exports = router;