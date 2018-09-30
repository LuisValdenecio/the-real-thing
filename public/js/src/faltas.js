const socket = io();

const objectToHTML = function(obj) {
  const element = document.createElement(obj.tag)
  if (obj.content) element.innerHTML = obj.content

  if (obj.attr) {
      for (const name in obj.attr) {
      const value = obj.attr[name]
      element.setAttribute(name, value)
    }
  }

  if (obj.events) {
    for (const name in obj.events) {
      const listener = new Function(obj.events[name]).bind(element)
      element.addEventListener(name, listener)
    }
  }

  if (obj.style) {
    for (const property in obj.style) {
      const value = obj.style[property]
      element.style[property] = value
    }
  }

  if (obj.children) {
      if (obj.children.length > 1) {
        for (var x = 0; x < obj.children.length; x++) {
          element.appendChild(objectToHTML(obj.children[x]));
        }
      } else element.appendChild(objectToHTML(obj.children));
  }

  return element
}

var table = document.querySelector("table");
var orderedList = document.querySelector(".breadcrumb");
var livroInfos = document.querySelector(".bookInfo");

var subjectUtf = {
  "A.E.F" : "AEF",
  "Cont.Analitica":"Cont Analítica",
  "Cont.Financeira":"Cont Financeira",
  "D.C.C":"DCC",
  "D.L.F":"",
  "Empreend":"Empreend",
  "Fisica":"Física",
  "Mat":"Matemática",
  "O.G.I":"OGI",
  "P.O.L":"POL",
  "Proj.Tecn":"Proj Técn",
  "S.E.A.C":"SEAC",
  "Socio":"Sociologia",
  "T.C.C":"TCC",
  "T.C.O-I.E.U":"TCO - IEU",
  "T.C.O.E":"TCOE",
  "T.L.P":"TLP",
  "T.R.E.I":"TREI",
  "Tec-de-Topografia":"Téc de Topografia",
  "Ed.Fisica": "Ed. Física",
  "T.C.E" : "TCE",
  "I.A.C" : "IAC",
  "L.Inglesa" : "Ingles",
  "Economia" : "Economia",
  "FAI" : "FAI",
  "L.Portuguesa" : "L.Portuguesa",
  "Ad.Empresas" : "Adm. Empresas"
};

socket.on('faltas', function(data) {
  for (var index = 0; index < data.length; index++) {
        // run the subject array and place each of them at the right place
        orderedList.appendChild(objectToHTML({
          tag : "li",
          attr : {
            class : "breadcrumb-item"
          },
          children : {
            tag : "a",
            content : `${subjectUtf[`${data[index].nome_disciplina}`]}`,
            attr : {
              href : `${"/"}${data[index].nome_disciplina}${"."}`
            }
          }
        }));
    }
});

socket.on('professores', function(data) {
  livroInfos.children[0].appendChild(objectToHTML({
    tag : "div",
    attr : {
      class : "row"
    },
    children : [
      {
        tag : "div",
        attr : {
          class : "col-sm-6"
        },
        children : {
          tag : "div",
          attr : {
            class : "row"
          },
          children : [
            {
              tag : "div",
              attr : {
                class : "col-sm-6"
              },
              children : {
                tag : "div",
                attr : {
                  class : "callout callout-info"
                },
                children : [
                  {
                    tag : "small",
                    content : `Classe`,
                    attr : {
                      class : "text-muted"
                    }
                  },
                  {
                    tag : "br"
                  },
                  {
                    tag : "strong",
                    content : data[0].nome_turma,
                    attr : {
                      class : "h4"
                    }
                  },
                  {
                    tag : "div",
                    attr : {
                      class : "chart-wrapper"
                    },
                    children : {
                      tag : "canvas",
                      attr : {
                        id : "sparkline-chart-2",
                        width : "100",
                        height : "30"
                      }
                    }

                  }

                ]
              }
            },

            {
              tag : "div",
              attr : {
                class : "col-sm-6"
              },
              children : {
                tag : "div",
                attr : {
                  class : "callout callout-danger"
                },
                children : [
                  {
                    tag : "small",
                    content : `Tempo`,
                    attr : {
                      class : "text-muted"
                    }
                  },
                  {
                    tag : "br"
                  },
                  {
                    tag : "strong",
                    content : `1º`,
                    attr : {
                      class : "h4"
                    }
                  },
                  {
                    tag : "div",
                    attr : {
                      class : "chart-wrapper"
                    },
                    children : {
                      tag : "canvas",
                      attr : {
                        id : "sparkline-chart-2",
                        width : "100",
                        height : "30"
                      }
                    }

                  }

                ]
              }

            }

          ]


        }

      },

      {
        tag : "div",
        attr : {
          class : "col-sm-6"
        },
        children : {
          tag : "div",
          attr : {
            class : "row"
          },
          children : [
            {
              tag : "div",
              attr : {
                class : "col-sm-6"
              },
              children : {
                tag : "div",
                attr : {
                  class : "callout callout-success"
                },
                children : [
                  {
                    tag : "small",
                    content : `Disciplina`,
                    attr : {
                      class : "text-muted"
                    }
                  },
                  {
                    tag : "br"
                  },
                  {
                    tag : "strong",
                    content : `Matemática`,
                    attr : {
                      class : "h4"
                    }
                  },
                  {
                    tag : "div",
                    attr : {
                      class : "chart-wrapper"
                    },
                    children : {
                      tag : "canvas",
                      attr : {
                        id : "sparkline-chart-4",
                        width : "100",
                        height : "30"
                      }
                    }

                  }

                ]
              }
            },

            {
              tag : "div",
              attr : {
                class : "col-sm-6"
              },
              children : {
                tag : "div",
                attr : {
                  class : "callout callout-warning"
                },
                children : [
                  {
                    tag : "small",
                    content : `Professor`,
                    attr : {
                      class : "text-muted"
                    }
                  },
                  {
                    tag : "br"
                  },
                  {
                    tag : "strong",
                    content : `Tito Marques`,
                    attr : {
                      class : "h4"
                    }
                  },
                  {
                    tag : "div",
                    attr : {
                      class : "chart-wrapper"
                    },
                    children : {
                      tag : "canvas",
                      attr : {
                        id : "sparkline-chart-3",
                        width : "100",
                        height : "30"
                      }
                    }

                  }

                ]
              }

            }

          ]


        }

      }


    ]

  }));

});

