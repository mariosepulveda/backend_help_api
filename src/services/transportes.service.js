const transportesRepository = require('../repositories/transportes.repository');

const getAll = async () => {
    const result = await transportesRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'transportes encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron transportes', success: false, data: [] };
};

const getById = async (id) => {
    const record = await transportesRepository.findById(id);

    const result = record ? { statusCode:200, message: 'transportes encontrado', success: true, data: record } : { statusCode: 404, message: 'transportes no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return transportesRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el transportes, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return transportesRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el transportes, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await transportesRepository.remove(id);

    return  { statusCode: 200, message: 'transportes eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
