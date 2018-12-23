/*

  The logic behind estudantes.js
  author : Luís Valdenêncio
  Date : 20/12/2018

*/
/*
const UIelements = [

    {

      tag:"div","attr":{"class":"upperContainer"},"children":[{"tag":"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12"},"children":{"tag":"div","attr":{"class":"card"},"children":{"tag":"div","attr":{"class":"card-body upperCard","style":"background:#276552;border-radius:0%;color:#fff;border:solid #276552"},"children":{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-sm-12"},"children":{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-sm-3"},"children":{"tag":"div","attr":{"class":"callout callout-info"},"children":[{"tag":"small","content":"Classe","attr":{"class":"text-muted"}},{"tag":"br"},{"tag":"strong","content":"10ª","attr":{"class":"h4"}},{"tag":"div","attr":{"class":"chart-wrapper"},"children":{"tag":"canvas","attr":{"id":"sparkline-chart-1","width":"100","height":"30"}}}]}},{"tag":"div","attr":{"class":"col-sm-3"},"children":{"tag":"div","attr":{"class":"callout callout-danger"},"children":[{"tag":"small","content":"Curso","attr":{"class":"text-muted"}},{"tag":"br"},{"tag":"strong","content":"Informática","attr":{"class":"h4"}},{"tag":"div","attr":{"class":"chart-wrapper"},"children":{"tag":"canvas","attr":{"id":"sparkline-chart-2","width":"100","height":"30"}}}]}},{"tag":"div","attr":{"class":"col-sm-3"},"children":{"tag":"div","attr":{"class":"callout callout-danger"},"children":[{"tag":"small","content":"Total de estudantes","attr":{"class":"text-muted"}},{"tag":"br"},{"tag":"strong","content":"0","attr":{"class":"h4"}},{"tag":"div","attr":{"class":"chart-wrapper"},"children":{"tag":"canvas","attr":{"id":"sparkline-chart-2","width":"100","height":"30"}}}]}},{"tag":"div","attr":{"class":"col-sm-3"},"children":{"tag":"div","attr":{"class":"callout callout-danger"},"children":[{"tag":"small","content":"Média de idades","attr":{"class":"text-muted"}},{"tag":"br"},{"tag":"strong","content":"0.00","attr":{"class":"h4"}},{"tag":"div","attr":{"class":"chart-wrapper"},"children":{"tag":"canvas","attr":{"id":"sparkline-chart-2","width":"100","height":"30"}}}]}}]}}}}}}},{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"card option-card"},"children":{"tag":"div","attr":{"class":"card-body p-3 d-flex align-items-center"},"children":[{"tag":"i","attr":{"class":"icon-user-follow bg-primary p-3 font-2xl mr-3"}},{"tag":"div","children":{"tag":"div","attr":{"class":"text-value-sm text-primary"},"children":{"tag":"a","content":"Adicionar um Estudante novo","attr":{"href":"","class":"option-card-link"}}}}]}}},{"tag":"div","attr":{"class":"col-6 col-lg-4 option-card"},"children":{"tag":"div","attr":{"class":"card"},"children":{"tag":"div","attr":{"class":"card-body p-3 d-flex align-items-center"},"children":[{"tag":"i","attr":{"class":"fa fa-file-excel-o bg-info p-3 font-2xl mr-3"}},{"tag":"div","children":{"tag":"div","attr":{"class":"text-value-sm text-info"},"children":{"tag":"a","content":"Adicionar um ficheiro do Excel","attr":{"href":"","class":"option-card-link"}}}}]}}},{"tag":"div","attr":{"class":"col-6 col-lg-4 option-card"},"children":{"tag":"div","attr":{"class":"card"},"children":{"tag":"div","attr":{"class":"card-body p-3 d-flex align-items-center"},"children":[{"tag":"i","attr":{"class":"icon-arrow-left-circle bg-info p-3 font-2xl mr-3"}},{"tag":"div","children":{"tag":"div","attr":{"class":"text-value-sm text-info"},"children":{"tag":"a","content":"Adicionar um Estudante transferido","attr":{"href":"","class":"option-card-link"}}}}]}}}]},{"tag":"div","attr":{"class":"row warning-row"},"children":{"tag":"div","attr":{"class":"col-md-12 col-lg-12"},"children":{"tag":"div","attr":{"class":"alert alert-warning"},"children":[{"tag":"h4","children":[{"tag":"i","attr":{"class":"fa fa-warning"}},{"tag":"span","content":"\"Aviso!\""}]},{"tag":"h6","content":"Esta turma não tem estudantes registados. Clique em adicionar estudante novo para gravar um estudante ou no ícone do excel para adicionar vários estudantes atravéz de uma folha de cálculo do Excel ou ainda em adicionar estudante transferido para inserir um estudante de uma outra escola."}]}}}]},{"tag":"div","attr":{"class":"container"},"children":{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12"},"children":{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12 cardHolder"}}}}}}]

    }

];
*/
const windows = this;
const linkURL = windows.location.pathname.split("_")[1];
/*
document.querySelector(".container-fluid").appendChild(objectToHTML(
  UIelements[0]
));
*/

