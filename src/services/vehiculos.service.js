const vehiculosRepository = require('../repositories/vehiculos.repository');

const getAll = async () => {
    const result = await vehiculosRepository.findAll();
    return result.length > 0 ? { statusCode: 200, message: 'Vehiculos encontrados', success: true, data: result } : { statusCode: 404, message: 'No se encontraron vehiculos', success: false, data: [] };
};

const getById = async (id) => {
    const record = await vehiculosRepository.findById(id);

    const result = record ? { statusCode: 200, message: 'Vehiculo encontrado', success: true, data: record } : { statusCode: 404, message: 'Vehiculo no encontrado', success: false, data: [] };

    return result;
};

const create = async (data) => {
    return vehiculosRepository.create(data);
};

const update = async (id, data) => {
    const result = await getById(id);

    console.log('Result from getById:', result); // Debugging line.
    if ( result.statusCode === 404) {
        const error = 'No se encontró el vehiculo, No se puede actualizar';
        return { statusCode: 404, message: error, success: false, data: [] };
    } 

    return vehiculosRepository.update(id, data);

};

const remove = async (id) => {
    const result = await getById(id);

    if (result.statusCode === 404) {
        const error = 'No se encontró el vehiculo, No se puede eliminar';
        return { statusCode: 404, message: error, success: false, data: [] };
    } 

    const data = await vehiculosRepository.remove(id)
    
    return  { statusCode: 200, message: 'Vehiculo eliminado correctamente', success: true, data };
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
