const voluntarioRepository = require('../repositories/voluntario.repository');

const getAll = async () => {
    return voluntarioRepository.findAll();
};

const getById = async (id) => {
    const voluntario = await voluntarioRepository.findById(id);

    if (!voluntario) {
        const error = new Error('Voluntario no encontrado');
        error.statusCode = 404;
        throw error;
    }

    return voluntario;
};

const create = async (data) => {
    return voluntarioRepository.create(data);
};

const update = async (id, data) => {
    await getById(id);

    return voluntarioRepository.update(id, data);
};

const remove = async (id) => {
    await getById(id);

    return voluntarioRepository.remove(id);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};