const prisma = require('../config/database');

const findAll = async () => {
    return prisma.movimientos_inventario.findMany();
};

const findById = async (id) => {
    return prisma.movimientos_inventario.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.movimientos_inventario.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.movimientos_inventario.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.movimientos_inventario.delete({
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
