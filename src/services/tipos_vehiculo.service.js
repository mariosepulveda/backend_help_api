const tipos_vehiculoRepository = require('../repositories/tipos_vehiculo.repository');

const getAll = async () => {
    const result = await tipos_vehiculoRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'tipos_vehiculo encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron tipos_vehiculo', success: false, data: [] };
};

const getById = async (id) => {
    const record = await tipos_vehiculoRepository.findById(id);

    const result = record ? { statusCode:200, message: 'tipos_vehiculo encontrado', success: true, data: record } : { statusCode: 404, message: 'tipos_vehiculo no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return tipos_vehiculoRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el tipos_vehiculo, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return tipos_vehiculoRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el tipos_vehiculo, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await tipos_vehiculoRepository.remove(id);

    return  { statusCode: 200, message: 'tipos_vehiculo eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
