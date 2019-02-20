const windows = this;
const linkURL = windows.location.pathname.split("_")[1];


socket.on('livroDPonto', function(data){

  console.log(data);

  if (data.length == 2 && data[1] == true) {

    for (let counter = 0; counter < data[0].length; counter++) {

      document.querySelector(".subject-list-container .center-on-page").appendChild(objectToHTML({

        "tag" : "div",
        "attr" : {
          "class" : "col-lg-3"
        },
        "children" : [

          {

            "tag" : "input",
            "attr" : {
              "type" : "radio",
              "class" : "subjectInputs",
              "name" : "rb",
              "id" : `rb${counter+1}`
            }

          },

          {

            "tag" : "label",
            "content" : data[0][counter]["disciplina_nome"],
            "class" : "subjectLabels",
            "attr" : {
              "for" : `rb${counter+1}`
            }

          }

        ]

      }));

    }

  } else {

    for (let counter = 0; counter < data.length; counter++) {

      document.querySelector(".subject-list-container .center-on-page").appendChild(objectToHTML({

        "tag" : "div",
        "attr" : {
          "class" : "col-lg-3"
        },
        "children" : [

          {

            "tag" : "input",
            "attr" : {
              "type" : "radio",
              "class" : "subjectInputs",
              "name" : "rb",
              "id" : `rb${counter+1}`
            }

          },

          {

            "tag" : "label",
            "content" : data[counter]["disciplina_nome"],
            "class" : "subjectLabels",
            "attr" : {
              "for" : `rb${counter+1}`
            }

          }

        ]

      }));

    }

  }

});

socket.on('allStudents', function(data){

  //const infoDeClasse = document.querySelectorAll(".h4");

  var estaTurma = data.filter((aluno)=>{
    return aluno["turma_id"] == linkURL;
  });

  if (estaTurma.length) {

    // número de estudantes registados para esta turma
    //infoDeClasse[2].innerText = (!estaTurma.length) ? 0 : estaTurma.length;

    // caso existam estudantes registados, elimine o Aviso
    //document.querySelector(".warning-row").remove();

  }

  // para cada estudante registado adicione uma alinha na tabela
  for (let counter = 0; counter < estaTurma.length; counter++) {

    document.querySelector(".table tbody").appendChild(objectToHTML(

      {

        tag:"tr",
        "attr": {"class":"theRow"},
        "children":[
          {
            "tag":"td",
            "attr":{"class":"text-center"},
            "children":{
              "tag":"div",
              "attr":{"class":"avatar"},
              "children":[
                {
                  "tag" : "a",
                  "attr" : {
                    "href" : `/turma_${estaTurma[counter].estudantecod}_editarEstudante_${linkURL}`
                  },
                  "children" : {
                    "tag":"img",
                    "attr":{"class":"img-avatar","src":`public/photo-storage/${estaTurma[counter].foto == 'indefinido' ? 'noPhoto.jpg' : estaTurma[counter].foto}`,"alt":"admin@bootstrapmaster.com"}
                  }
                },

                {
                  "tag":"span",
                  "attr":{"class":"avatar-status badge-success"}
                }
              ]}
            },
            {
              "tag":"td",
              "children":[
                {
                  "tag":"div",
                  "content":`${estaTurma[counter].nome}`
                },
                {
                  "tag":"div",
                  "attr":{"class":"small text-muted"},
                  "children":{
                    "tag":"span",
                    "content":"New"
                  }
                }
              ]
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                "tag":"strong",
                "content":`${counter+1}`
              }
            },
						{
							"tag":"td",
							"attr" : {
								"class":"text-center"
							},
							"children":
								{
									"tag":"select",
									"attr" : {
										"class" : "form-control comport_holder",
                    "data-index" : counter
									},
                  "children" : [

                    {
                      "tag" : "option",
                      "content" : "Mau"
                    },
                    {
                      "tag" : "option",
                      "content" : "Medíocre"
                    },
                    {
                      "tag" : "option",
                      "content" : "Suficiente"
                    },
                    {
                      "tag" : "option",
                      "content" : "Bom"
                    },
                    {
                      "tag" : "option",
                      "content" : "Muito bom"
                    }
                  ]
								}
						},
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                "tag":"input",
                "attr" : {
                  "type" : "text",
                  "name" : estaTurma[counter].estudantecod,
                  "class" : "grade-holder"
                }
              }
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                "tag":"input",
                "attr" : {
                  "type" : "text",
                  "name" : estaTurma[counter].estudantecod,
                  "class" : "grade-holder"
                }
              }
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                "tag":"input",
                "attr" : {
                  "type" : "text",
                  "name" : estaTurma[counter].estudantecod,
                  "class" : "grade-holder"
                }
              }
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                "tag":"input",
                "attr" : {
                  "type" : "text",
                  "name" : estaTurma[counter].estudantecod,
                  "class" : "grade-holder"
                }
              }
            }

            ]

      }

    ));

  }

});


