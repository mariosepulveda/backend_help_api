const tipos_inventarioRepository = require('../repositories/tipos_inventario.repository');

const getAll = async () => {
    const result = await tipos_inventarioRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'tipos_inventario encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron tipos_inventario', success: false, data: [] };
};

const getById = async (id) => {
    const record = await tipos_inventarioRepository.findById(id);

    const result = record ? { statusCode:200, message: 'tipos_inventario encontrado', success: true, data: record } : { statusCode: 404, message: 'tipos_inventario no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return tipos_inventarioRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el tipos_inventario, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return tipos_inventarioRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el tipos_inventario, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await tipos_inventarioRepository.remove(id);

    return  { statusCode: 200, message: 'tipos_inventario eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
