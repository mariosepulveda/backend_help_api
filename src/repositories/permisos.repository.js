const prisma = require('../config/database');

const findAll = async () => {
    return prisma.permisos.findMany();
};

const findById = async (id) => {
    return prisma.permisos.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.permisos.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.permisos.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.permisos.delete({
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
