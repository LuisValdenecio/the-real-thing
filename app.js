var express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const host = '0.0.0.0';

var flash = require('connect-flash');

var passport = require("passport");
var request = require('request');

var session = require("express-session");
var app = express();
var serveStatic = require('serve-static');
var path = require('path')

var bodyParser = require('body-parser');
var path = require('path');

app.use(require('cookie-parser')());
app.use(require('body-parser').urlencoded({ extended: true }));

const expressSession = require('express-session');
app.use(expressSession({secret: 'mySecretKey'}));
app.use(passport.initialize());
app.use(passport.session());

//app.use('/public', express.static(__dirname + '/public'));
app.use(serveStatic(path.join(__dirname, '/')));

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
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleventh,
    twelveth,
    theFirstLast

const server = app.listen(port, host, ()=> {
});

const io = require("socket.io").listen(server);

var application = require('./lib/routes.js');

// run the routes
application.app(
    app,
    io,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth,
    seventh,
    eighth,
    ninth,
    tenth,
    eleventh,
    twelveth,
    theFirstLast
  );
