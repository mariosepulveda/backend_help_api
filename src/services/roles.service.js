const rolesRepository = require('../repositories/roles.repository');

const getAll = async () => {
    const result = await rolesRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'roles encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron roles', success: false, data: [] };
};

const getById = async (id) => {
    const record = await rolesRepository.findById(id);

    const result = record ? { statusCode:200, message: 'roles encontrado', success: true, data: record } : { statusCode: 404, message: 'roles no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return rolesRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el roles, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return rolesRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el roles, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await rolesRepository.remove(id);

    return  { statusCode: 200, message: 'roles eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
