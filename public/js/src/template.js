/*
  template format logic
*/

const UIelements = [

    {

      tag:"div","attr":{"class":"outer-container"},"children":{"tag":"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12 col-lg-12"},"children":{"tag":"div","attr":{"class":"alert alert-warning"},"children":[{"tag":"h4","children":[{"tag":"i","attr":{"class":"fa fa-warning"}},{"tag":"span","content":"\"Aviso!\""}]},{"tag":"h6","content":"Clique em um dos retângulos para criar uma turma de tal curso."}]}}},{"tag":"div","attr":{"class":"row mainRow"},"children":{"tag":"div","attr":{"class":"container"},"children":{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"contabilidade"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12 course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-calculator"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Contabilidade","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"financ"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-money"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Finanças","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"gest-emp"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-building-o"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Gestão Empresarial","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"tec-est"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-line-chart"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Técninas de cálculo e Estatística","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"rec-hum"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-group"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Recursos Humanos","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"informatica"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12 course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-desktop"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Informática","attr":{"class":"course-title"}}}}]}}}]}}},{"tag":"div","attr":{"class":"row","style":"padding-top: 20px"},"children":{"tag":"div","attr":{"class":"container"},"children":{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"electr"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-flash"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Instalações Eletricas","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"mecanica"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-wrench"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Mecânica e Reparação automovel","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"occ"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12 course-icon"},"children":{"tag":"i","attr":{"class":"fa fa-road"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Obras de construção civíl","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"occ"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12 course-icon"},"children":{"tag":"i","attr":{"class":"fa fa-heartbeat"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Emfermagem e cuidados gerais","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"occ"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12 course-icon"},"children":{"tag":"i","attr":{"class":"fa fa-hotel"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Hotelaria e Restauração","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"adic-curso"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12 course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-plus"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Adicionar Curso","attr":{"class":"course-title"}}}}]}}}]}}}]}


    }

]

document.querySelector(".container-fluid").appendChild(objectToHTML(
  UIelements[0]
));


/**********************************************************************************

**********************************************************************************/


// contabilidade e gestão
const contabilidade = [

    [
      "Língua Portuguesa",
      "Língua Inglesa",
      "FAI",
      "Contabilidade Financeira",
      "Economia",
      "Matemática",
      "IAC",
      "DLC",
      "TCE",
      "Administração de Empresas",
      "Educação Física"
    ],

    [
      "Língua Portuguesa",
      "Língua Inglesa",
      "FAI",
      "Educação Física",
      "Matemática",
      "IAC",
      "Contabilidade Financeira",
      "TCE",
      "Administração de Empresas",
      "DLF"
    ],

    [
      "Matemática",
      "Direito",
      "Sociologia",
      "Contabilidade Financeira",
      "Contabilidade Analítica",
      "AEF",
      "Projécto Tecnológico"
    ],

    [

      "Estágio Profissional"
    ]

];

// informática
const informatica = [

    [
      "Língua Portuguesa",
      "Língua Inglesa",
      "FAI",
      "Educação Física",
      "Matemática",
      "Física",
      "Química",
      "Electrotecnia",
      "Empreendedorismo",
      "TLP",
      "SEAC",
      "TIC"
    ],

    [
      "Língua Portuguesa",
      "Língua Inglesa",
      "FAI",
      "Educação Física",
      "Matemática",
      "Física",
      "Química",
      "Electrotecnia",
      "Empreendedorismo",
      "Desenho Técnico",
      "TLP",
      "SEAC"
    ],

    [
      "Matemática",
      "Física",
      "OGI",
      "Empreendedorismo",
      "TLP",
      "TREI",
      "SEAC",
      "Projécto Tecnológico"
    ],

    [
      "Estágio Profissional",
      "Projécto Tecnológico"
    ]
];

// obras de construção civil
const occ = [
  [
    "Língua Portuguesa",
    "Língua Inglesa",
    "FAI",
    "Educação Física",
    "Matemática",
    "Física",
    "Química",
    "Informática",
    "Empreendedorismo",
    "DCC",
    "TCC",
    "TCOE",
    "POL"
  ],

  [
    "Língua Portuguesa",
    "Língua Inglesa",
    "FAI",
    "Educação Física",
    "Matemática",
    "Física",
    "Química",
    "Empreendedorismo",
    "DCC",
    "TCC",
    "TCOE",
    "POL"
  ],

  [
    "Matemática",
    "Física",
    "OGI",
    "Empreendedorismo",
    "DCC",
    "TCC",
    "TCOE",
    "TCO-IEU",
    "Técnicas de Topografia",
    "POL",
    "Projécto Tecnológico"
  ],

  [
    "Estágio Profissional"
  ]

];

