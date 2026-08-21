const prisma = require('../config/database');

const findAll = async () => {
    return prisma.tipos_vehiculo.findMany();
};

const findById = async (id) => {
    return prisma.tipos_vehiculo.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.tipos_vehiculo.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.tipos_vehiculo.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.tipos_vehiculo.delete({
        where: {
            id
        }
    });
};

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};
