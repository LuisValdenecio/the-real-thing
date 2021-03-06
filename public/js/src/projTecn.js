var table = document.querySelector("table");
var orderedList = document.querySelector(".breadcrumb");
var livroInfos = document.querySelector(".bookInfo");

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

var newLabels = [
  "Nome",
  "Ranking de Faltas",
  "Falta Disciplinar",
  "Falta por Ausência",
  "Falta por material "
];


for (var x = 1; x < table.children[0].children[0].children.length; x++) {
    table.children[0].children[0].children[x].innerText = newLabels[x-1]
}

livroInfos.appendChild(document.createElement("br"));
livroInfos.appendChild(document.createElement("div"));
livroInfos.appendChild(document.createElement("div"));

livroInfos.children[4].appendChild(objectToHTML(
  {
    tag : "button",
    content : "Marcar",
      attr : {
        class : "btn btn-primary btn-sm refresh-button"
      }
  }
));

var subjectNow;

socket.on('livroPonto', function(data) {

  subjectNow = data[1].subject_name;  // the current name of subject

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
                      class : "h4",
                      id : "disciplina"
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


livroInfos.children[5].appendChild(objectToHTML(
  {
    tag : "form",
      attr : {
        style : "display : none",
        action : `${"/"}${`something`}${"."}`,
        method : "POST",
        class : "faltas-form"
      }
  }
));

socket.on('students', function(data) {

  for (var x = 0; x < data.length; x++) {

      // for student table
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
                tag : "div",
                attr : {
                  class : `rankingHolder`
                },
                children : {
                  tag : "span",
                  content : "1"+"º",
                  attr : {
                    style : "font-weight :bold"
                  }
                }
              }
            },
            {
              tag : "td",
              attr : {
                class : "text-center"
              },
              children : {
                tag : "label",
                attr : {
                  class : "container-input"
                },
                children : [
                  {
                    tag : "input",
                    attr : {
                      type : "checkbox",
                      class : "faults-input",
                      name : `${data[x].estudante_cod}`
                    }
                  },
                  {
                    tag : "span",
                    attr : {
                      class : "checkmark-one"
                    }
                  }
                ]
              }
            },
            {
              tag : "td",
              attr : {
                class : "text-center"
              },
              children : {
                tag : "label",
                attr : {
                  class : "container-input"
                },
                children : [
                  {
                    tag : "input",
                    attr : {
                      type : "checkbox",
                      class : "faults-input",
                      name : `${data[x].estudante_cod}`
                    }
                  },
                  {
                    tag : "span",
                    attr : {
                      class : "checkmark-two"
                    }
                  }
                ]
              }
            },
            {
              tag : "td",
              attr : {
                class : "text-center"
              },
              children : {
                tag : "label",
                attr : {
                  class : "container-input"
                },
                children : [
                  {
                    tag : "input",
                    attr : {
                      type : "checkbox",
                      class : "faults-input",
                      name : `${data[x].estudante_cod}`
                    }
                  },
                  {
                    tag : "span",
                    attr : {
                      class : "checkmark-three"
                    }
                  }
                ]
              }
            }
          ]
        }
      ));

      /* filling up the student form
      livroInfos.children[5].children[0].appendChild(objectToHTML(
        {
          tag : "input",
          attr : {
            type : "checkbox",
            name : `${data[x].estudante_cod}`
          }
        }
      ));
      */
  }

});

/*
  helpers
*/

function convertRadio(ele,name) {
  return objectToHTML(
    {
      tag : "input",
      attr : {
        type : "text",
        name : name,
        value : (ele.checked) ? 1 : 0
      }
    }
  );
}

/*
  /helpers
*/

var refreshButton = document.querySelector(".refresh-button");
refreshButton.onclick = function () {
  var copyInputs = document.querySelectorAll(".faults-input");

  for (var x = 0; x < copyInputs.length; x++) {
      document.querySelector(".faltas-form").appendChild(convertRadio(copyInputs[x],copyInputs[x].name));
  }

  document.querySelector(".faltas-form").setAttribute("action", `${"/"}${subjectNow}${"."}`);
  document.querySelector(".faltas-form").submit();  // submit the form to the server
  document.querySelector(".faltas-form").setAttribute("action", ``);  // dont ask to send again
}
