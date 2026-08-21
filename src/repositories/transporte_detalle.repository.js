const prisma = require('../config/database');

const findAll = async () => {
    return prisma.transporte_detalle.findMany();
};

const findById = async (id) => {
    return prisma.transporte_detalle.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.transporte_detalle.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.transporte_detalle.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.transporte_detalle.delete({
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
