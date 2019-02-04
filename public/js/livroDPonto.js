/*

  The logic behind estudantes.js
  author : Luís Valdenêncio
  Date : 20/12/2018

*/

const windows = this;
const linkURL = windows.location.pathname.split("_")[1];

var actualLinks = document.querySelectorAll(".option-card-link");

var theSubjectName;

// seta os links das opcções de introdução de estudantes
for (let counter = 0; counter < actualLinks.length; counter++) {

  if (counter == 0)
    actualLinks[counter].href = "/turma_"+linkURL+"_novoEstudante";

  if (counter == 1)
    actualLinks[counter].href = "/turma_"+linkURL+"_uploadExcel";

  if (counter == 2)
    actualLinks[counter].href = "/turma_"+linkURL+"_estudanteTransferido";

}

socket.on('allStudents', function(data){

  const infoDeClasse = document.querySelectorAll(".h4");

  var estaTurma = data.filter((aluno)=>{
    return aluno["turma_id"] == linkURL;
  });

  if (estaTurma.length) {

    // número de estudantes registados para esta turma
    infoDeClasse[2].innerText = (!estaTurma.length) ? 0 : estaTurma.length;

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
              "attr":{"class":"text-center"},
              "children":{

                tag:"label","attr":{"class":"control control--checkbox"},"children":[{"tag":"input","attr":{"type":"checkbox", "class" : "faltaAusencia", "data-index" : counter+1}},{"tag":"div","attr":{"class":"control__indicator"}}]

              }
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                tag:"label","attr":{"class":"control control--checkbox"},"children":[{"tag":"input","attr":{"type":"checkbox", "class" : "faltaMaterial", "data-index" : counter+1}},{"tag":"div","attr":{"class":"control__indicator"}}]
              }
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                tag:"label","attr":{"class":"control control--checkbox"},"children":[{"tag":"input","attr":{"type":"checkbox", "class" : "faltaDisciplinar", "data-index" : counter+1}},{"tag":"div","attr":{"class":"control__indicator"}}]
              }
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                tag:"label","attr":{"class":"control control--checkbox"},"children":[{"tag":"input","attr":{"type":"checkbox", "class" : "participacao", "data-index" : counter+1}},{"tag":"div","attr":{"class":"control__indicator"}}]
              }
            }
            ]

      }

    ));

  }

  console.log(data);
});

socket.on('classesInfo', function(data){


  const infoDeClasse = document.querySelectorAll(".h4");

  var thisClass = data.filter((each)=>{
      return each["turma_id"] == windows.location.pathname.split("_")[1]
  });

  // ajustar o nome da classes
  infoDeClasse[0].innerText = thisClass[0]["nome_class"];
  infoDeClasse[1].innerText = thisClass[0]["curso_nome"];

  // set the link for the estudante route
  document.querySelector(".breadcrumb").querySelectorAll("li")[0].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"];
  document.querySelector(".breadcrumb").querySelectorAll("li")[1].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_estudantes";
  document.querySelector(".breadcrumb").querySelectorAll("li")[2].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_livrodeponto";
  document.querySelector(".breadcrumb").querySelectorAll("li")[3].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_horario";
  document.querySelector(".breadcrumb").querySelectorAll("li")[4].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_estatistica";
  document.querySelector(".breadcrumb").querySelectorAll("li")[5].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_relatorio";

});


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

