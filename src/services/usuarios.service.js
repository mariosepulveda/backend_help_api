const usuariosRepository = require('../repositories/usuarios.repository');

const getAll = async () => {
    const result = await usuariosRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'usuarios encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron usuarios', success: false, data: [] };
};

const getById = async (id) => {
    const record = await usuariosRepository.findById(id);

    const result = record ? { statusCode:200, message: 'usuarios encontrado', success: true, data: record } : { statusCode: 404, message: 'usuarios no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return usuariosRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el usuarios, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return usuariosRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el usuarios, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await usuariosRepository.remove(id);

    return  { statusCode: 200, message: 'usuarios eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