// mapps course names to actual vectors
const mapper = {
    "contabilidade" : contabilidade,
    "occ" : occ,
    "informatica" : informatica
}

function swissKnife (carousel_indicators, carousel_inner, course, indexOne, indexTwo, target) {

    deleteHtmlArray(carousel_indicators);
    deleteHtmlArray(carousel_inner);

    for (let counter = 0; counter < course[indexTwo].length; counter++) {

      // set the carousels
      document.querySelectorAll(".carousel-indicators")[indexOne].appendChild(
        objectToHTML(
          {
            "tag" : "li",
            attr : {
              "data-target" : target,
              "data-slide-to" : counter
            }
          }
        ));


      // set the forms
      document.querySelectorAll(".carousel-inner")[indexOne].appendChild(
        objectToHTML(
          {
            tag : "div",
            attr : {
              class : counter == 0 ? "carousel-item active" : "carousel-item"
            },
            children : {
              tag : "div",
              attr : {
                class : "container"
              },
              children : [
                {
                  tag : "h3",
                  content : course[indexTwo][counter]
                },
                {
                tag : "div",
                attr : {
                  class : "row form-row"
                },
                children : [
                  {
                    tag : "div",
                    attr : {
                      class : "col-lg-6 col-md-6 form-col-one"
                    },
                    children : [
                      {
                        tag : "div",
                        attr : {
                          class : "profile_two"
                        },
                        children : [
                          {
                            tag : "div",
                            attr : {
                              class : "dashes"
                            }
                          },
                          {
                            tag : "label",
                            content : "click para carregar uma fotografia"
                          }
                        ]
                      },
                      {
                        tag : "form",
                        children : {
                          tag : "input",
                          attr : {
                            class : "mediaFile_two",
                            type : "file",
                            name : "imageupload"
                          }
                        }
                      }
                    ]
                  },

                  {
                    tag : "div",
                    attr : {
                      class : "col-lg-6 col-md-6",
                      style : "background : gray"
                    },
                    children : {
                      tag : "form",
                      attr : {
                        role : "form",
                        class : "actual-form"
                      },
                      children : [
                        {
                          tag : "div",
                          attr : {
                            class : "form-group"
                          },
                          children : [
                            {
                              tag : "label",
                              content : "Nome e sobrenome",
                              attr : {
                                for : "name"
                              }
                            },

                            {
                              tag : "input",
                              attr : {
                                type : "text",
                                class : "form-control",
                                id : "name",
                                placeholder : "Nome e sobrenome"
                              }
                            }
                          ]

                        },

                        {
                          tag : "div",
                          attr : {
                            class : "form-group"
                          },
                          children : [
                            {
                              tag : "label",
                              content : "Email",
                              attr : {
                                for : "name"
                              }
                            },

                            {
                              tag : "input",
                              attr : {
                                type : "text",
                                class : "form-control",
                                id : "name",
                                placeholder : "Correio Electrónico"
                              }
                            }
                          ]

                        },

                        {
                          tag : "div",
                          attr : {
                            class : "form-group"
                          },
                          children : [
                            {
                              tag : "label",
                              content : "Bilhete de Identidade",
                              attr : {
                                for : "name"
                              }
                            },

                            {
                              tag : "input",
                              attr : {
                                type : "text",
                                class : "form-control",
                                id : "name",
                                placeholder : "nº do Bilhete de Identidade"
                              }
                            }
                          ]

                        },

                        {
                          tag : "button",
                          content : "Submit",
                          attr : {
                            type : "submit",
                            class : "btn btn-default"
                          }
                        }
                      ]
                    }

                  }
                ]
              }]
            }
          }
      ));
    }
}

var wells = document.querySelectorAll(".well"),
    home_button = document.querySelector(".home_button");

