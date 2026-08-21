const tipos_vehiculoService = require('../services/tipos_vehiculo.service');

const getAll = async (req, res, next) => {
    try {
        const data = await tipos_vehiculoService.getAll();

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const getById = async (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const data = await tipos_vehiculoService.getById(id);

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const create = async (req, res, next) => {
    try {
        const data = await tipos_vehiculoService.create(req.body);

        res.status(201).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const update = async (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const data = await tipos_vehiculoService.update(
            id,
            req.body
        );

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const id = Number(req.params.id);

        const data = await tipos_vehiculoService.remove(id);

        res.status(200).json({
            success: true,
            data
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