/*///////////////////////////////////////////////////////////////////////
  Crie o form de faltas com base em alguns dados dos estudantes
*////////////////////////////////////////////////////////////////////////
socket.on('allStudents', function(data) {

  var estaTurma = data.filter((aluno)=>{
    return aluno["turma_id"] == linkURL;
  });

  console.log(estaTurma);

  // crie o form de faltas
  var FORM_FALTAS = objectToHTML(
    {
      "tag" : "form",
      "attr" : {
        "method" : "post",
        "action" : `/turma_${linkURL}_livrodeponto`,
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
  document.querySelector("body").onload = function() {

    // find among the first 12 inputs who is the one marked
    const INPUTS = document.querySelectorAll(".subjectInputs");

    for (let counter = 0; counter < INPUTS.length; counter++) {
      INPUTS[counter].onclick = function(event) {
        onInputClick(event);
      }
    }

  }

  function onInputClick(event) {
    INPUT_SUBJECT.setAttribute('value', document.querySelectorAll("label")[Number(event.currentTarget.id.slice(2)) - 1].innerText);
  }

  // adicione o input de disciplina ao formFaults
  FORM_FALTAS.appendChild(INPUT_SUBJECT);

  // itera sobre os estudantes desta turma e para cada um crie quatro inputs
  // um para "ausencia", "material", "indisciplina" e "participação"
  for (let student = 0; student < estaTurma.length; student++) {

    // para cada estudante 4 inputs
    for (let inputs = 0; inputs < 1; inputs++) {

      // faltas por ausencias
      var STUDENT_INPUT_ONE = objectToHTML({
        "tag" : "input",
        "attr" : {
          "type" : "text",
          "name" : `${estaTurma[student]["estudantecod"]}`,
          "class" : "falta-ausencia",
          "value" : 0
        }
      });

      // faltas por Material
      var STUDENT_INPUT_TWO = objectToHTML({
        "tag" : "input",
        "attr" : {
          "type" : "text",
          "name" : `${estaTurma[student]["estudantecod"]}`,
          "class" : "falta-material",
          "value" : 0
        }
      });

      // faltas por disciplinar
      var STUDENT_INPUT_THREE = objectToHTML({
        "tag" : "input",
        "attr" : {
          "type" : "text",
          "class" : "falta-disciplinar",
          "name" : `${estaTurma[student]["estudantecod"]}`,
          "value" : 0
        }
      });

      // participação
      var STUDENT_INPUT_FOUR = objectToHTML({
        "tag" : "input",
        "attr" : {
          "type" : "text",
          "class" : "participacao-two",
          "name" : `${estaTurma[student]["estudantecod"]}`,
          "value" : 0
        }
      });

      // adiciona os quatro inputs ao form de Faltas
      FORM_FALTAS.appendChild(STUDENT_INPUT_ONE);
      FORM_FALTAS.appendChild(STUDENT_INPUT_TWO);
      FORM_FALTAS.appendChild(STUDENT_INPUT_THREE);
      FORM_FALTAS.appendChild(STUDENT_INPUT_FOUR);
    }

  }



  // os diferentes radio checboxes de Faltas
  var FALTAS_AUSENCIA = document.querySelectorAll(".faltaAusencia");
  var FALTAS_MATERIAL = document.querySelectorAll(".faltaMaterial");
  var FALTAS_DISCIPLINAR = document.querySelectorAll(".faltaDisciplinar");
  var PARTICIPACAO = document.querySelectorAll(".participacao");

  // Regista os eventos para cada radio button do formulário de Faltas
  for (let counter = 0; counter < FALTAS_AUSENCIA.length; counter++) {

      FALTAS_AUSENCIA[counter].onclick = function(event) {
        faltasAusenciaInput(event);
      };

      FALTAS_MATERIAL[counter].onclick = function(event) {
        faltasMaterialInput(event);
      };

      FALTAS_DISCIPLINAR[counter].onclick = function(event) {
        faltasDisciplinarInput(event);
      };

      PARTICIPACAO[counter].onclick = function(event) {
        participacaoInput(event);
      };

  }

  // funções que mudam o valor dos inputs com base nos eventos
  function faltasAusenciaInput(event) {

    if (event.currentTarget.checked == true) {
      document.querySelectorAll(".falta-ausencia")[Number(event.currentTarget.getAttribute('data-index')) - 1].setAttribute("value", 1);
    } else {
      document.querySelectorAll(".falta-ausencia")[Number(event.currentTarget.getAttribute('data-index')) - 1].setAttribute("value", 0);
    }
  }

  // funções que mudam o valor dos inputs com base nos eventos
  function faltasMaterialInput(event) {

    if (event.currentTarget.checked == true) {
      document.querySelectorAll(".falta-material")[Number(event.currentTarget.getAttribute('data-index')) - 1].setAttribute("value", 1);
    } else {
      document.querySelectorAll(".falta-material")[Number(event.currentTarget.getAttribute('data-index')) - 1].setAttribute("value", 0);
    }
  }

  // funções que mudam o valor dos inputs com base nos eventos
  function faltasDisciplinarInput(event) {

    if (event.currentTarget.checked == true) {
      document.querySelectorAll(".falta-disciplinar")[Number(event.currentTarget.getAttribute('data-index')) - 1].setAttribute("value", 1);
    } else {
      document.querySelectorAll(".falta-disciplinar")[Number(event.currentTarget.getAttribute('data-index')) - 1].setAttribute("value", 0);
    }
  }

  // funções que mudam o valor dos inputs com base nos eventos
  function participacaoInput(event) {

    if (event.currentTarget.checked == true) {
      document.querySelectorAll(".participacao-two")[Number(event.currentTarget.getAttribute('data-index')) - 1].setAttribute("value", 1);
    } else {
      document.querySelectorAll(".participacao-two")[Number(event.currentTarget.getAttribute('data-index')) - 1].setAttribute("value", 0);
    }
  }

  // sumbeter o form das faltas
  document.querySelector(".marcar").onclick = function() {
    document.querySelector("form").submit();
  }

});
