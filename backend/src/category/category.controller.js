const { isObjectIdValid } = require("../db/database.helper");

const findAll = (req, res) => {
    const categorys = [];

    res.send(categorys); return [];
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

module.exports = {
    findAll,
    findById
}