var actualLinks = document.querySelectorAll(".option-card-link");

// seta os links das opcções de introdução de estudantes
for (let counter = 0; counter < actualLinks.length; counter++) {

  if (counter == 0)
    actualLinks[counter].href = "/turma_"+linkURL+"_novoEstudante";

  if (counter == 1)
    actualLinks[counter].href = "/turma_"+linkURL+"_ficheiroExcel";

  if (counter == 2)
    actualLinks[counter].href = "/turma_"+linkURL+"_estudanteTransferido";
}
/*
// coloca os elementos visiveis dentro de bg-container-contact100 para efeitos do modal
document.querySelector("body").prepend(objectToHTML({
    tag : "div",
    attr : {
        class : "bg-container-contact100 app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show"
    }
}));

// coloca todos os primeiros sete elementos dentro de bg-container-contact100
for (let counter = 0; counter < 4; counter++) {
    document.querySelector("body").children[0].appendChild(document.querySelector("body").children[1]);
}
*/

document.querySelector(".container-fluid").appendChild(objectToHTML(

  {

    tag:"div","attr":{"class":"container-contact100"},"children":{"tag":"div","attr":{"class":"wrap-contact100"},"children":[{"tag":"div","attr":{"class":"contact100-form-title","style":"background-image: url(https://defendernetwork.com/wp-content/uploads/2017/07/GroupOfStudents-e1359494542702.jpg);"},"children":{"tag":"span","content":"REGISTE UM ESTUDANTE"}},{"tag":"form","attr":{"class":"contact100-form validate-form","action":"/","method":"post","enctype":"multipart/form-data"},"children":[{"tag":"div","attr":{"id":"profile","class":""},"children":{"tag":"label","content":"Click para carregar uma fotografia"}},{"tag":"div","attr":{"class":"wrap-input100 validate-input"},"children":[{"tag":"input","attr":{"id":"name","class":"input100","type":"text","name":"name","placeholder":"Nome completo"}},{"tag":"span","attr":{"class":"focus-input100"}},{"tag":"label","attr":{"class":"label-input100","for":"name"},"children":{"tag":"span","attr":{"class":"icon-user m-b-2"}}}]},{"tag":"div","attr":{"class":"wrap-input100 validate-input"},"children":[{"tag":"input","attr":{"id":"email","class":"input100","type":"text","name":"email","placeholder":"Eg. examplo@email.com"}},{"tag":"span","attr":{"class":"focus-input100"}},{"tag":"label","attr":{"class":"label-input100","for":"email"},"children":{"tag":"span","attr":{"class":"icon-envelope-letter m-b-5"}}}]},{"tag":"div","attr":{"class":"wrap-input100 validate-input"},"children":[{"tag":"input","attr":{"id":"phone","class":"input100","type":"password","name":"password","placeholder":"Palavra passe"}},{"tag":"span","attr":{"class":"focus-input100"}},{"tag":"label","attr":{"class":"label-input100","for":"phone"},"children":{"tag":"span","attr":{"class":"icon-lock m-b-2"}}}]},{"tag":"div","attr":{"class":"container-contact100-form-btn"},"children":{"tag":"button","content":"SALVAR","attr":{"class":"contact100-form-btn"}}},{"tag":"div","attr":{"class":"form-group"},"children":{"tag":"input","attr":{"id":"mediaFile","type":"file","name":"imageupload"}}}]}]}

  }

));

