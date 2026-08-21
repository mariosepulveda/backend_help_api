const prisma = require('../config/database');

const findAll = async () => {
    return prisma.franjas_horarias.findMany();
};

const findById = async (id) => {
    return prisma.franjas_horarias.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.franjas_horarias.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.franjas_horarias.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.franjas_horarias.delete({
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
