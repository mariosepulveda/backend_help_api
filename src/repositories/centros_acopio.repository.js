const prisma = require('../config/database');

const findAll = async () => {
    return prisma.centros_acopio.findMany();
};

const findById = async (id) => {
    return prisma.centros_acopio.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.centros_acopio.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.centros_acopio.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.centros_acopio.delete({
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
