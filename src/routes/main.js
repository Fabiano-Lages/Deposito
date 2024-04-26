const routerMain = require("express").Router();

routerMain.get("/", (req, res) => {
    req.session.nome = "Fabiano";

    res.render("home", {nome: req.session.nome}); 
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