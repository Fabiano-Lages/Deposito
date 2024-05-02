const routerMain = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("../models/Usuario");
require("../models/TipoUsuario");

const boasVindas = (horas) => {
    return(horas < 12 ? "Bom dia" : (horas < 18 ? "Boa tarde" : "Boa noite"));
};

routerMain.get("/", (req, res) => {
    console.log((new Date()).getHours());
    res.render("home", {nome: req.session.nome, autenticado: req.session.autenticado, boasVindas: `${boasVindas((new Date()).getHours())} ${req.session.nome}`}); 
});

routerMain.post("/Login", async (req, res) => {
    const usuarios = mongoose.model("usuarios");
    usuarios.findOne({login: req.body.txtLogin})
        .then(async (usuario) => {
            if(usuario) {
                bcrypt.compare(req.body.txtSenha, usuario.senha)
                    .then((autenticado) => {
                        if(autenticado) {
                            req.session.autenticado = autenticado;
                            req.session.nome = usuario.nome;
                            req.session.id = usuario._id;
                            res.render("home", {autenticado, nome: req.session.nome, boasVindas: `${boasVindas((new Date()).getHours())} ${req.session.nome}`});
                        } else {
                            req.flash("Erro", `Senha inválida!`);
                            res.render("home", {login: req.body.txtLogin});
                        }
                    }
                );
            } else {
                req.flash("Erro", "Usuário não encontrado!");
                res.redirect("/");
            }
        }
    );
});

routerMain.get("/Vendas", (req, res) => {
    res.render("Vendas", {nome: req.session.nome}); 
});

routerMain.get("/Produtos", (req, res) => {
    res.render("Produtos"); 
});

routerMain.get("/Clientes", (req, res) => {
    res.render("Clientes"); 
});

routerMain.post("/Procurar", (req, res) => {
    res.render("Procurar"); 
});
module.exports = { routerMain };

// const saltRounds = 10;
// hashedPass = await bcrypt.hash(data.password, saltRounds);
// data.password = hashedPass;


// const isPasswordValid = await bcrypt.compare(data.password, user.password);
// if (!isPasswordValid) {
//     return res.status(401).json({ error: 'Invalid password' });
// }