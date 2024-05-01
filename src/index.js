const express = require("express");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const config = require("./config/config");
const routes = require("./routes/main");
const session = require("express-session");
const flash = require("connect-flash");

const app = express(); 

app.use(session({
    secret: "ControleOrcamento",
    resave: true,
    saveUninitialized: true
}));
app.use(flash());

app.use((req, res, next) => {
    res.locals.Log = req.flash("Log");
    res.locals.Erro = req.flash("Erro");
    next();
}); 

app.engine(".hbs", handlebars.engine({defaultLayout: "principal", extname: ".hbs"}));
app.set("view engine", "hbs");
app.set("views", `${config._DirName}/views`);

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(express.static(config._DirName + "/public"));

app.use(routes.routerMain);
//app.use("/Lista", routesLista.routerLista);
//app.use("/Cliente", routesCliente.routerCliente);
//app.use("/Orcamento", routesOrca.routerOrca);
 
app.listen(config._Porta, () => {
    console.log(`Aplicativo Deposito escutando na porta ${config._Porta}`);
}); 