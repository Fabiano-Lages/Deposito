const mongoose = require("mongoose");

const _Porta = 3080;
const _DirName = require("path").dirname(__dirname);

const _Banco = "mongodb://localhost:27017/Deposito";

mongoose.Promise = global.Promise;

mongoose.connect(_Banco)
    .then(() => {
        console.log("Banco conectado");
    })
    .catch((err) => {
        console.log("Erro: " + err);
    });

const db = mongoose.connection;

module.exports = { _Porta, _DirName, db };