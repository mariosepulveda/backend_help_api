const prisma = require('../config/database');

const findAll = async () => {
    return prisma.tipos_voluntario.findMany();
};

const findById = async (id) => {
    return prisma.tipos_voluntario.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.tipos_voluntario.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.tipos_voluntario.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.tipos_voluntario.delete({
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
