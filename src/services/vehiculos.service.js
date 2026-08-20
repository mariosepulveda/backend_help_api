const vehiculosRepository = require('../repositories/vehiculos.repository');

const getAll = async () => {
    return vehiculosRepository.findAll();
};

const getById = async (id) => {
    const record = await vehiculosRepository.findById(id);

    if (!record) {
        const error = new Error('vehiculos no encontrado');
        error.statusCode = 404;
        throw error;
    }

    return record;
};

const create = async (data) => {
    return vehiculosRepository.create(data);
};

const update = async (id, data) => {
    await getById(id);

    return vehiculosRepository.update(id, data);
};

const remove = async (id) => {
    await getById(id);

    return vehiculosRepository.remove(id);
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
