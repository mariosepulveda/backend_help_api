const prisma = require('../config/database');

const findAll = async () => {
    return prisma.rol_permisos.findMany();
};

const findById = async (id) => {
    return prisma.rol_permisos.findUnique({
        where: {
            id
        }
    });
};

const create = async (data) => {
    return prisma.rol_permisos.create({
        data
    });
};

const update = async (id, data) => {
    return prisma.rol_permisos.update({
        where: {
            id
        },
        data
    });
};

const remove = async (id) => {
    return prisma.rol_permisos.delete({
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
