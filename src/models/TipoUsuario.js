const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TipoUsuario = new Schema({
    nome: {
        type: String,
        required: true
    },
    criado: {
        type: Date,
        required: true,
        default: Date.now()
    },
    modificado: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

mongoose.model("tiposusuarios", TipoUsuario);