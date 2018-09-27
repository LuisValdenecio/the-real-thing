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
  "A.E.F." : "AEF",
  "Cont.Analitica":"Cont Analítica",
  "Cont.Financeira":"Cont Financeira",
  "D.C.C.":"DCC",
  "D.L.F":"",
  "Empreend":"Empreend",
  "Fisica":"Física",
  "Mat":"Matemática",
  "O.G.I.":"OGI",
  "P.O.L.":"POL",
  "Proj.Tecn":"Proj Técn",
  "S.E.A.C.":"SEAC",
  "Socio":"Sociologia",
  "T.C.C.":"TCC",
  "T.C.O-I.E.U.":"TCO - IEU",
  "T.C.O.E.":"TCOE",
  "T.L.P.":"TLP",
  "T.R.E.I.":"TREI",
  "Tec-de-Topografia":"Téc de Topografia"
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
              href : `${"/"}${data[index].nome_disciplina}`
            }
          }
        }));
    }
});

socket.on('livroPonto', function(data) {
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
                    content : `${data[2].classname}`,
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
                class : "col-sm-5"
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
                    content : subjectUtf[data[1].subject_name],
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
                class : "col-sm-7"
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
                    content : data[0].nome_professor,
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
