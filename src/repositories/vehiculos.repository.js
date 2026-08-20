const prisma = require('../config/database');

const findAll = async () => {
    return prisma.vehiculos.findMany();
};

const findById = async (id) => {
    return prisma.vehiculos.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.vehiculos.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.vehiculos.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.vehiculos.delete({
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
