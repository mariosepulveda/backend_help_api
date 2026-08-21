const prisma = require('../config/database');

const findAll = async () => {
    return prisma.inventario_centro.findMany();
};

const findById = async (id) => {
    return prisma.inventario_centro.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.inventario_centro.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.inventario_centro.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.inventario_centro.delete({
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
