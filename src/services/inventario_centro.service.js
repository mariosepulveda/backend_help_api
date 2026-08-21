const inventario_centroRepository = require('../repositories/inventario_centro.repository');

const getAll = async () => {
    const result = await inventario_centroRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'inventario_centro encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron inventario_centro', success: false, data: [] };
};

const getById = async (id) => {
    const record = await inventario_centroRepository.findById(id);

    const result = record ? { statusCode:200, message: 'inventario_centro encontrado', success: true, data: record } : { statusCode: 404, message: 'inventario_centro no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return inventario_centroRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el inventario_centro, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return inventario_centroRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el inventario_centro, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await inventario_centroRepository.remove(id);

    return  { statusCode: 200, message: 'inventario_centro eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
