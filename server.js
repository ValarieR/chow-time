var express = require('express');
var methodO = require('method-override');
var bodPar = require("body-parser");
var hbars = require('express-handlebars');
var bContr = require('./controllers/burgers_controller.js');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", hbars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", bContr);
app.listen(PORT, () => {
    console.log(`Serv listening on ${PORT}`);
});