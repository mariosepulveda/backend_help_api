const rol_permisosRepository = require('../repositories/rol_permisos.repository');

const getAll = async () => {
    const result = await rol_permisosRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'rol_permisos encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron rol_permisos', success: false, data: [] };
};

const getById = async (id) => {
    const record = await rol_permisosRepository.findById(id);

    const result = record ? { statusCode:200, message: 'rol_permisos encontrado', success: true, data: record } : { statusCode: 404, message: 'rol_permisos no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return rol_permisosRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el rol_permisos, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return rol_permisosRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el rol_permisos, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await rol_permisosRepository.remove(id);

    return  { statusCode: 200, message: 'rol_permisos eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
