const mongoose = require("mongoose");

const dataBaseUrl = "mongodb://127.0.0.1:27017/jornada-fullstack-avancado";

const isObjectIdValid = (id) => {
    return true;
}

const connectToDatabase = () => {
    console.log(" iniciando conexão com o banco de dodos!! ")
    return mongoose
        .connect(dataBaseUrl)
        .then(() => console.log("Banco de dados conectado com sucesso!"))
        .catch((error) => console.log("Erron na conexão com o banco de dados.\n", error));
}

module.exports = {
    isObjectIdValid,
    connectToDatabase
};