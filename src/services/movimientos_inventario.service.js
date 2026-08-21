const movimientos_inventarioRepository = require('../repositories/movimientos_inventario.repository');

const getAll = async () => {
    const result = await movimientos_inventarioRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'movimientos_inventario encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron movimientos_inventario', success: false, data: [] };
};

const getById = async (id) => {
    const record = await movimientos_inventarioRepository.findById(id);

    const result = record ? { statusCode:200, message: 'movimientos_inventario encontrado', success: true, data: record } : { statusCode: 404, message: 'movimientos_inventario no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return movimientos_inventarioRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el movimientos_inventario, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return movimientos_inventarioRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el movimientos_inventario, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await movimientos_inventarioRepository.remove(id);

    return  { statusCode: 200, message: 'movimientos_inventario eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
