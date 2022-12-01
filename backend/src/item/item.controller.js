const { isObjectIdValid } = require("../db/database.helper");

const findAll = (req, res) => {
    const items = [];

    res.send(items);
}

const findById = (req, res) => {
    const id = req.params.id;

    if (!isObjectIdValid(id)) {
        return res.status(400).send({ message: "ID inválido!" });
    }

    const item = {};

    if (!item) {
        return res.status(404).send({ message: "Item não encontrado." })
    }

    res.send(item);
}

const create = (req, sen) => { }

const update = (req, sen) => { }

const deleteById = (req, sen) => { }


module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
}