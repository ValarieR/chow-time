var express = require('express');
// var method = require('method-override');
var bodyParser = require("body-parser");
var hbars = require('express-handlebars');
var bContr = require('./controllers/burgers_controller.js');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", hbars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use("/", bContr);
app.listen(PORT, function () {
    console.log(`Serv listening on ${PORT}`);
});