document.querySelector(".contact100-form").setAttribute("action", "/turma_"+linkURL+"_novoEstudante");


/*
socket.on('allStudents', function(data){

  // caso existam estudantes registados, elimine o Aviso
  if (data.length) {
    document.querySelector(".warning-row").remove();

    // adciona o cabeçalho da tabela dos Estudantes
    document.querySelector(".upperContainer").appendChild(objectToHTML(

      {

        tag:"div","attr":{"class":"container tableContainer"},"children":{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12"},"children":{"tag":"div","attr":{"class":"card"},"children":{"tag":"table","attr":{"class":"table table-responsive-sm table-hover table-outline mb-0"},"children":[{"tag":"thead","attr":{"class":"thead-light"},"children":{"tag":"tr","children":[{"tag":"th","attr":{"class":"text-center"},"children":{"tag":"i","attr":{"class":"icon-people"}}},{"tag":"th","content":"Nome"},{"tag":"th","content":"Nº de Ordem","attr":{"class":"text-center"}},{"tag":"th","content":"Percentagem de Desempenho"},{"tag":"th","content":"Total de Faltas","attr":{"class":"text-center"}},{"tag":"th","content":"Relatório académico"}]}},{"tag":"tbody"}]}}}}


      }

    ));

  }

  // para cada estudante nesta turma registado adicione uma alinha na tabela
  for (let counter = 0; counter < data.length; counter++) {

    document.querySelector(".table").appendChild(objectToHTML(

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
                  "tag":"img",
                  "attr":{"class":"img-avatar","src":`public/photo-storage/${data[counter].foto}`,"alt":"admin@bootstrapmaster.com"}
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
                  "content":`${data[counter].nome}`
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
                "tag":"i",
                "content" : `${counter}`
              }
            },
            {
              "tag":"td",
              "children":[
                {
                  "tag":"div",
                  "attr":{"class":"clearfix"},
                  "children":[
                    {
                      "tag":"div",
                      "attr":{"class":"float-left"},
                      "children":{"tag":"strong","content":"50%"}
                    },
                    {
                      "tag":"div",
                      "attr":{"class":"float-right"},
                      "children":{
                        "tag":"small",
                        "content":"Desde Jun 11, 2015 - Jul 10, 2015","attr":{"class":"text-muted"}
                      }
                    }
                  ]
                },
                {
                  "tag":"div",
                  "attr":{"class":"progress progress-xs"},
                  "children":
                  {
                    "tag":"div",
                    "attr":{
                      "class":"progress-bar bg-success",
                      "role":"progressbar",
                      "style":"width: 50%",
                      "aria-valuenow":"50",
                      "aria-valuemin":"0",
                      "aria-valuemax":"100"
                    }
                  }
                }
              ]
            },
            {
              "tag":"td",
              "attr":
              {
                "class":"text-center"
              },
              "children":{
                "tag":"i",
                "attr":{
                  "class":"fa fa-cc-mastercard",
                  "style":"font-size:24px"}
                }
              },
              {
                "tag":"td",
                "children":[
                  {
                    "tag":"div",
                    "content":"Last login",
                    "attr":{
                      "class":"small text-muted"
                    }
                  },
                  {
                    "tag":"strong",
                    "content":"10 sec ago"
                  }
                ]
              }
            ]

      }

    ));

  }


  console.log(data);
});
*/
