const routerMain = require("express").Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("../models/Usuario");

routerMain.get("/", (req, res) => {
    res.render("home", {nome: req.session.nome, autenticado: req.session.autenticado}); 
});

routerMain.post("/Login", async (req, res) => {
    const usuario = mongoose.model("usuarios");
    data = await usuario.find({login: req.body.txtLogin});
    if(data && data.length > 0){
        const reg = data[0];
        const autenticado = await bcrypt.compare(reg.senha, req.body.txtSenha);

        if (!autenticado) {
            req.flash("Erro", "Senha inválida");
        } else {
            req.session.autenticado = autenticado;
            req.session.nome = reg.nome;
        }
    } else {
        req.flash("Erro", "Usuário não encontrado!");
    }

    res.redirect("/");
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