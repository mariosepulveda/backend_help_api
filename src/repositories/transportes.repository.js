const prisma = require('../config/database');

const findAll = async () => {
    return prisma.transportes.findMany();
};

const findById = async (id) => {
    return prisma.transportes.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.transportes.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.transportes.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.transportes.delete({
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
