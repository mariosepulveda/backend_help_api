const transportesService = require('../services/transportes.service');

const getAll = async (req, res, next) => {
    try {
        const data = await transportesService.getAll();

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

        const data = await transportesService.getById(id);

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
        const data = await transportesService.create(req.body);

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

        const data = await transportesService.update(
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

        const data = await transportesService.remove(id);

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
