const prisma = require('../config/database');

const findAll = async () => {
    return prisma.tipos_inventario.findMany();
};

const findById = async (id) => {
    return prisma.tipos_inventario.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.tipos_inventario.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.tipos_inventario.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.tipos_inventario.delete({
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
