const categorias_voluntarioRepository = require('../repositories/categorias_voluntario.repository');

const getAll = async () => {
    const result = await categorias_voluntarioRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'categorias_voluntario encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron categorias_voluntario', success: false, data: [] };
};

const getById = async (id) => {
    const record = await categorias_voluntarioRepository.findById(id);

    const result = record ? { statusCode:200, message: 'categorias_voluntario encontrado', success: true, data: record } : { statusCode: 404, message: 'categorias_voluntario no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return categorias_voluntarioRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el categorias_voluntario, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return categorias_voluntarioRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el categorias_voluntario, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await categorias_voluntarioRepository.remove(id);

    return  { statusCode: 200, message: 'categorias_voluntario eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
