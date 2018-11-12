var express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 5000

var flash = require('connect-flash');

var passport = require("passport");
var request = require('request');

var session = require("express-session");
var app = express();

var bodyParser = require('body-parser')
var path = require('path');

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

const expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/public', express.static(__dirname + '/public'));

app.locals.basedir = path.join(__dirname, 'views');

app.use(flash());
app.use(session({secret: 'keyboard cat'}))
app.use(bodyParser());
app.set('view engine', 'pug');
app.set('view options', { layout: false });

var first,
    second,
    third,
    fourth,
    fifth;

const server = app.listen(PORT, ()=> {
});

const io = require("socket.io").listen(server);

var application = require('./lib/routes.js');
application.app(app,io, first, second, third, fourth, fifth);
