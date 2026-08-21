const voluntarioRepository = require('../repositories/voluntario.repository');

const getAll = async () => {
    
    const voluntarios = await voluntarioRepository.findAll();

    return voluntarios.length > 0 ? { statusCode: 200, message: 'Voluntarios encontrados', success: true, data: voluntarios } : { statusCode: 404, message: 'No se encontraron voluntarios', success: false, data: [] };
};

const getById = async (id) => {
    const voluntario = await voluntarioRepository.findById(id);

    const result = voluntario ? { statusCode: 200, message: 'Voluntario encontrado', success: true, data: voluntario } : { statusCode: 404, message: 'Voluntario no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return voluntarioRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el voluntario, No se puede actualizar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    return voluntarioRepository.update(id, data);

};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el voluntario, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await voluntarioRepository.remove(id);
    
    return { statusCode: 200, message: 'Voluntario eliminado correctamente', success: true, data };

    
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};