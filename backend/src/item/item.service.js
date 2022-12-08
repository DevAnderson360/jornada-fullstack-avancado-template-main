const Item = require("./item.model");
const ObjectId = require("mongoose").Types.ObjectId;

const findAll = () => {
    return Item.find().select("_id name imageUrl");
}

const findById = (id) => {
    const objectId = new ObjectId(id);
    return Item.findById(objectId);

}

const create = (item) => {
    return Item.create(item);
}

const update = (item) => {
    return Item.updateOne(item);
}
module.exports = {
    findAll,
    findById,
    create,
    update,
}