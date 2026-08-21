const prisma = require('../config/database');

const findAll = async () => {
    return prisma.usuarios.findMany();
};

const findById = async (id) => {
    return prisma.usuarios.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.usuarios.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.usuarios.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.usuarios.delete({
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
