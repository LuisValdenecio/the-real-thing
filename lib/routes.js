var util = require('util');
var express = require('express');
var app = express();
var passport = require("passport");

var fs = require('fs');
var request = require('request');
var helpers = require("./helperModules.js");
var emailSender = require("./emailSender.js");

const {Client} = require('pg');
const bcrypt= require('bcrypt');
const uuidv4 = require('uuid/v4');
const LocalStrategy = require('passport-local').Strategy;

// photo upload stuff
var multer = require("multer");
var storage = multer.diskStorage({
		destination : (req, file, cb)=> {
			cb(null, 'public/photo-storage');
		},

		filename : (req, file, cd)=> {
			const ext = file.mimetype.split('/')[1];
			cd(null, file.fieldname + '-' + uuidv4() + '.'+ext);
		}
});

//emailSender.sendEmail();

var upload = multer({storage : storage});

app.use(express.static('public'));

var currentAccountsData = [];
var socketUsers = [];

const client = new Client({
	user: "luisServer",
	host: "127.0.0.1",
	database: "CEPPH-DATABASE",
	password: "Angelina1997Nando",
	port: 5432,
});

module.exports = {

			app : function (app,io, users, dadosFaltas, professores, subjecInfo, studentsFaults, schoolRegister) {

			app.get('/', function (req, res, next) {
				res.render('index', {title: "Home", userData: req.user, messages: {danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success')}});
				console.log(req.user);
			});

			app.get('/registoProfessor', function (req, res, next) {
				res.render('registoProfessor', {title: "Registe uma conta", userData: req.user, messages: {danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success')}});
			});

			app.get('/registoEscola', function (req, res, next) {
				res.render('registoEscola');
			});

			/*
				This path registers schools into the DB
			*/
			app.post('/registoEscola', passport.authenticate('localTwo', {

			}), function(req, res) {

				try {

					client.connect();
					client.query('BEGIN');

					bcrypt.hash(req.body.password, 10, function(err, hash) {

						JSON.stringify(client.query('SELECT nome FROM "escola" WHERE "nome_usuario"=$1', [req.body.username], function(err, result) {

							// if this school name was alredy taken, do not register
							if(result.rows[0]) {
								res.redirect('/registoEscola');
							}

							// this userName hasnt been taken already
							else {
									client.query('INSERT INTO escola (escola_cod, nome, email, nome_usuario, provincia, senha) VALUES ($1, $2, $3, $4, $5, $6)',
									[uuidv4(), req.body.firstName, req.body.email, req.body.username , req.body.provincia, hash], function(err, result) {
										if(err) {
											console.log(err);
										} else {
											client.query('COMMIT');

											// ask for the user that has just been registered
											client.query('SELECT "nome", "email", "nome_usuario", "provincia" FROM "escola" WHERE "nome_usuario"=$1',[req.body.username],function(err,result){
												if (err) {
														console.log(err);
												} else {
													console.log(result.rows);
													res.redirect('/templates');
												}
											});

											return;
										}
								});
							}

						}));
					});

				} catch(e){throw(e)}

			});

			app.post('/registoProfessor', function (req, res) {

				try{
				    client.connect();
				    client.query('BEGIN');

						bcrypt.hash(req.body.password, 10, function(err, hash) {
							//if (err) console.error("password couldnt be saved");
							JSON.stringify(client.query('SELECT coordenador_cod FROM "coordenador" WHERE "nome_usuario"=$1', [req.body.username], function(err, result) {
								if(result.rows[0]) {
									req.flash('warning', "This email address is already registered. <a href='/login'>Log in!</a>");
									res.redirect('/registoProfessor');
								}

								else {
								    client.query('INSERT INTO coordenador (coordenador_cod , nome, email, escola_cod, nome_usuario, palavrapasse) VALUES ($1, $2, $3, $4, $5, $6)',
										 [uuidv4(), req.body.firstName, req.body.email, "46f9e41e-d637-457a-85c2-627918875e2a", req.body.username, hash], function(err, result) {
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

					console.log(accountOwner);

					try {

						client.connect();
						client.query('BEGIN');

						client.query('SELECT "nome", "estudante_cod", "sobrenome", "foto" FROM estudante WHERE turma_id = $1', [1], function(err, result) {
								if(err) console.log(err);
								else {
									res.render('account', { Name : accountOwner, rows: result.rows.length, path : "account"});
									users = result.rows;
								}
						});

						// send data faults as well
						client.query('SELECT "estudante_cod", "falta_indisciplinada", "falta_ausencia", "falta_material", "nome_disciplina" FROM falta WHERE nome_turma = $1',
							[className], function(err, result) {
								if (err) {
									console.log(err);
								} else {
									studentsFaults = [];
									studentsFaults.push(result.rows);
									studentsFaults.push([{"studentNumber" : users.length}]);
								}
							}
						);


					} catch(ex) {
						throw(ex)
					}

				} else{
					res.redirect('/login');
				}

			});

			app.get('/faltas', function(req, res) {
				if (req.isAuthenticated()) {
					res.render('faltas', {path : "faltas"});

					var className = req.session.passport.user[0].className;

					/*
					try {

						client.connect();
						client.query('BEGIN');

						client.query('SELECT "nome_disciplina" FROM disciplina_turma WHERE nome_turma = $1', [className], function(err, result) {
								if(err) console.log(err);
								else {
									dadosFaltas = result.rows;
								}
						});

						client.query('SELECT "nome_professor", "nome_disciplina", "nome_turma" FROM "Professor_disciplina" WHERE nome_turma = $1', [className], function(err, result) {
								if(err) console.log(err);
								else {
									professores = result.rows;
								}
						});

					} catch(ex) {
						throw(ex)
					}
					*/

				}

				else res.redirect('/login');
			});

			app.get(/^\/\w+\D+?\w+?\.$/, function(req, res) {
				if (req.isAuthenticated()) {
					var subject = helpers.exceptTheLast(req.url.replace("/", ""));
					var className = req.session.passport.user[0].className;
					res.render('faltas', {path : subject});

					try {

						client.connect();
						client.query('BEGIN');

						client.query('SELECT "nome_professor" FROM "Professor_disciplina" WHERE nome_disciplina = $1 AND nome_turma = $2', [subject,className], function(err, result) {
								if(err) console.log(err);
								else {
									result.rows.push({subject_name : subject});
									result.rows.push({classname : className});
									subjecInfo = result.rows;
								}
						});

					} catch(ex) {
						throw(ex)
					}

				}
				else res.redirect('/login');
			});

			app.post(/^\/\w+\D+?\w+?\.$/, function(req, res) {
				if (req.isAuthenticated()) {
					var subject = helpers.exceptTheLast(req.url.replace("/", ""));
					res.render('faltas', {path : "faltas"});

					var className = req.session.passport.user[0].className;
					var dataStudents;

					try {

							client.connect();
							client.query('BEGIN');

							client.query('SELECT "estudante_cod", "nome", "sobrenome" FROM "estudante" WHERE nome_turma = $1', [className], function(err, result) {
								if (err) {
									console.log(err);
								} else {
									var students = result.rows;

									for (let counter = 0; counter < students.length; counter++) {

										client.query('SELECT "estudante_cod", "nome_disciplina", "falta_indisciplinada", "falta_ausencia", "falta_material" FROM "falta" WHERE estudante_cod = $1 AND nome_disciplina = $2',
											[students[counter]["estudante_cod"], subject], function(err, results) {
												if (err) {
														console.log(err);
												} else {

													// the student does not yet have faults
													if (results.rows.length == 0) {

														client.query('INSERT INTO falta (estudante_cod , nome, sobrenome, nome_disciplina, trimestre, falta_indisciplinada, falta_ausencia, falta_material, nome_turma) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
															[students[counter]["estudante_cod"], students[counter]["nome"], students[counter]["sobrenome"], subject, "3º",
															req.body[students[counter]["estudante_cod"]][0], req.body[students[counter]["estudante_cod"]][1], req.body[students[counter]["estudante_cod"]][2], className],
															function(err, res) {
																	if (err) {
																		console.log(err);
																	} else {
																		client.query('COMMIT');
																	}
															}
														)

													}


													// the student does already have faults in this subject
													else {

														client.query('UPDATE falta SET falta_indisciplinada = falta_indisciplinada + $1, falta_ausencia = falta_ausencia + $2, falta_material = falta_material + $3 WHERE estudante_cod=$4 AND nome_disciplina = $5',
														[
															req.body[students[counter]["estudante_cod"]][0],
															req.body[students[counter]["estudante_cod"]][1],
															req.body[students[counter]["estudante_cod"]][2],
															students[counter]["estudante_cod"],
															subject
														],
															function(err, res) {
																	if (err) {
																		console.log(err);
																	} else {
																		client.query('COMMIT');
																	}

															}
														)

													}



												}

										});


									}

								}
							});

					} catch(ex) {
						throw(ex)
					}

				}
				else res.redirect('/login');
			});


			app.get('/Estudante', function(req, res) {
				if (req.isAuthenticated())
					res.render('Student_Register', {title : "Registar Estudante"})
				else res.redirect('/login');
			});

			// once the user is registered, he can create students...
			app.post('/Estudante', upload.single('imageupload'), function(req, res) {
					try {
						// use a pool of client instead
						client.connect();
						client.query('BEGIN');

						client.query('INSERT INTO estudante (estudante_cod , nome, sobrenome, turma_id, foto) VALUES ($1, $2, $3, $4, $5)',
							[uuidv4(), req.body.firstName, req.body.lastName, 1, req.file.filename], function(err, result) {
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
				else {
				    console.log(req.isAuthenticated());
						res.render('login', {title: "Log in", userData: req.user, messages: {danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success')}});
				}
			});

			// route to get the template page
			app.get('/templates', function(req, res) {

				// authetication is ok
				if (req.isAuthenticated()) {
						console.log(req.session.passport.user[0].username);

						res.render('templates', {TemplatePath : "template"});
				}

				// authentication is not ok, then redirect to login
				else {
						res.redirect('login');
				}
			});

			// embedded routes (tecnico)
			app.get('/tecnico', function(req,res) {
				if (req.isAuthenticated()) res.render('tecnico', {'tecnico' : 'tecnico'});
				else res.redirect('login');
			});

			// registo de cursos
			app.post('/tecnico', function(req, res) {
				if (req.isAuthenticated()) {

					//console.log(req.body);

					try {

						client.query('SELECT "escola_cod" FROM escola WHERE nome_usuario = $1',
							[req.session.passport.user[0].username], function(err,resu){
							if (err) {
								console.log(err);
							} else {

								// create a class
								client.query('INSERT INTO turma (nome_class, curso_nome, turma_id, escola_cod, data_criacao) VALUES ($1, $2, $3, $4, $5)',
									[req.body["classe"], req.body["curso"], uuidv4(), resu.rows[0]["escola_cod"], "hoje"], function(err,result){
									if (err) {
										console.log(err);
									} else {
										console.log(result.rows);
										client.query('COMMIT');
										res.redirect('/tecnico');
									}
								});

							}
						});


					} catch(ex) {}

				} else {
					res.redirect('login');
				}

			});

			// embedded routes (puniv)
			app.get('/puniv', function(req,res) {
				if (req.isAuthenticated()) res.render('puniv');
				else res.redirect('login');
			});

			// embedded routes (custom)
			app.get('/personalizado', function(req,res) {
				if (req.isAuthenticated()) res.render('personalizado');
				else res.redirect('login');
			});

			app.get('/logout', function(req, res){
				req.logout();
				//req.flash('success', "Logged out. See you soon!");
				res.redirect('/login');
			});

			app.post('/login',	passport.authenticate('localOne', {
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

			io.on("connect", (socket)=> {
				socket.emit('students', users);
				socket.emit('faltas', dadosFaltas);
				socket.emit('professores', professores);
				socket.emit('livroPonto',subjecInfo);
				socket.emit('allFaults', studentsFaults);
			});
		}
}

//this strategy is going to be used for login authetication post only
passport.use('localOne', new  LocalStrategy({passReqToCallback : true}, (req, username,password, done) => {

	loginAttempt();
	function loginAttempt() {
	    client.connect();
		try{
			client.query('BEGIN')
			var currentAccountsData = JSON.stringify(client.query('SELECT coordenador_cod, "nome", "nome_usuario", "email", "palavrapasse", "escola_cod" FROM "coordenador" WHERE "nome_usuario"=$1', [username], function(err, result) {

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
			catch(e) {
				throw (e);
			}
	};

}));

// a very simple passport strategy
passport.use('localTwo', new LocalStrategy({passReqToCallback : true}, (req, a,b, done)=>{
	return done(null, [{username : a}]);
}));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});
