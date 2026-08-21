const prisma = require('../config/database');

const findAll = async () => {
    return prisma.roles.findMany();
};

const findById = async (id) => {
    return prisma.roles.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.roles.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.roles.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.roles.delete({
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