/*///////////////////////////////////////////////////////////////////////
  Crie o form de faltas com base em alguns dados dos estudantes
*////////////////////////////////////////////////////////////////////////
socket.on('allStudents', function(data) {

  var estaTurma = data.filter((aluno)=>{
    return aluno["turma_id"] == linkURL;
  });

  // crie o form para as notas dos alunos
  var FORM_FALTAS = objectToHTML(
    {
      "tag" : "form",
      "attr" : {
        "method" : "post",
        "action" : `/turma_${linkURL}_minipautas`,
        "class" : "formFaults",
      }
    }
  );

  // adicione o form ao corpo do documento HTML
  document.querySelector("body .container-fluid").appendChild(FORM_FALTAS);

  // popular o form de faltas com dados de _estudantes
  var INPUT_SUBJECT = objectToHTML({

    "tag" : "input",
    "attr" : {
      "type" : "text",
      "name" : "disciplina",
      "value" : ""
    }

  });

  // dados sobre as disciplinas são carregados com alguma demora
  // porque o socket.io que os processa esta noutro arquivo, então
  // o event body.onload é usado para esperar pelos dados
  $(document).ready(function(){

    // find among the first x inputs who is the one marked
    const INPUTS = document.querySelectorAll(".subjectInputs");

    for (let counter = 0; counter < INPUTS.length; counter++) {
      INPUTS[counter].onclick = function(event) {
        onInputClick(event);
      }
    }


  })

  function onInputClick(event) {
    INPUT_SUBJECT.setAttribute('value', document.querySelectorAll("label")[Number(event.currentTarget.id.slice(2)) - 1].innerText);
  }

  // adicione o input de disciplina ao formFaults
  FORM_FALTAS.appendChild(INPUT_SUBJECT);

  // crie tantos inputs quanto o número de selects para mapeiarem o seu valor
  for (let cadaAluno = 0; cadaAluno < estaTurma.length; cadaAluno++) {

    // crie um input para cada select
    var INPUT_MAPPERS = objectToHTML({

      "tag" : "input",
      "attr" : {
        "type" : "text",
        "class" : "selectMapper",
        "name" : estaTurma[cadaAluno].estudantecod,
        "value" : "Mau"
      }

    });

    // insere no form cada input correspondendo a um select
    FORM_FALTAS.appendChild(INPUT_MAPPERS);
  }

  // guarde numa variavel a referencia de todos os selects desta tabela
  // no documento
  var ALL_SELECTS = document.querySelectorAll(".comport_holder");
  for (let counter = 0; counter < ALL_SELECTS.length; counter++) {
    ALL_SELECTS[counter].oninput = function(event) {
      // mapeia este valor para o correspondente inputmapper
      setInputMapper(event, ALL_SELECTS[counter].value)
    }
  }

  // crie tantos inputs quanto o número de inputs para mapeiarem o seu valor
  for (let cadaAluno = 0; cadaAluno < estaTurma.length; cadaAluno++) {

    for (let counter = 1; counter <= 4; counter++) {

      // crie um input para cada select
      var INPUT_GRADE = objectToHTML({

        "tag" : "input",
        "attr" : {
          "type" : "text",
          "class" : "actual-grade-holder",
          "name" : estaTurma[cadaAluno].estudantecod,
          "value" : ""
        }

      });

      // insere no form cada input correspondendo a um select
      FORM_FALTAS.appendChild(INPUT_GRADE);
    }

  }

  // registe um evento para cada grade-holder
  var ALL_GRADES = document.querySelectorAll(".grade-holder");
  for (let counter = 0; counter < ALL_GRADES.length; counter++){

    // seta o data-index deste elemento e depois registe o evento para ele
    ALL_GRADES[counter].setAttribute("data-index", counter);

    ALL_GRADES[counter].oninput = function(event) {
      setInputGrader(event, ALL_GRADES[counter].value);
    }
  }

  //////////////////////////////////////////////////////////////////////////////
  /// Esta função configura o valor de um select e o mapeia a de um input //////
  function setInputMapper(event, finalValue) {
    document.querySelector("form").querySelectorAll(".selectMapper")[event.srcElement.getAttribute("data-index")].setAttribute("value", finalValue);
  }

  //////////////////////////////////////////////////////////////////////////////
  /// Esta função configura o valor do input e faz o mapeamento           /////
  function setInputGrader(event, finalValue) {
    document.querySelector("form").querySelectorAll(".actual-grade-holder")[event.srcElement.getAttribute("data-index")].setAttribute("value", finalValue);
  }


  // sumbeter o form das faltas
  document.querySelector(".marcar").onclick = function() {
    document.querySelector("form").submit();
  }

});


socket.on('classesInfo', function(data){

  var thisClass = data.filter((each)=>{
      return each["turma_id"] == windows.location.pathname.split("_")[1]
  });

  // set the link for the estudante route
  document.querySelector(".breadcrumb").querySelectorAll("li")[0].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"];
  document.querySelector(".breadcrumb").querySelectorAll("li")[1].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_estudantes";
  document.querySelector(".breadcrumb").querySelectorAll("li")[2].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_livrodeponto";
  document.querySelector(".breadcrumb").querySelectorAll("li")[3].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_minipautas";
  document.querySelector(".breadcrumb").querySelectorAll("li")[4].querySelector("a").href = "#";
  document.querySelector(".breadcrumb").querySelectorAll("li")[5].querySelector("a").href = "#";

});

socket.on('allStudents', function(data){
	console.log(data);
});
