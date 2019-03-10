var util = require('util');
var express = require('express');
var app = express();
var passport = require("passport");

var fs = require('fs');
var request = require('request');
var helpers = require("./helperModules.js");
//var emailSender = require("./emailSender.js");
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

			app : function (app,io, users, dadosFaltas, professores, subjecInfo, studentsFaults, schoolRegister, classesInfo, turmaInfo, teacherDetails, allStudents, profilePhoto, livroDPonto, generalData) {

					/*////////////////////////////////////////////////////////////////////

					*/////////////////////////////////////////////////////////////////////
					app.get('/', function (req, res, next) {
						res.render('login');
					});


					/*////////////////////////////////////////////////////////////////////

					*/////////////////////////////////////////////////////////////////////
					app.get('/registoProfessor', function (req, res, next) {
						res.render('registoProfessor', {title: "Registe uma conta", userData: req.user, messages: {danger: req.flash('danger'), warning: req.flash('warning'), success: req.flash('success')}});
					});

					/*////////////////////////////////////////////////////////////////////

					*/////////////////////////////////////////////////////////////////////
					app.get('/registoEscola', function (req, res, next) {
						res.render('registoEscola');
					});

					/*///////////////////////////////////////////////////////////////////
						This path registers schools into the DB
					*////////////////////////////////////////////////////////////////////
					app.post('/registoEscola', passport.authenticate('localTwo', {}), function(req, res) {

						try {

							client.connect();
							client.query('BEGIN');

							const FIXED_CODE = uuidv4();

							/////////// Registe um usuário escola ///////////////
							bcrypt.hash(req.body.password, 10, function(err, hash) {

									// this userName hasnt been taken already
									client.query('INSERT INTO usuario (cod_usuario, nome_usuario, palavra_passe) VALUES ($1, $2, $3)',
										[FIXED_CODE, req.body.username , hash], function(err, result) {
											if(err) {
												console.log(err);
											} else {
												client.query('COMMIT');
											}
										});

							});


							/////// Registe uma escola /////////////
							bcrypt.hash(req.body.password, 10, function(err, hash) {

								JSON.stringify(client.query('SELECT nome FROM "escola" WHERE "nome_usuario"=$1', [req.body.username], function(err, result) {

									// if this school name was alredy taken, do not register
									if(result.rows[0]) {
										res.redirect('/registoEscola');
									}

									// this userName hasnt been taken already
									else {
											client.query('INSERT INTO escola (escola_cod, nome, email, nome_usuario, provincia, senha) VALUES ($1, $2, $3, $4, $5, $6)',
											[FIXED_CODE, req.body.firstName, req.body.email, req.body.username , req.body.provincia, hash], function(err, result) {
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


					/////////////////////////////////////////////////////////////////////*

					////////////////////////////////////////////////////////////////////*/
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

					/////////////////////////////////////////////////////////////////////*

					////////////////////////////////////////////////////////////////////*/
					app.get('/account', function (req, res, next) {

						if (req.isAuthenticated()) {
							res.render('account', {usuarioNome : req.session.passport.user[0].userName});

							//////////////////////////////////////////////////////////////////
							// Gather information on the general statistical data of the school
							//////////////////////////////////////////////////////////////////
							try {

								// select all male students from this particular school
								client.query('SELECT estudantecod FROM estudante WHERE genero=$1',['M'],function(err,results){

									if (err) {
										console.log(err);
									} else {

										// this variable must be an array of data so that
										// it becomes possible to insert different values into them

										generalData = [];
										// push an object that describes the number of male students
										generalData.push({'NumeroAlunos' : results.rows.length});

									}
								});

								// select all male students from this particular school
								client.query('SELECT estudantecod FROM estudante WHERE genero=$1',['F'],function(err,results){

									if (err) {
										console.log(err);
									} else {

										// this variable must be an array of data so that
										// it becomes possible to insert different values into them

										// push an object that describes the number of male students
										generalData.push({'NumeroAlunas' : results.rows.length});
									}
								});

								// selects all the ages from all students for the age avarege calculus
								client.query('SELECT nascimento FROM estudante',function(err,results){

									if (err) {
										console.log(err);
									} else {

										// this variable must be an array of data so that
										// it becomes possible to insert different values into them

										// push an object that describes the number of male students
										generalData.push({'idadesStudents' : results.rows});
									}
								});

								// select all the teachers at this school
								client.query('SELECT professor_cod FROM professor',function(err,results){

									if (err) {
										console.log(err);
									} else {

										// this variable must be an array of data so that
										// it becomes possible to insert different values into them

										// push an object that describes the number of male students
										generalData.push({'professoresNumber' : results.rows.length});
									}
								});


							} catch (ex) {
								throw (ex);
							}

							profilePhoto = req.session.passport.user[0].foto;

						} else {
							res.redirect('login');
						}

					});

					//////////////////////////////////////////////////////////////////////*

					/////////////////////////////////////////////////////////////////////*/
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
								res.render('templates', {TemplatePath : "template", usuarioNome : req.session.passport.user[0].userName});
						}

						// authentication is not ok, then redirect to login
						else {
								res.redirect('login');
						}
					});

					/////////////////////////////////////////////////////////////////////*

					////////////////////////////////////////////////////////////////////*/
					app.get('/ensinoPrimario', function(req, res){
						if (req.isAuthenticated()) res.render('tecnico', {'from' : 'ensinoPrimario', usuarioNome : req.session.passport.user[0].userName});
						else res.redirect('login');
					});


					/////////////////////////////////////////////////////////////////////*

					////////////////////////////////////////////////////////////////////*/
					app.get('/primeiroCiclo', function(req, res){
						if (req.isAuthenticated()) res.render('tecnico', {'from' : 'primeiroCiclo', usuarioNome : req.session.passport.user[0].userName});
						else res.redirect('login');
					});

					///////////////////////////////////////////////////////////////////////////////////////////////////////////*
						// embedded routes (tecnico) //
					//////////////////////////////////////////////////////////////////////////////////////////////////////////*/
					app.get('/tecnico', function(req,res) {
						if (req.isAuthenticated()) res.render('tecnico', {'tecnico' : 'tecnico', usuarioNome : req.session.passport.user[0].userName});
						else res.redirect('login');
					});

					///////////////////////////////////////////////////////////////////////////////////////////////////////////*
						// registo de cursos //
					///////////////////////////////////////////////////////////////////////////////////////////////////////////*/
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

										console.log(req.body);


										client.query('INSERT INTO turma (nome_class, curso_nome, turma_id, escola_cod, data_criacao) VALUES ($1, $2, $3, $4, $5)',
											[req.body["classe"], req.body["curso"], turmaId, resu.rows[0]["escola_cod"], helpers.getDate() ], function(err,result){
											if (err) {
												console.log(err);
											} else {
												console.log(result.rows);
												client.query('COMMIT');

												if (typeof req.body[req.body["classe"]] == "object") {

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

												} else if (typeof req.body[req.body["classe"]] == "string") {

													// salve as disciplinas para o curso e para a classe
													client.query('INSERT INTO disciplina_classe (disciplina_nome, curso_nome, nome_class) VALUES ($1, $2, $3)',
														[req.body[req.body["classe"]], req.body["curso"], req.body["classe"]],
														function(err,res) {
															if (err) console.log(err);
															else {
																console.log("sucess");
															}
														}
													)


												}


												res.redirect('/turmas');
											}
										});

									}
								});


							} catch(ex) {}

						} else {
							res.redirect('login');
						}

					});

					///////////////////////////////////////////////////////////////////////////////*
						// embedded routes (puniv) //
					//////////////////////////////////////////////////////////////////////////////*/
					app.get('/puniv', function(req,res) {
						if (req.isAuthenticated()) res.render('puniv');
						else res.redirect('login');
					});

					///////////////////////////////////////////////////////////////////////////////*
						// embedded routes (custom) //
					/////////////////////////////////////////////////////////////////////////////*/
					app.get('/personalizado', function(req,res) {
						if (req.isAuthenticated()) res.render('personalizado');
						else res.redirect('login');
					});

					////////////////////////////////////////////////////////////////////////////////*
					 	///route for handling the list of saved courses///
					//////////////////////////////////////////////////////////////////////////////*/
					app.get('/turmas', function(req, res) {
						if (req.isAuthenticated()) {
							res.render('turmas', {'searchCursos' : 'searchCursos', usuarioNome : req.session.passport.user[0].userName});

							try {

								// select every course from this schools
								client.query('SELECT cod_usuario FROM "usuario" WHERE "nome_usuario"=$1',
									[req.session.passport.user[0].userName],
									function(err,results){
										if (err) {
											console.log(err);
										} else {

											// retrieve info about classes for this schoool
											client.query('SELECT * FROM "turma" WHERE "escola_cod"=$1',
												[results.rows[0]["cod_usuario"]], function(err,res){
													if (err) {

													} else {

														if (res.rows.length > 0) {
																classesInfo = res.rows;
																console.log("for schools");
														}

														//  devolve as turmas para um professor em particular
														if (res.rows.length == 0) {

															client.query('SELECT turma_id  FROM "professor" WHERE "professor_cod"=$1', [results.rows[0]["cod_usuario"]], function(err, turmaID){
																if (err) {
																	console.log("provavelmente consultando de uma escola");
																} else {

																	client.query('SELECT * FROM "turma" WHERE "turma_id"=$1', [turmaID.rows[0]['turma_id']], function(err,allData){

																		if (err) {

																		} else {
																			classesInfo = allData.rows;
																		}

																	})


																}

															});

														}


													}

												}
											);

										}
									}
								);


							} catch (ex) {
								throw (ex);
							}



						}
						else res.redirect('login');
					});

					//////////////////////////////////////////////////////////////////////////////////////*

					/////////////////////////////////////////////////////////////////////////////////////*/
					app.get('/logout', function(req, res){
						req.logout();
						//req.flash('success', "Logged out. See you soon!");
						res.redirect('/login');
					});

					//////////////////////////////////////////////////////////////////////////////////////*

					/////////////////////////////////////////////////////////////////////////////////////*/
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

					///////////////////////////////////////////////////////////////////////////////////////*

					/////////////////////////////////////////////////////////////////////////////////////*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_estudantes)$/, function(req, res) {

						var thisClass = req["url"].split("_")[1];

						if (req.isAuthenticated()) {

							// antes de reproduzir o view, certifique-se de qual tipo
							// de usuário estamos a falar
							try {

								client.query('SELECT escola_cod FROM escola WHERE nome_usuario = $1',[req.session.passport.user[0].userName],function(err,result){

									if (err) {
										console.log(err);
									} else {

										// este usuário trata-se de um professor
										// pois não pude ser encontrado na tabele escola
										if (result.rows.length == 0) {
											res.render('estudantes' , {from: 'students', usuarioNome : req.session.passport.user[0].userName});
										} else {
											res.render('estudantes' , {from: 'ADMIN', usuarioNome : req.session.passport.user[0].userName});
										}

									}

								});

							} catch(ex) {
								throw(ex);
							}

							try {

								// devolva somente as faltas da disciplina sobre o professor
								// logado
								client.query('SELECT disciplina_nome FROM professor WHERE professor_cod=$1',
									[req.session.passport.user[0].userCod],function(error, results){

										if (error) {
											console.log(error);
										} else {
											//dadosFaltas = results.rows;

											if (results.rows.length == 0) {

												// retorne o número de faltas de todas as disciplinas
												// sem filtro (tratando-se de uma escola)
												client.query('SELECT turma_id, estudantecod, disciplina_nome, ausencia, material, disciplinar, participacao FROM falta', function(err, result){

													if (err) {
														console.log(err);
													} else {
														dadosFaltas = [];
														dadosFaltas.push(result.rows);
													}

												});

												// retorne os dados de notas da escola toda
												client.query('SELECT mac, pp1, comportamento, turma_cod, disciplina_nome, estudantecod, trimestre FROM minipauta', function(err, result){
													if (err) {
														console.log(err);
													} else {
														dadosFaltas.push(result.rows);
													}

												});


											} else {

												// retorne o número de faltas de todas as disciplinas
												// sem filtro (tratando-se de uma escola)
												client.query('SELECT turma_id, estudantecod, ausencia, material, disciplinar, participacao FROM falta WHERE disciplina_nome=$1', [results.rows[0]["disciplina_nome"]], function(err, result){

													if (err) {
														console.log(err);
													} else {
														dadosFaltas = [];
														dadosFaltas.push(result.rows);
														//dadosFaltas.push(results.rows[0]);
														dadosFaltas.push(true);
													}

												});

											}

										}

									}
								);

							} catch (ex) {
								throw(ex);
							}

							try {

								// consulta dados sobre os estudantes desta turma e envia-os de volta ao cliente
								client.query('SELECT "nome", "foto", "estudantecod", "genero","nascimento", "turma_id" FROM estudante ORDER BY numero ASC', function(err,result) {

										if (err) {
											console.log(err);
										} else {
											allStudents = result.rows;
										}

								});

							} catch (ex) {
								throw(ex);
							}

						} else {
							res.redirect('login');
						}


					});

					///////////////////////////////////////////////////////////////////////////////////////*

					//////////////////////////////////////////////////////////////////////////////////////*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_livrodeponto)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('livroDePonto', {from: 'livroPonto', breadcrumb : 'true', usuarioNome : req.session.passport.user[0].userName});

							var turmaCod = req["url"].split("_")[1];

							try {

								client.query('SELECT disciplina_nome FROM professor WHERE professor_cod = $1',[req.session.passport.user[0].userCod],function(error, resp){

									if (error) {
										console.log(error);
									} else {

										// o usuário actual não é um profesor mas uma escola
										if (resp.rows.length == 0) {

											client.query('SELECT nome_class, curso_nome FROM turma WHERE turma_id=$1', [turmaCod], function(err,resp) {

												if (err) {
													console.log(err);
												} else {

													client.query('SELECT disciplina_nome FROM disciplina_classe WHERE curso_nome=$1 AND nome_class=$2', [ resp.rows[0]["curso_nome"], resp.rows[0]["nome_class"] ], function(erro,resposta){

														if (erro) {
															console.log(erro);
														} else {
															livroDPonto = resposta.rows;
														}

													});

												}

											});

										} else {

											livroDPonto = [resp.rows];
											livroDPonto.push();
											livroDPonto.push(true);

										}

									}

								});

								//livroDPonto

							} catch (ex) {
								throw(ex);
							}

						} else {
							res.redirect('login');
						}

					});

					/*////////////////////////////////////////////////////////////////////////////////////
						This route receives the data from the form and puts the data in the  DATABASE
					*////////////////////////////////////////////////////////////////////////////////////
					app.post(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_livrodeponto)$/, function(req,res){

						var thisClass = req["url"].split("_")[1];

						try {

							console.log(req.body);

							for (let cadaEstudante in req.body) {
								if (cadaEstudante == 'disciplina') {
									continue;
								} else {

									if (req.body["disciplina"] == '') {
										console.log("nenhuma disciplina selecionada");
									} else {

										// esta disciplina não tem marcada ainda qualquer falta, marque agora.
										client.query('INSERT INTO falta (falta_cod, estudantecod, turma_id, disciplina_nome, data, ausencia, material, disciplinar, participacao) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
											[uuidv4(), cadaEstudante, thisClass, req.body["disciplina"], helpers.getDate(), req.body[cadaEstudante][0], req.body[cadaEstudante][1], req.body[cadaEstudante][2],req.body[cadaEstudante][3] ],function(err,result){

												if (err) {
													console.log(err);
												} else {
													console.log("falta marcada");
												}

											}
										)

									}

								}
							}

						}

						catch (ex) {

						}

						res.redirect("/turma_"+req["url"].split("_")[1]+"_estudantes");


					});

					///////////////////////////////////////////////////////////////////////////////////////*

					//////////////////////////////////////////////////////////////////////////////////////*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_minipautas)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('horario', {from: 'horario', breadcrumb : 'true', usuarioNome : req.session.passport.user[0].userName});

							var turmaCod = req["url"].split("_")[1];

							try {

								//////////////////////													/////////////////////////
								client.query('SELECT disciplina_nome FROM professor WHERE professor_cod = $1',[req.session.passport.user[0].userCod],function(error, resp){

									if (error) {
										console.log(error);
									} else {

										// o usuário actual não é um profesor mas uma escola
										if (resp.rows.length == 0) {

											client.query('SELECT nome_class, curso_nome FROM turma WHERE turma_id=$1', [turmaCod], function(err,resp) {

												if (err) {
													console.log(err);
												} else {

													client.query('SELECT disciplina_nome FROM disciplina_classe WHERE curso_nome=$1 AND nome_class=$2', [ resp.rows[0]["curso_nome"], resp.rows[0]["nome_class"] ], function(erro,resposta){

														if (erro) {
															console.log(erro);
														} else {
															livroDPonto = resposta.rows;
														}

													});

												}

											});

										} else {

											livroDPonto = [resp.rows];
											livroDPonto.push();
											livroDPonto.push(true);

										}

									}

								});


								/////////////////////////////								//////////////////////////////
								// consulta dados sobre os estudantes desta turma e envia-os de volta ao cliente
								client.query('SELECT "nome", "foto", "estudantecod", "genero","nascimento", "turma_id" FROM estudante', function(err,result) {

										if (err) {
											console.log(err);
										} else {
											allStudents = result.rows;
											client.query('COMMIT');
										}

								});



							} catch (ex) {
								throw(ex);
							}

						} else {
							res.redirect('login');
						}


					});


					///////////////////////////////////////////////////////////////////////////////////////*

					//////////////////////////////////////////////////////////////////////////////////////*/
					app.post(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_minipautas)$/, function(req, res) {
						var thisClass = req["url"].split("_")[1];

						try {

							var shouldInsert = true;

							//////////////////////////////////////////////////////////////////////
							/// Consute se a minipauta para esta disciplina e turma esta vazia ///
							/////////////////////////////////////////////////////////////////////
							client.query('SELECT * FROM minipauta WHERE turma_cod = $1', [thisClass], function(err, resp){
								if (err) {
									console.log(err);
								} else {
									if (resp.rows.length > 0) shouldInsert = false;
								}
							});

							if (shouldInsert) {

								/////////////////////////////////////////////////////////////////////////////////
								///// Itera sobre os atributos deste objecto e insira os estudantes ////////////
								for (let attr in req.body) {

									if (attr == 'disciplina') {
										continue;
									} else {

										////////////////////////////////////////////////////////////////
										/// Insere dados sobre a minipauta desta turma em particular ///
										client.query('INSERT INTO minipauta (estudantecod, comportamento, "mac", "pp1", "pp2","ct", trimestre, disciplina_nome, turma_cod) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
											[attr, req.body[attr][0], Number(req.body[attr][1]), Number(req.body[attr][2]),Number(req.body[attr][3]), (Number(req.body[attr][2]) + Number(req.body[attr][3])) / 2, 'Iº', req.body['disciplina'], thisClass], function(err, resp) {

												if (err) {
													console.log(err);
												} else {
													console.log("minipauta enviada");
													client.query('COMMIT');
												}

											}
										)


									}
								}



							} else {
								console.log("oops, it doesn't seem empty");
							}

						} catch (ex) {
							throw(ex);
						}

						res.redirect("/turma_"+req["url"].split("_")[1]+"_estudantes");
					});


					//////////////////////////////////////////////////////////////////////////////////*

					/////////////////////////////////////////////////////////////////////////////////*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_estatistica)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('estudantes', {from: '', usuarioNome : req.session.passport.user[0].userName});
						} else {
							res.redirect('login');
						}

					});

					//////////////////////////////////////////////////////////////////////////////////////*

					/////////////////////////////////////////////////////////////////////////////////////*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_relatorio)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('estudantes', {from: '', usuarioNome : req.session.passport.user[0].userName});
						} else {
							res.redirect('login');
						}

					});

					//////////////////////////////////////////////////////////////////////////////////////*

					//////////////////////////////////////////////////////////////////////////////////////*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_novoEstudante)$/, function(req, res) {

						var thisClass = req["url"].split("_")[0];


						if (req.isAuthenticated()) {
							res.render('novoEstudante' , {from: 'NovoEstudents', usuarioNome : req.session.passport.user[0].userName});

							// consulta dados sobre os estudantes desta turma e envia-os de volta ao cliente
							try {

								client.query('SELECT "nome","foto","genero","nascimento", "turma_id", "estudantecod" FROM estudante', function(err,result) {

										if (err) {
											console.log(err);
										} else {
											//allStudents = result.rows;
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


					///////////////////////////////////////////////////////////////////////////////////////////////////////////////////*

					//////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
					app.post(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_novoEstudante)$/, upload.single('imageupload'), function(req, res) {

						try {

							// adiciona um estudante ao banco de dadosFaltas
							client.query('INSERT INTO estudante (estudantecod, nome, foto, turma_id, genero, nascimento) VALUES ($1, $2, $3, $4, $5, $6)',
								[uuidv4(), req.body.name, req.file.filename, req["url"].split("_")[1], "M", "21"], function(err,result){

									if (err) {
											console.log(err);
									} else {

											// retorna para a página de estudantes da turma
											res.redirect("/turma_"+req["url"].split("_")[1]+"_estudantes");
									}


								}
							);

						} catch (ex) {
						}

					});

					//////////////////////////////////////////////////////////////////////////////////////*

					//////////////////////////////////////////////////////////////////////////////////////*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)_(editarEstudante)_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('novoEstudante' , {from: 'AlterarEstudante', usuarioNome : req.session.passport.user[0].userName});
						} else {
							res.redirect('login');
						}

					});


					///////////////////////////////////////////////////////////////////////*

					///////////////////////////////////////////////////////////////////////*/
					app.post(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)_(editarEstudante)_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)$/, upload.single('imageupload'), function(req, res) {

						console.log(req["url"].split("_")[3]);

						try {

							// update os dados do estudante em questão
							client.query('UPDATE estudante SET "foto"=$1, "turma_id"=$2 WHERE estudantecod=$3', [req.file.filename, req["url"].split("_")[3], req["url"].split("_")[1]], function(err,results){

								if (err) {
									console.log(err);
								} else {
									console.log(req.file.filename);
									console.log(results.rows)
									client.query('COMMIT');
									res.redirect("/turma_"+req["url"].split("_")[3]+"_estudantes");
								}

							});

						} catch (ex) {
						}

					});

					/////////////////////////////////////////////////////////////////////*

					////////////////////////////////////////////////////////////////////*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_uploadExcel)$/, function (req, res) {

							if (req.isAuthenticated()) {
								res.render('excelUpload' , {from: 'excelUpload', breadcrumb : 'true', usuarioNome : req.session.passport.user[0].userName});
							} else {
								res.redirect('login');
							}

					});

					/////////////////////////////////////////////////////////////////////*

					////////////////////////////////////////////////////////////////////*/
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

												client.query('INSERT INTO estudante (estudantecod, nome, foto, turma_id, genero, nascimento, numero) VALUES ($1, $2, $3, $4, $5, $6, $7)',
													[uuidv4(), data['nome'], data['foto'], req["url"].split("_")[1], data['genero'], data['nascimento'], 0 ], function(err,res){

														if (err) {
															console.log(err);
														} else {
															client.query('COMMIT');
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

					////////////////////////////////////////////////////////////////////////////////////////////*

					///////////////////////////////////////////////////////////////////////////////////////////*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)(_estudanteTransferido)$/, function(req, res) {

						if (req.isAuthenticated()) {
							res.render('estudantes', {from: '', usuarioNome : req.session.passport.user[0].userName});
						} else {
							res.redirect('login');
						}

					});


					////////////////////////////////////////////////////////////////////////////////////////////*

					///////////////////////////////////////////////////////////////////////////////////////////*/
					app.get(/\/turma_(\w+-)(\w+-)(\w+-)(\w+-)(\w+)/, function(req, res){

						if (req.isAuthenticated()) {

								res.render('turma', {from : 'specificClass', usuarioNome : req.session.passport.user[0].userName});

								var turmaCod = req["url"].split("_")[1];

								// query o nome das disciplinas
								client.query('SELECT "curso_nome", "nome_class" FROM turma WHERE turma_id = $1',
									[turmaCod], function(err,result) {
										if (err) {
											console.log(err);
										} else {

											// devolva somente a disciplina em que um determinado
											// professor estiver envolvido
											client.query('SELECT "disciplina_nome" FROM professor	WHERE professor_cod=$1', [req.session.passport.user[0].userCod], function(err,resu){
												if (err) {
													console.log(err);
 												} else {
													//console.log("something bad happening");
													//console.log(resu.rows);

													if (resu.rows.length == 0) {

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

													} else {

														turmaInfo = [];
														turmaInfo.push(resu.rows);
														turmaInfo.push(true);

													}


												}


											});
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

					////////////////////////////////////////////////////////////////////////////////////////////*

					///////////////////////////////////////////////////////////////////////////////////////////*/
					app.post(/\/turma_\w+/, upload.single('imageupload') , function(req, res){

						try {

							const FIXED_CODE = uuidv4();

							/////////// Registe um usuário escola ///////////////
							bcrypt.hash(req.body.password, 10, function(err, hash) {

								// this userName hasnt been taken already
								client.query('INSERT INTO usuario (cod_usuario, nome_usuario, palavra_passe) VALUES ($1, $2, $3)',
									[FIXED_CODE, req.body.username , hash], function(err, result) {
										if(err) {
											console.log(err);
										} else {
											client.query('COMMIT');
										}
									});

							});

							bcrypt.hash(req.body.password, 10, function(err, hash) {

									// adiciona um professor ao banco de dados
									client.query('INSERT INTO professor (professor_cod, nome, email, nome_usuario, palavrapasse, escola_cod, foto, disciplina_nome, turma_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
										[FIXED_CODE, req.body.name, req.body.email, req.body.username , hash, classesInfo[0]["escola_cod"], req.file.filename,req.body.subjectName, req.body.classCod], function(err,result){

											if (err) {
												console.log(err);
											} else {
												console.log("coordenador added");
												// regista o professor de uma disciplinas
											}
										}
									);

							});

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
						socket.emit('dadosFaltas', dadosFaltas);
						socket.emit('livroDPonto', livroDPonto);
						socket.emit('generalData', generalData);
					});

		}
}

/////////////////////////////////////////////////////////////////////////////////*
	//this strategy is going to be used for login authetication post only//
////////////////////////////////////////////////////////////////////////////////*/
passport.use('localOne', new  LocalStrategy({passReqToCallback : true}, (req, username,password, done) => {

	loginAttempt();

	function loginAttempt() {

		 client.connect();

			try {

				client.query('BEGIN')

				var currentAccountsData = JSON.stringify(client.query('SELECT * FROM "usuario" WHERE "nome_usuario"=$1', [username], function(err, result) {

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

					    bcrypt.compare(req.body.password, result.rows[0]["palavra_passe"], function(err, check) {
					       if (err) {
									 console.log('Error while checking password');
									 return done();
								 } else if (check){
									 	return done(null, [{userName: result.rows[0]["nome_usuario"], userCod : result.rows[0]["cod_usuario"]}]);
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
