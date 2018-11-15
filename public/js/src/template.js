/*
  template format logic
*/

const UIelements = [

    {

      tag:"div","attr":{"class":"outer-container"},"children":[{"tag":"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12 col-lg-12"},"children":{"tag":"div","attr":{"class":"alert alert-warning"},"children":[{"tag":"i","attr":{"class":""}},{"tag":"span","attr":{"class":"warn-text"},"children":{"tag":"i","attr":{"class":"fa fa-exclamation-triangle"}}}]}}},{"tag":"div","attr":{"class":"row mainRow"},"children":{"tag":"div","attr":{"class":"container"},"children":{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-calculator","style":"font-size: 200%"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Contabilidade","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-money","style":"font-size: 200%"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Finanças","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-building-o","style":"font-size: 200%"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Gestão Empresarial","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-line-chart","style":"font-size: 200%"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Técninas de cálculo e Estatística","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-group","style":"font-size: 200%"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Recursos Humanos","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-desktop","style":"font-size: 200%"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Informática","attr":{"class":"course-title"}}}}]}}}]}}},{"tag":"div","attr":{"class":"row","style":"padding-top: 20px"},"children":{"tag":"div","attr":{"class":"container"},"children":{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-flash ","style":"font-size: 200%"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Instalações Eletricas","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-wrench","style":"font-size: 200%"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Mecânica e Reparação automovel","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-road","style":"font-size: 200%"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Obras de construção civíl","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-2 col-lg-2"},"children":{"tag":"div","attr":{"class":"well"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"fa fa-plus","style":"font-size: 200%"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"Adicionar Curso","attr":{"class":"course-title"}}}}]}}}]}}}]},{"tag":"script","attr":{"type":"text/javascript","src":"radioButton.js"}}]


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


/*
  based on the course the different grades are going to automatically
  set themselves up
*/
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
