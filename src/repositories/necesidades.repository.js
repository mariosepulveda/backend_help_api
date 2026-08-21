const prisma = require('../config/database');

const findAll = async () => {
    return prisma.necesidades.findMany();
};

const findById = async (id) => {
    return prisma.necesidades.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.necesidades.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.necesidades.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.necesidades.delete({
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
