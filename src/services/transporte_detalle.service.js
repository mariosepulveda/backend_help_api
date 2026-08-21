const transporte_detalleRepository = require('../repositories/transporte_detalle.repository');

const getAll = async () => {
    const result = await transporte_detalleRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'transporte_detalle encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron transporte_detalle', success: false, data: [] };
};

const getById = async (id) => {
    const record = await transporte_detalleRepository.findById(id);

    const result = record ? { statusCode:200, message: 'transporte_detalle encontrado', success: true, data: record } : { statusCode: 404, message: 'transporte_detalle no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return transporte_detalleRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el transporte_detalle, No se puede actualizar';
    return { statusCode: 404, message: error, success: false, data: [] };
    }

    return transporte_detalleRepository.update(id, data);
};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el transporte_detalle, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    }

    const data = await transporte_detalleRepository.remove(id);

    return  { statusCode: 200, message: 'transporte_detalle eliminado correctamente', success: true, data };

};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
