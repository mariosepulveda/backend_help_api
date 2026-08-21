const prisma = require('../config/database');

const findAll = async () => {
    return prisma.encomiendas.findMany();
};

const findById = async (id) => {
    return prisma.encomiendas.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.encomiendas.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.encomiendas.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.encomiendas.delete({
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