socket.on('students', function(data) {

  for (var x = 0; x < data.length; x++) {
      table.children[1].appendChild(objectToHTML(
        {
          tag: 'tr',
          children : [
            {
            tag: 'td',
            attr: {
              class: "text-center"
            },
            children : {
              tag : "div",
              attr: {
                class : "avatar"
              },
              children : [
                {
                  tag : "img",
                  attr : {
                    class : "img-avatar",
                    src : `public/photo-storage/${data[x].foto}`
                  }
                },
                {
                  tag : "span",
                  attr : {
                    class : "avatar-status badge-success"
                  }
                }]
              }
            },
            {
              tag : 'td',
              children : [
                {
                  tag : "div",
                  content : `${x+1} | ${data[x].nome} ${data[x].sobrenome}`
                },
                {
                  tag : "div",
                  attr: {
                    class : "small text-muted"
                  },
                  children : {
                    tag : "span",
                    content : "Nasce Em: Jan 1, 2007"
                  }
                }
              ]
            },
            {
              tag : "td",
              attr : {
                class : "text-center"
              },
              children : {
                tag : "i",
                content : "",
                attr : {
                  class : `flag-icon flag-icon-ao h4 mb-0`,
                  id : "us",
                  title : "us"
                }
              }
            },
            {
              tag : "td",
              children : [
                {
                  tag : "div",
                  attr : {
                    class : "clearfix"
                  },
                  children : [
                    {
                      tag : "div",
                      attr : {
                          class : "float-left"
                      },
                      children : {
                        tag : "strong",
                        content : `${Math.floor(Math.random(1,10)*100)}`
                      }
                    },
                    {
                      tag : "div",
                      attr : {
                        class : "float-right"
                      },
                      children : {
                        tag : "small",
                        content : "Jun 11, 2005 - Jul 10, 2015",
                        attr : {
                          class : "text-muted"
                        }
                      }
                    },
                  ]
                },
                {
                  tag : "div",
                  attr : {
                    class : "progress progress-xs"
                  },
                  children : {
                    tag : "div",
                    attr : {
                      class : "progress-bar bg-success",
                      role : "progressbar",
                      style : `width : ${Math.floor(Math.random(1,10)*100)}%`,
                      "aria-valuenow" : "50",
                      "aria-valuemin" : "0",
                      "aria-valuemax" : "100"
                    }
                  }
                }
              ]
            },
            {
              tag : "td",
              attr : {
                class : "text-center"
              },
              children : {
                tag : "i",
                attr : {
                  class : "fa fa-cc-mastercard",
                  style : "font-size:24px"
                }
              }
            },
            {
              tag : "td",
              children : [
                {
                    tag : "div",
                    attr : {
                      class : "small text-muted text-right"
                    }
                },
                {
                  tag : "button",
                  content : "Relatório",
                  attr : {
                    class : "btn btn-primary btn-sm",
                    "data-toggle" : "modal",
                    "data-target" : `#modal${x}`
                  }
                }
              ]
            }
          ]
        }
      ));

  }




});

var theBar = document.querySelector(".breadcrumb");
