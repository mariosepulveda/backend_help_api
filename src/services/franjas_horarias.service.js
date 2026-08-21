const franjas_horariasRepository = require('../repositories/franjas_horarias.repository');

const getAll = async () => {
    const result = await franjas_horariasRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'franjas_horarias encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron franjas_horarias', success: false, data: [] };
};

const getById = async (id) => {
    const record = await franjas_horariasRepository.findById(id);

    const result = record ? { statusCode:200, message: 'franjas_horarias encontrado', success: true, data: record } : { statusCode: 404, message: 'franjas_horarias no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return franjas_horariasRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el franjas_horarias, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return franjas_horariasRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el franjas_horarias, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await franjas_horariasRepository.remove(id);

    return  { statusCode: 200, message: 'franjas_horarias eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
