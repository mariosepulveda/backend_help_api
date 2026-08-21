const prisma = require('../config/database');

const findAll = async () => {
    return prisma.voluntario_centro.findMany();
};

const findById = async (id) => {
    return prisma.voluntario_centro.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.voluntario_centro.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.voluntario_centro.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.voluntario_centro.delete({
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
