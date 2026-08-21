const permisosRepository = require('../repositories/permisos.repository');

const getAll = async () => {
    const result = await permisosRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'permisos encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron permisos', success: false, data: [] };
};

const getById = async (id) => {
    const record = await permisosRepository.findById(id);

    const result = record ? { statusCode:200, message: 'permisos encontrado', success: true, data: record } : { statusCode: 404, message: 'permisos no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return permisosRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el permisos, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return permisosRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el permisos, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await permisosRepository.remove(id);

    return  { statusCode: 200, message: 'permisos eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
