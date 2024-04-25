const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Usuario = new Schema({
    nome: {
        type: String,
        required: true
    },
    login: {
        type: String,
        required: true
    },
    email: {
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
    },
    tipo: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "TipoUsuario",
    }
});

mongoose.model("Usuarios", Usuario);