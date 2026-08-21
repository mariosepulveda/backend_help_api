const franjas_horariasService = require('../services/franjas_horarias.service');

const getAll = async (req, res, next) => {
    try {
        const data = await franjas_horariasService.getAll();

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

        const data = await franjas_horariasService.getById(id);

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
        const data = await franjas_horariasService.create(req.body);

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

        const data = await franjas_horariasService.update(
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

        const data = await franjas_horariasService.remove(id);

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
