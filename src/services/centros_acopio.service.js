const centros_acopioRepository = require('../repositories/centros_acopio.repository');

const getAll = async () => {
    const result = await centros_acopioRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'centros_acopio encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron centros_acopio', success: false, data: [] };
};

const getById = async (id) => {
    const record = await centros_acopioRepository.findById(id);

    const result = record ? { statusCode:200, message: 'centros_acopio encontrado', success: true, data: record } : { statusCode: 404, message: 'centros_acopio no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return centros_acopioRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el centros_acopio, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return centros_acopioRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el centros_acopio, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await centros_acopioRepository.remove(id);

    return  { statusCode: 200, message: 'centros_acopio eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
