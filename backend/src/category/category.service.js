const Category = require("./category.model");
const ObjectId = require("mongoose").Types.ObjectId;

const findAll = () => {
    return Category.find();//.select("_id name imageUrl");
}

const findById = (id) => {
    const objectId = new ObjectId(id);
    return Category.findById(objectId);
    
}

const create = (category) => {
    return Category.create(category);
}

const update = (id, category) => {
    const objectId = new ObjectId(id);
    return Category.findByIdAndUpdate(objectId, category);
}

const deleteById = (id) => {
    const objectId = new ObjectId(id);
    return Category.findByIdAndDelete(objectId);
}


module.exports = {
    findAll,
    findById,
    create,
    update,
    deleteById
}