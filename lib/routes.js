var util = require('util');
var express = require('express');
var app = express();
var passport = require("passport");

var fs = require('fs');
var request = require('request');
var helpers = require("./helperModules.js");
var emailSender = require("./emailSender.js");
var routeCallBacks = require("./routeCallbacks.js");
var excelToJSON = require("./excelJSON.js");

var xlstojson = require("xls-to-json-lc");
var xlsxtojson = require("xlsx-to-json-lc");


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
			cd(null, file.fieldname + '-' + uuidv4() + '.'+file.originalname.split('.')[file.originalname.split('.').length -1]);
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

			app : function (app,io, users, dadosFaltas, professores, subjecInfo, studentsFaults, schoolRegister, classesInfo, turmaInfo, teacherDetails, allStudents, profilePhoto) {

					/*

					*/
					app.get('/', function (req, res, next) {
						res.render('login');
					});


					/*

					*/
					app.get('/registoProfessor', function (req, res, next) {
						res.render('registoProfessor', {title: "Registe uma conta", userData: req.user, messages: {danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success')}});
					});

					/*

					*/
					app.get('/registoEscola', function (req, res, next) {
						res.render('registoEscola');
					});

					/*
						This path registers schools into the DB
					*/
					app.post('/registoEscola', passport.authenticate('localTwo', {}), function(req, res) {

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


					/*

					*/
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

					/*

					*/
					app.get('/account', function (req, res, next) {

						if (req.isAuthenticated()) {
							res.render('account');

							profilePhoto = req.session.passport.user[0].foto;

						} else {
							res.redirect('login');
						}

					});


					/*

					*/
					app.get('/faltas', function(req, res) {

					});


					/*

					*/
					app.get(/^\/\w+\D+?\w+?\.$/, function(req, res) {

					});

					/*

					*/
					app.post(/^\/\w+\D+?\w+?\.$/, function(req, res) {

					});

					/*

					*/
					app.get('/login', function (req, res, next) {
							res.render('login', {title: "Log in", userData: req.user, messages: {danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success')}});
					});

					/*
						route to get the template page
					*/
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

					/*
						embedded routes (tecnico)
					*/
					app.get('/tecnico', function(req,res) {
						if (req.isAuthenticated()) res.render('tecnico', {'tecnico' : 'tecnico'});
						else res.redirect('login');
					});

					/*
						registo de cursos
					*/
					app.post('/tecnico', function(req, res) {
						if (req.isAuthenticated()) {

							try {

								client.query('SELECT "escola_cod" FROM escola WHERE nome_usuario = $1',
									[req.session.passport.user[0].userName], function(err,resu){
									if (err) {
										console.log(err);
									} else {

										// create a class
										const turmaId = uuidv4();
										client.query('INSERT INTO turma (nome_class, curso_nome, turma_id, escola_cod, data_criacao) VALUES ($1, $2, $3, $4, $5)',
											[req.body["classe"], req.body["curso"], turmaId, resu.rows[0]["escola_cod"], helpers.getDate() ], function(err,result){
											if (err) {
												console.log(err);
											} else {
												console.log(result.rows);
												client.query('COMMIT');

												req.body[req.body["classe"]].forEach((each)=> {

													// salve as disciplinas para o curso e para a classe
													client.query('INSERT INTO disciplina_classe (disciplina_nome, curso_nome, nome_class) VALUES ($1, $2, $3)',
														[each, req.body["curso"], req.body["classe"]],
														function(err,res) {
															if (err) console.log(err);
															else {
																console.log("sucess");
															}
														}
													)

												});

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

					/*
						embedded routes (puniv)
					*/
					app.get('/puniv', function(req,res) {
						if (req.isAuthenticated()) res.render('puniv');
						else res.redirect('login');
					});

					/*
						embedded routes (custom)
					*/
					app.get('/personalizado', function(req,res) {
						if (req.isAuthenticated()) res.render('personalizado');
						else res.redirect('login');
					});

					/*
					 	route for handling the list of saved courses
					*/
					app.get('/turmas', function(req, res) {
						if (req.isAuthenticated()) {
							res.render('turmas', {'searchCursos' : 'searchCursos'});

							// select every course from this schools
							client.query('SELECT escola_cod FROM "escola" WHERE "nome_usuario"=$1',
								[req.session.passport.user[0].userName],
								function(err,results){
									if (err) {
										console.log(err);
									} else {

										// retrieve info about classes for this schoool
										client.query('SELECT * FROM "turma" WHERE "escola_cod"=$1',
											[results.rows[0]["escola_cod"]], function(err,res){
												if (err) {

												} else {
													classesInfo = res.rows;
												}

											}
										);

									}
								}
							);

						}
						else res.redirect('login');
					});

					/*

					*/
					app.get('/logout', function(req, res){
						req.logout();
						//req.flash('success', "Logged out. See you soon!");
						res.redirect('/login');
					});

					/*

					*/
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

					/**********************************************************************************

					***********************************************************************************/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_estudantes)$/, function(req, res) {

						var thisClass = req["url"].split("_")[0];


						if (req.isAuthenticated()) {
							res.render('estudantes' , {from: 'students'});

							// consulta dados sobre os estudantes desta turma e envia-os de volta ao cliente
							try {

								client.query('SELECT "nome","foto","genero","idade", "turma_id" FROM estudante', function(err,result) {

										if (err) {
											console.log(err);
										} else {
											allStudents = result.rows;
											console.log(result.rows);
										}

								}

							)


							} catch (ex) {
								throw(ex);
							}

						} else {
							res.redirect('login');
						}


					});

					/***********************************************************************************

					***********************************************************************************/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_livrodeponto)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('livroDePonto', {from: 'livroPonto', breadcrumb : 'true'});

						} else {
							res.redirect('login');
						}

					});

					/*

					*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_horario)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('horario', {from: 'horario'});
						} else {
							res.redirect('login');
						}

					});

					/*

					*/
					app.post(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_horario)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('estudantes', {from: ''});
						} else {
							res.redirect('login');
						}

					});


					/*

					*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_estatistica)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('estudantes', {from: ''});
						} else {
							res.redirect('login');
						}

					});

					/*

					*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_relatorio)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('estudantes', {from: ''});
						} else {
							res.redirect('login');
						}

					});

					/*

					*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_novoEstudante)$/, function(req, res) {

						var thisClass = req["url"].split("_")[0];


						if (req.isAuthenticated()) {
							res.render('novoEstudante' , {from: 'NovoEstudents'});

							// consulta dados sobre os estudantes desta turma e envia-os de volta ao cliente
							try {

								client.query('SELECT "nome","foto","genero","idade", "turma_id" FROM estudante', function(err,result) {

										if (err) {
											console.log(err);
										} else {
											allStudents = result.rows;
											console.log(result.rows);
										}

								}

							)


							} catch (ex) {
								throw(ex);
							}

						} else {
							res.redirect('login');
						}

					});


					/*

					*/
					app.post(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_novoEstudante)$/, upload.single('imageupload'), function(req, res) {

						try {

							// adiciona um estudante ao banco de dadosFaltas
							client.query('INSERT INTO estudante (estudante_cod, nome, foto, turma_id, email, genero, idade) VALUES ($1, $2, $3, $4, $5, $6, $7)',
								[uuidv4(), req.body.name, req.file.filename, req["url"].split("_")[1], req.body.email, "M", "21"], function(err,result){

									if (err) {
											console.log(err);
									} else {
											console.log(result);
											console.log(req.body);

											// retorna para a página de estudantes da turma
											res.redirect("/turma_"+req["url"].split("_")[1]+"_estudantes");
									}


								}
							);

							console.log(req["url"].split("_")[1])
							console.log(req.body);

							console.log(ex);
						} catch (ex) {
						}

					});

					/*******************************************************************************************************************

					********************************************************************************************************************/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_uploadExcel)$/, function (req, res) {

							if (req.isAuthenticated()) {
								res.render('excelUpload' , {from: 'excelUpload', breadcrumb : 'true'});
							} else {
								res.redirect('login');
							}

					});

					/******************************************************************************************************************

					******************************************************************************************************************/
					app.post(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_uploadExcel)$/, upload.single('imageupload'), function (req, res) {

							var exceltojson;

							////// assign excelToJSON depengind on the file extension ///////
							if (req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx') {
	                exceltojson = xlsxtojson;
	            } else {
	                exceltojson = xlstojson;
	            }

							try {
	                exceltojson({
	                    input: req.file.path,
	                    output: null, //since we don't need output.json
	                    lowerCaseHeaders:true
	                }, function(err,result){
	                    if(err) {
	                        return res.json({error_code:1,err_desc:err, data: null});
	                    }

											///////////// export all the excelJSON data into the DB //////
											for (let data of result) {

												client.query('INSERT INTO estudante (estudante_cod, nome, foto, turma_id, email, genero, idade) VALUES ($1, $2, $3, $4, $5, $6, $7)',
													[uuidv4(), data['nome'], data['foto'], req["url"].split("_")[1], data['email'], data['genero'], data['idade'] ], function(err,res){

														if (err) {
															console.log(err);
														} else {
															console.log("sucess");
														}

													}
												);


											}

											//res.redirect("/turma_"+req["url"].split("_")[1]+"_estudantes");
	                });

									res.redirect("/turma_"+req["url"].split("_")[1]+"_estudantes");



	            } catch (e){
	                res.json({error_code:1,err_desc:"Corupted excel file"});
	            }

					});

					/*

					*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_estudanteTransferido)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('estudantes', {from: ''});
						} else {
							res.redirect('login');
						}

					});


					/*

					*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)/, function(req, res){

						if (req.isAuthenticated()) {

								res.render('turma', {from : 'specificClass'});

								var turmaCod = req["url"].split("_")[1];

								// query o nome das disciplinas
								client.query('SELECT "curso_nome", "nome_class" FROM turma WHERE turma_id = $1',
									[turmaCod], function(err,result) {
										if (err) {
											console.log(err);
										} else {

											// consulta o número de disciplinas para esta turma_
											client.query('SELECT "disciplina_nome" FROM disciplina_classe WHERE curso_nome = $1 AND nome_class= $2',
												[result.rows[0]["curso_nome"], result.rows[0]["nome_class"]],
												function(err,resu){
													if (err) {
														console.log(err);
													} else {

														 turmaInfo = resu.rows;
													}
												}
											);
										}
									}
							 	);

								//  consulta os professores das disciplinas registadas
								client.query('SELECT "nome", "disciplina_nome", "foto", "email" FROM professor WHERE turma_id = $1',
									[turmaCod], function(err,result){

										if (err) {
											console.log(err);
										} else {
											teacherDetails = result.rows;
										}

									}
								);


						} else {
							res.redirect('login');
						}

					});

					/*

					*/
					app.post(/\/turma_\w+/, upload.single('imageupload') , function(req, res){

						try {

							// adiciona um professor ao banco de dados
							client.query('INSERT INTO professor (professor_cod, nome, email, nome_usuario, palavrapasse, escola_cod, foto, disciplina_nome, turma_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
								[uuidv4(), req.body.name, req.body.email, req.body.username , req.body.password, classesInfo[0]["escola_cod"], req.file.filename,req.body.subjectName, req.body.classCod], function(err,result){

									if (err) {
										console.log(err);
									} else {
										console.log("coordenador added");
										// regista o professor de uma disciplinas
									}
								}
							);

						} catch (ex) {
								throw (ex);
						}

						res.redirect('/tecnico');
					});

					/*

					*/
					io.on("connect", (socket)=> {
						socket.emit('students', users);
						socket.emit('faltas', dadosFaltas);
						socket.emit('professores', professores);
						socket.emit('livroPonto',subjecInfo);
						socket.emit('allFaults', studentsFaults);
						socket.emit('classesInfo', classesInfo);
						socket.emit('turmaInfo', turmaInfo);
						socket.emit('teacherDetails', teacherDetails);
						socket.emit('allStudents', allStudents);
						socket.emit('profilePhoto', profilePhoto);
					});

		}
}

/*
	this strategy is going to be used for login authetication post only
*/
passport.use('localOne', new  LocalStrategy({passReqToCallback : true}, (req, username,password, done) => {

	loginAttempt();

	function loginAttempt() {

		 client.connect();

			try {

				client.query('BEGIN')

				var currentAccountsData = JSON.stringify(client.query('SELECT * FROM "escola" WHERE "nome_usuario"=$1', [username], function(err, result) {

					// the postgreSQL couldnt answer the query
				  if(err) {
						return done(err)
					}

					// the data required does not exist in the database
					if(result.rows[0] == null) {
						return done(null, false);
					}

					// data required is stored in the database
					else {

					    bcrypt.compare(req.body.password, result.rows[0].senha, function(err, check) {
					       if (err) {
									 console.log('Error while checking password');
									 return done();
								 } else if (check){
									 	return done(null, [{userName: result.rows[0]["nome_usuario"]}]);
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

passport.use('localTwo', new LocalStrategy({passReqToCallback : true}, (req, a,b, done)=>{
	return done(null, [{userName : a}]);
}));

passport.serializeUser(function(user, done) {
	done(null, user);
});

passport.deserializeUser(function(user, done) {
	done(null, user);
});
