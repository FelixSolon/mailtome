const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));

app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');

app.use('/', routes);

var PORT = 3000;
app.listen(process.env.PORT || 3000);