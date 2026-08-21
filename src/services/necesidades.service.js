const necesidadesRepository = require('../repositories/necesidades.repository');

const getAll = async () => {
    const result = await necesidadesRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'necesidades encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron necesidades', success: false, data: [] };
};

const getById = async (id) => {
    const record = await necesidadesRepository.findById(id);

    const result = record ? { statusCode:200, message: 'necesidades encontrado', success: true, data: record } : { statusCode: 404, message: 'necesidades no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return necesidadesRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el necesidades, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return necesidadesRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el necesidades, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await necesidadesRepository.remove(id);

    return  { statusCode: 200, message: 'necesidades eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
