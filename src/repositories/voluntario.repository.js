const prisma = require('../config/database');

const findAll = async () => {
    return prisma.voluntarios.findMany();
};

const findById = async (id) => {
    return prisma.voluntarios.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.voluntarios.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.voluntarios.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.voluntarios.delete({
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