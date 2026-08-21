const express = require('express');

const voluntarioRoutes = require('./voluntario.routes');
const vehiculosRoutes = require('./vehiculos.routes');
const tipos_vehiculoRoutes = require('./tipos_vehiculo.routes');
const categorias_voluntarioRoutes = require('./categorias_voluntario.routes');
const centros_acopioRoutes = require('./centros_acopio.routes');
const encomiendasRoutes = require('./encomiendas.routes');
const franjas_horariasRoutes = require('./franjas_horarias.routes');
const inventario_centroRoutes = require('./inventario_centro.routes');
const movimientos_inventarioRoutes = require('./movimientos_inventario.routes');
const necesidadesRoutes = require('./necesidades.routes');
const permisosRoutes = require('./permisos.routes');

const router = express.Router();

router.use('/voluntarios', voluntarioRoutes);

router.use('/vehiculos', vehiculosRoutes);

router.use('/tipos_vehiculo', tipos_vehiculoRoutes);
router.use('/categorias_voluntario', categorias_voluntarioRoutes);
router.use('/centros_acopio', centros_acopioRoutes);
router.use('/encomiendas', encomiendasRoutes);
router.use('/franjas_horarias', franjas_horariasRoutes);
router.use('/inventario_centro', inventario_centroRoutes);
router.use('/movimientos_inventario', movimientos_inventarioRoutes);
router.use('/necesidades', necesidadesRoutes);
router.use('/permisos', permisosRoutes);
module.exports = router;