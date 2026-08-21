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
const rol_permisosRoutes = require('./rol_permisos.routes');
const rolesRoutes = require('./roles.routes');
const tipos_inventarioRoutes = require('./tipos_inventario.routes');
const tipos_voluntarioRoutes = require('./tipos_voluntario.routes');
const transporte_detalleRoutes = require('./transporte_detalle.routes');
const transportesRoutes = require('./transportes.routes');
const usuariosRoutes = require('./usuarios.routes');

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
router.use('/rol_permisos', rol_permisosRoutes);
router.use('/roles', rolesRoutes);
router.use('/tipos_inventario', tipos_inventarioRoutes);
router.use('/tipos_voluntario', tipos_voluntarioRoutes);
router.use('/transporte_detalle', transporte_detalleRoutes);
router.use('/transportes', transportesRoutes);
router.use('/usuarios', usuariosRoutes);
module.exports = router;