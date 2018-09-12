var util = require('util');
var express = require('express');
var app = express();
var passport = require("passport");

var fs = require('fs');
var request = require('request');
const {Client} = require('pg');
const bcrypt= require('bcrypt');
const uuidv4 = require('uuid/v4');
const LocalStrategy = require('passport-local').Strategy;

//TODO
//Add forgot password functionality
//Add email confirmation functionality
//Add edit account page

app.use(express.static('public'));

//const connectionString = process.env.DATABASE_URL;

var currentAccountsData = [];

const client = new Client({
	user: "luisServer",
	host: "127.0.0.1",
	database: "CEPPH-DATABASE",
	password: "Angelina1997Nando",
	port: 5432,
});

module.exports = function (app) {

	app.get('/', function (req, res, next) {
		res.render('index', {title: "Home", userData: req.user, messages: {danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success')}});
		console.log(req.user);
	});

	app.get('/registar', function (req, res, next) {
		res.render('register', {title: "Registe uma conta", userData: req.user, messages: {danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success')}});
	});

	app.post('/registar', function (req, res) {

		try{
		    client.connect();
		    client.query('BEGIN');

				bcrypt.hash(req.body.password, 10, function(err, hash) {
					//if (err) console.error("password couldnt be saved");
					JSON.stringify(client.query('SELECT coordenador_cod FROM "coordenador" WHERE "nome_usuario"=$1', [req.body.username], function(err, result) {
						if(result.rows[0]) {
							req.flash('warning', "This email address is already registered. <a href='/login'>Log in!</a>");
							res.redirect('/registar');
						}

						else {
						    client.query('INSERT INTO coordenador (coordenador_cod , nome, sobrenome, nome_turma, nome_usuario, palavrapasse) VALUES ($1, $2, $3, $4, $5, $6)', [uuidv4(), req.body.firstName, req.body.lastName, req.body.classname , req.body.username, hash], function(err, result) {
									if(err) {
										console.log(err);
									} else {
								    client.query('COMMIT');
								    console.log(result);
								    req.flash('success','User created.');
										res.redirect('/login');
										return;
								}
							});
						}

					}));
				});


			//client.release();
		}
		catch(e){throw(e)}
	});

	app.get('/account', function (req, res, next) {
		if(req.isAuthenticated()){

			// Gather information about a particular coordinatoor
			var accountOwner = req.session.passport.user[0].userName;
			var className = req.session.passport.user[0].className;

			try {

				client.connect();
				client.query('BEGIN');

				client.query('SELECT "nome", "sobrenome" FROM estudante WHERE nome_turma = $1', [className], function(err, result) {
						if(err) console.log(err);
						else {


							res.render('account', {Name : accountOwner, rows: result.rows});


						}
				});

			} catch(ex) {
				throw(ex)
			}

		} else{
			res.redirect('/login');
		}
	});


	app.get('/Estudante', function(req, res) {
		if (req.isAuthenticated())
			res.render('Student_Register', {title : "Registar Estudante"})
		else res.redirect('/login');
	})

	// once the user is registered, he can create students...
	app.post('/Estudante', function(req, res) {
			try {
				// use a pool of client instead
				client.connect();
				client.query('BEGIN');

				client.query('INSERT INTO estudante (estudante_cod , nome, sobrenome, nome_turma) VALUES ($1, $2, $3, $4)', [uuidv4(), req.body.firstName, req.body.lastName, req.body.classname], function(err, result) {
						if(err) {
							console.log(err);
						} else {
							client.query('COMMIT');
							console.log(result);
							req.flash('success','User created.');
							res.redirect('/account');
							return;
						}
				});

			} catch (ex) {
				throw(ex);
			}
	});

	app.get('/login', function (req, res, next) {
		if (req.isAuthenticated()) {
				res.redirect('/account');
		}
		else{
		    console.log(req.isAuthenticated());
				res.render('login', {title: "Log in", userData: req.user, messages: {danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success')}});
		}
	});

	app.get('/logout', function(req, res){
		req.logout();
		//req.flash('success', "Logged out. See you soon!");
		res.redirect('/login');
	});

	app.post('/login',	passport.authenticate('local', {
		successRedirect: '/account',
		failureRedirect: '/login',
		failureFlash: true
		}), function(req, res) {
		if (req.body.remember) {
			req.session.cookie.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
		}
		else {
			req.session.cookie.expires = false; // Cookie expires at end of session
		}
		res.redirect('/');
	});
}

passport.use('local', new  LocalStrategy({passReqToCallback : true}, (req, username,password, done) => {

	loginAttempt();
	function loginAttempt() {
	    client.connect();
		try{
			client.query('BEGIN')
			var currentAccountsData = JSON.stringify(client.query('SELECT coordenador_cod, "nome", "nome_usuario", "sobrenome", "palavrapasse", "nome_turma" FROM "coordenador" WHERE "nome_usuario"=$1', [username], function(err, result) {

			  if(err) {
			    console.log("something is not going well");
					return done(err)
				}
				if(result.rows[0] == null) {
				  req.flash('danger', "Oops. Incorrect login details.");
					return done(null, false);
				}
				else {
				    bcrypt.compare(req.body.password, result.rows[0].palavrapasse, function(err, check) {
				       if (err) {
								 console.log('Error while checking password');
								 return done();
							 } else if (check){
								 	return done(null, [{userName: result.rows[0].nome_usuario, firstName: result.rows[0].nome, lastName: result.rows[0].sobrenome,
									className : result.rows[0].nome_turma}]);
							 } else {
						    console.log("User couldnt login");
								req.flash('danger', "Oops. Incorrect login details.");
								return done(null, false);
							}
						});
					}
				}))
			}

			catch(e){throw (e);}
	};
  }
))

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});
