const { isObjectIdValid } = require("../db/database.helper");
const service = require("./category.service");

const findAll = (req, res) => {
    const categorys = [];

    res.send(categorys);
}

const findById = async (req, res) => {
    const id = req.params.id;

    if (!isObjectIdValid(id)) {
        return res.status(400).send({ message: "ID inválido!" });
    }

    const category = await service.findById(id);

    if (!category) {
        return res.status(404).send({ message: "Categoria não encontrada." })
    }

    res.send(category);
}

const create = async (req, res) => {

    const category = req.body;

    if (!category || !category.name) {
        return res.status(400).send({ message: "Dados inválidos!" })
    }

    const newCategory = await service.create(item);

    res.status(201).send(newCategory);
}


const update = async (req, res) => {
    const id = req.params.id;

    if (!isObjectIdValid(id)) {
        return res.status(400).send({ message: "ID inválido!" });
    }

    const item = req.body;

    if (!item || !item.name || !item.imageUrl || !item.category) {
        return res.status(400).send({ message: "Dados inválidos!" })
    }

    const updatedItem = await service.update(item._id, item);

    if (!updatedItem) {
        return res.send(404).send({ message: "Item não encontrado!" })
    }

    res.send({ message: "Item atualizado com sucesso!" });

}

const deleteById = async (req, res) => {
    const id = req.params.id;

    if (!isObjectIdValid(id)) {
        return res.status(400).send({ message: "ID inválido!" });
    }

    const deletedItem = await service.deleteById(id);

    if (!deletedItem) {
        return res.send(404).send({ message: "Item não encontrado!" })
    }

    res.send({ message: "Item excluido com sucesso!" });
}


module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById,
}