wells.forEach((each) => {
    each.addEventListener('click', () => {
        var classRegs = objectToHTML({
          tag : "button",
          attr : {
            class : "btn btn-primary btn-lg",
            "data-toggle" : "modal",
            "data-target" : "#myModal",
            style : "display:none"
          }
        });

        // class registration modal
        var theModal = objectToHTML({

          tag:"div","attr":{"class":"modal fade","id":"myModal","tabindex":"-1","role":"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true","style":"display: none;"},"children":{"tag":"div","attr":{"class":"modal-dialog","role":"document"},"children":{"tag":"div","attr":{"class":"modal-content"},"children":[{"tag":"div","attr":{"class":"modal-header"},"children":{"tag":"div","children":[{"tag":"h4","content":"Crie uma turma","attr":{"class":"modal-title"}},{"tag":"span","content":"selecione uma classe para criar uma turma do curso técnico de"},{"tag":"span","attr":{"class":"modal-title course-holder"}}]}},{"tag":"div","attr":{"class":"modal-body"},"children":{"tag":"form","attr":{"role":"form","method":"post","action":"/tecnico"},"children":[{"tag":"div","attr":{"class":"form-group"},"children":{"tag":"div","attr":{"class":"alert alert-warning"},"children":[{"tag":"h4","children":[{"tag":"i","attr":{"class":"fa fa-warning"}},{"tag":"span","content":"\"Aviso!\""}]},{"tag":"h6","content":"\n                                        As turmas da mesma classe e curso, serão\n                                        nomeadas por ordem de criação.\"\n                                    "}]}},{"tag":"div","attr":{"class":"form-group"},"children":[{"tag":"label","content":"Selecione uma classe","attr":{"for":"name","class":"classe"}},{"tag":"div","attr":{"class":"form-group"},"children":[{"tag":"label","attr":{"class":"checkbox-inline"},"children":[{"tag":"input","attr":{"type":"checkbox","id":"inlineCheckbox1","value":"option1","name":"10ªClasse"}},{"tag":"span","content":"10ª Classe"}]},{"tag":"label","attr":{"class":"checkbox-inline"},"children":[{"tag":"input","attr":{"type":"checkbox","id":"inlineCheckbox2","value":"option2","name":"11ªClasse"}},{"tag":"span","content":"11ª Classe"}]},{"tag":"label","attr":{"class":"checkbox-inline"},"children":[{"tag":"input","attr":{"type":"checkbox","id":"inlineCheckbox3","value":"option3","name":"12ªClasse"}},{"tag":"span","content":"12ª Classe"}]},{"tag":"label","attr":{"class":"checkbox-inline"},"children":[{"tag":"input","attr":{"type":"checkbox","id":"inlineCheckbox3","value":"option3","name":"10ªClasse"}},{"tag":"span","content":"13ª Classe"}]}]},{"tag":"div","attr":{"class":"form-group hidden-form"},"children":[{"tag":"input","attr":{"type":"text","value":"option1","name":"classe"}},{"tag":"input","attr":{"type":"text","value":"option1","name":"curso"}}]}]}]}},{"tag":"div","attr":{"class":"modal-footer"},"children":[{"tag":"button","content":"Cancelar","attr":{"class":"btn btn-secondary","type":"button","data-dismiss":"modal"}},{"tag":"button","content":"Criar turma","attr":{"class":"btn btn-primary","type":"button"}}]}]}}

        });

        document.querySelector("body").appendChild(theModal);
        document.querySelector("body").appendChild(classRegs);

        // seta o valor do input nome do curso
        document.querySelectorAll(".hidden-form input")[1].value = each.innerText;
        // seta o valor do input nome da classes

        var checks = document.querySelectorAll(".checkbox-inline input");
        var classes = ["10ªClasse", "11ªClasse", "12ªClasse", "13ªClasse"];

        if (checks[0].checked) {
          document.querySelectorAll(".hidden-form input")[0].value = "10ªClasse";
        } else document.querySelectorAll(".hidden-form input")[0].value = "10ª";

        document.querySelector(".course-holder").innerText = " "+each.innerText;
        classRegs.click();

        // when the main button is clicked, send the form to the server
        document.querySelector(".btn-primary").onclick = function() {
          document.querySelector("form").submit();
        }

    });
});



/*
home_button.addEventListener('click', function() {

  var clicked = [];
  var parentForm = objectToHTML({
    tag : "form",
    attr : {
      "method" : "POST",
      "style" : "display : none",
      "action" : `${'/'}${"tecnico"}`
    }
  });

  var inputs = [];

  wells.forEach((each)=> {
    if (each.style.background == "rgb(39, 101, 82)")
      clicked.push(each.getAttribute("id"));
  });

  // create a major form from the minor elements
  clicked.forEach((each)=> {
    inputs.push(
      getTheInput(dynamicForm(mapper[each], "tecnico", each))
    );
  });

  // append the parent form in the body
  document.querySelector("body").appendChild(parentForm);

  for (let x = 0; x < inputs.length; x++) {
    for (let y = 0; y < inputs[x].length; y++) {
      parentForm.appendChild(
        inputs[x][y]
      );
    }
  }

  // submit the form to the server
  parentForm.submit();
  //console.log(parentForm);
});
*/

// this helper function helps to get rid of the header of a form and leave only
// the input tags
function getTheInput(form) {
  var inputs = [];

  for (let counter = 0; counter < form.children.length; counter++) {
    inputs.push(form.children[counter]);
  }

  return inputs;
}
