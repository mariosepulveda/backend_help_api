const encomiendasRepository = require('../repositories/encomiendas.repository');

const getAll = async () => {
    const result = await encomiendasRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'encomiendas encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron encomiendas', success: false, data: [] };
};

const getById = async (id) => {
    const record = await encomiendasRepository.findById(id);

    const result = record ? { statusCode:200, message: 'encomiendas encontrado', success: true, data: record } : { statusCode: 404, message: 'encomiendas no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return encomiendasRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el encomiendas, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return encomiendasRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el encomiendas, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await encomiendasRepository.remove(id);

    return  { statusCode: 200, message: 'encomiendas eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
