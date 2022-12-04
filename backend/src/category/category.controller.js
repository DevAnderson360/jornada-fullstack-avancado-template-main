const { isObjectIdValid } = require("../db/database.helper");

const findAll = (req, res) => {
    const categorys = [];

    res.send(categorys);
}

const findById = (req, res) => {
    const id = req.params.id;

    if (!isObjectIdValid(id)) {
        return res.status(400).send({ message: "ID inválido!" });
    }

    const category = {};

    if (!category) {
        return res.status(404).send({ message: "Categoria não encontrada." })
    }

    res.send(category);
}

const create = (req, res) => {

    const category = req.body;

    if (!category || !category.name) {
        return res.status(400).send({ message: "Dados inválidos!" })
    }

    const newCategory = {};

    res.status(201).send(newCategory);
}


module.exports = {
    findAll,
    findById,
    create
}