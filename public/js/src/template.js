/*
  template format logic
*/

const UIelements = [

    {

      tag:"div","attr":{"class":"outer-container"},"children":{"tag":"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12 col-lg-12"},"children":{"tag":"div","attr":{"class":"alert alert-warning"},"children":[{"tag":"h4","children":{"tag":"i","attr":{"class":"fa fa-warning"}}},{"tag":"a","content":"report an issue with Adblock Plus","attr":{"class":"alert-link","href":"#"}}]}}},{"tag":"div","attr":{"class":"row mainRow"},"children":{"tag":"div","attr":{"class":"container"},"children":{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"contabilidade"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12 course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-calculator"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Contabilidade","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"financ"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-money"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Finanças","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"gest-emp"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-building-o"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Gestão Empresarial","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"tec-est"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-line-chart"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Técninas de cálculo e Estatística","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"rec-hum"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-group"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Recursos Humanos","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"informatica"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12 course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-desktop"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Informática","attr":{"class":"course-title"}}}}]}}}]}}},{"tag":"div","attr":{"class":"row","style":"padding-top: 20px"},"children":{"tag":"div","attr":{"class":"container"},"children":{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"electr"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-flash"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Instalações Eletricas","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"mecanica"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-wrench"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Mecânica e Reparação automovel","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"occ"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12 course-icon"},"children":{"tag":"i","attr":{"class":"fa fa-road"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Obras de construção civíl","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well","id":"adic-curso"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12 course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-plus"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Adicionar Curso","attr":{"class":"course-title"}}}}]}}}]}}},{"tag":"div","attr":{"class":"container"},"children":{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"home_button trans_400"},"children":{"tag":"a","content":"Salvar","attr":{"href":"#"}}}}}]}

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
      "Projecto Tecnológico"
    ],

    [
      "Estágio Profissional",
      "Projecto Tecnológico"
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
    "Projecto Tecnológico"
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



  //based on the course the different grades are going to automatically
  //set themselves up

/*
var cont = document.querySelector("#curso-contabilidade"),
    inf  = document.querySelector("#curso-informatica"),
    o_c_c  = document.querySelector("#curso-occ");

function subjectPlacer(curso) {

  // set up the subjects for 10ª
  swissKnife (
    document.querySelectorAll(".carousel-indicators")[0].children,
    document.querySelectorAll(".carousel-inner")[0].children,
    curso,
    0,
    0,
    "#10classe"
  );

  // set up the subjects for 11ª
  swissKnife (
    document.querySelectorAll(".carousel-indicators")[1].children,
    document.querySelectorAll(".carousel-inner")[1].children,
    curso,
    1,
    1,
    "#11classe"
  );

  // set up the subjects for 12ª
  swissKnife (
    document.querySelectorAll(".carousel-indicators")[2].children,
    document.querySelectorAll(".carousel-inner")[2].children,
    curso,
    2,
    2,
    "#12classe"
  );

  // set up the subjets for 13ª
  swissKnife (
    document.querySelectorAll(".carousel-indicators")[3].children,
    document.querySelectorAll(".carousel-inner")[3].children,
    curso,
    3,
    3,
    "#13classe"
  );
}

// para as disciplinas do curso de informática
inf.addEventListener('click', function() {

  var formToSubmitOne = dynamicForm(informatica, "tecnico", "Informatica");
  document.querySelector("body").appendChild(
    formToSubmitOne
  );

  document.querySelector("body .course-form").submit();

  subjectPlacer(informatica);

},false);

// para as disciplinas do curso de occ
o_c_c.addEventListener('click', function() {
  subjectPlacer(occ);

  var formToSubmitOne = dynamicForm(occ, "tecnico", "occ");
  document.querySelector("body").appendChild(
    formToSubmitOne
  );

  document.querySelector("body .course-form").submit();
}, false);

// para as disciplinas do curso de contabilidade
cont.addEventListener('click', function(){
  subjectPlacer(contabilidade);

  var formToSubmitOne = dynamicForm(contabilidade, "tecnico", "Contabilidade");
  document.querySelector("body").appendChild(
    formToSubmitOne
  );

  document.querySelector("body .course-form").submit();
}, false);
*/

var wells = document.querySelectorAll(".well"),
    home_button = document.querySelector(".home_button");

wells.forEach((each) => {
    each.addEventListener('click', () => {
        each.style.background = "#276552";
    });
});

home_button.addEventListener('click', function() {

  wells.forEach((each)=> {
    if (each.style.background == "rgb(39, 101, 82)") {

      // create and send a form that contains every subject for a particular course
      var formToSubmitOne = dynamicForm(mapper[each.getAttribute("id")], "tecnico", each.getAttribute("id"));
      document.querySelector("body").appendChild(
        formToSubmitOne
      );

      document.querySelector("body .course-form").submit();
    }

  });

});
