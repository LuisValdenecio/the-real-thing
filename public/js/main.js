/* eslint-disable object-shorthand */

/* global Chart, CustomTooltips, getStyle, hexToRgba */

/**
 * --------------------------------------------------------------------------
 * CoreUI Free Boostrap Admin Template (v2.0.0): main.js
 * Licensed under MIT (https://coreui.io/license)
 * --------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
// Disable the on-canvas tooltip
Chart.defaults.global.pointHitDetectionRadius = 1;
Chart.defaults.global.tooltips.enabled = false;
Chart.defaults.global.tooltips.mode = 'index';
Chart.defaults.global.tooltips.position = 'nearest';
Chart.defaults.global.tooltips.custom = CustomTooltips; // eslint-disable-next-line no-unused-vars

var cardChart1 = new Chart($('#card-chart1'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)',
      data: [65, 59, 84, 84, 51, 55, 40]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 35,
          max: 89
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
}); // eslint-disable-next-line no-unused-vars

var cardChart2 = new Chart($('#card-chart2'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)',
      data: [1, 18, 9, 17, 34, 22, 11]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: -4,
          max: 39
        }
      }]
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
}); // eslint-disable-next-line no-unused-vars

var cardChart3 = new Chart($('#card-chart3'), {
  type: 'line',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  }
}); // eslint-disable-next-line no-unused-vars

var cardChart4 = new Chart($('#card-chart4'), {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        display: false,
        barPercentage: 0.6
      }],
      yAxes: [{
        display: false
      }]
    }
  }
}); // eslint-disable-next-line no-unused-vars

var mainChart = new Chart($('#main-chart'), {
  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S', 'M', 'T', 'W', 'T', 'F', 'S', 'S'],
    datasets: [{
      label: 'My First dataset',
      backgroundColor: hexToRgba(getStyle('--info'), 10),
      borderColor: getStyle('--info'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [165, 180, 70, 69, 77, 57, 125, 165, 172, 91, 173, 138, 155, 89, 50, 161, 65, 163, 160, 103, 114, 185, 125, 196, 183, 64, 137, 95, 112, 175]
    }, {
      label: 'My Second dataset',
      backgroundColor: 'transparent',
      borderColor: getStyle('--success'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [92, 97, 80, 100, 86, 97, 83, 98, 87, 98, 93, 83, 87, 98, 96, 84, 91, 97, 88, 86, 94, 86, 95, 91, 98, 91, 92, 80, 83, 82]
    }, {
      label: 'My Third dataset',
      backgroundColor: 'transparent',
      borderColor: getStyle('--danger'),
      pointHoverBackgroundColor: '#fff',
      borderWidth: 1,
      borderDash: [8, 5],
      data: [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65]
    }]
  },
  options: {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    }
  }
});
var brandBoxChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
var brandBoxChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [{
      display: false
    }],
    yAxes: [{
      display: false
    }]
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 10,
      hoverRadius: 4,
      hoverBorderWidth: 3
    }
  } // eslint-disable-next-line no-unused-vars

};
var brandBoxChart1 = new Chart($('#social-box-chart-1'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [65, 59, 84, 84, 51, 55, 40]
    }]
  },
  options: brandBoxChartOptions
}); // eslint-disable-next-line no-unused-vars

var brandBoxChart2 = new Chart($('#social-box-chart-2'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [1, 13, 9, 17, 34, 41, 38]
    }]
  },
  options: brandBoxChartOptions
}); // eslint-disable-next-line no-unused-vars

var brandBoxChart3 = new Chart($('#social-box-chart-3'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [78, 81, 80, 45, 34, 12, 40]
    }]
  },
  options: brandBoxChartOptions
}); // eslint-disable-next-line no-unused-vars

var brandBoxChart4 = new Chart($('#social-box-chart-4'), {
  type: 'line',
  data: {
    labels: brandBoxChartLabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff',
      borderWidth: 2,
      data: [35, 23, 56, 22, 97, 23, 64]
    }]
  },
  options: brandBoxChartOptions
});
//# sourceMappingURL=main.js.map


/******************************************************************
Important resources in JSON-like format
*******************************************************************/
const modalUI = function(name, photoSrc) {
  return {"tag":"div","attr":{"class":"modal fade studentModal","id":"modal","tabindex":"-1","role":"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true","style":"display: none;"},"children":{"tag":"div","attr":{"class":"modal-dialog modal-lg"},"children":{"tag":"div","attr":{"class":"modal-content"},"children":[{"tag":"div","attr":{"class":"modal-header"},"children":{"tag":"button","content":"\n\t\t\t\t\t×\n\t\t\t\t","attr":{"type":"button","class":"close","data-dismiss":"modal","aria-hidden":"true"}}},{"tag":"div","attr":{"class":"modal-body"},"children":{"tag":"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12 col-lg-12","style":"text-align:center"},"children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12 col-lg-12 "},"children":{"tag":"div","attr":{"class":"photo_holder"},"children":{"tag":"img","attr":{"src": `public/photo-storage/${photoSrc}`,"alt":"student photo"}}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12 col-lg-12 "},"children":{"tag":"div","attr":{"class":"name-holder"},"children":{"tag":"h3","content":name}}}}]}},{"tag":"div","attr":{"class":"rowOne"},"children":{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-md-4"},"children":{"tag":"table","attr":{"class":"table table-condensed wow fadeInLeftBig","data-wow-duration":"700ms","data-wow-delay":"800ms"},"children":[{"tag":"thead","children":{"tag":"tr","children":{"tag":"th","content":"Desempenho ao nível de notas","attr":{"class":"text-center"}}}},{"tag":"tbody","children":{"tag":"tr","children":{"tag":"td","attr":{"style":"border: solid 1px blue; background-color: #d5f7d5"},"children":{"tag":"div","attr":{"class":"card","style":"border: none; background-color: #d5f7d5"},"children":{"tag":"div","attr":{"class":"card-body"},"children":[{"tag":"div","content":"98%","attr":{"class":"text-value"}},{"tag":"div","content":"Total de notas / nº Disciplinas"},{"tag":"div","attr":{"class":"progress progress-xs my-2"},"children":{"tag":"div","attr":{"class":"progress-bar bg-success","role":"progressbar","style":"width: 98%","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}}},{"tag":"small","content":"Lorem ipsum dolor sit amet enim.","attr":{"class":"text-muted"}}]}}}}}]}},{"tag":"div","attr":{"class":"col-md-4"},"children":{"tag":"table","attr":{"class":"table table-condensed"},"children":[{"tag":"thead","children":{"tag":"tr","children":{"tag":"th","content":"Grau de Participação nas aulas","attr":{"class":"text-center"}}}},{"tag":"tbody","children":{"tag":"tr","children":{"tag":"td","attr":{"style":"border: solid 1px lightgray; background-color: #d5f7fa"},"children":{"tag":"div","attr":{"class":"card","style":"border: none; background-color: #d5f7fa"},"children":{"tag":"div","attr":{"class":"card-body"},"children":[{"tag":"div","content":"70%","attr":{"class":"text-value"}},{"tag":"div","content":"Nº de Interveções / Nº de Aulas"},{"tag":"div","attr":{"class":"progress progress-xs my-2"},"children":{"tag":"div","attr":{"class":"progress-bar bg-success","role":"progressbar","style":"width: 70%","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}}},{"tag":"small","content":"Lorem ipsum dolor sit amet enim.","attr":{"class":"text-muted"}}]}}}}}]}},{"tag":"div","attr":{"class":"col-md-4"},"children":{"tag":"table","attr":{"class":"table table-condensed"},"children":[{"tag":"thead","children":{"tag":"tr","children":{"tag":"th","content":"Situação das Faltas","attr":{"class":"text-center"}}}},{"tag":"tbody","children":{"tag":"tr","children":{"tag":"td","attr":{"style":"border: solid 1px lightblue; background-color: #e4fffb"},"children":{"tag":"div","attr":{"class":"card","style":"border: none; background-color: #e4fffb"},"children":{"tag":"div","attr":{"class":"card-body"},"children":[{"tag":"div","content":"13 Faltas","attr":{"class":"text-value"}},{"tag":"div","content":"Acima do nível aconselhado"},{"tag":"div","attr":{"class":"progress progress-xs my-2"},"children":{"tag":"div","attr":{"class":"progress-bar bg-danger","role":"progressbar","style":"width: 25%","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}}},{"tag":"small","content":"Lorem ipsum dolor sit amet enim.","attr":{"class":"text-muted"}}]}}}}}]}}]}},{"tag":"div","attr":{"class":"rowTwo","style":"display:none"},"children":{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-md-4"},"children":{"tag":"table","attr":{"class":"table table-condensed"},"children":[{"tag":"thead","children":{"tag":"tr","children":{"tag":"th","content":"Avaliação Disciplinar","attr":{"class":"text-center"}}}},{"tag":"tbody","children":{"tag":"tr","children":{"tag":"td","attr":{"style":"border: solid 1px green"},"children":{"tag":"div","attr":{"class":"card","style":"border: none"},"children":{"tag":"div","attr":{"class":"card-body"},"children":[{"tag":"div","content":"80.9%","attr":{"class":"text-value"}},{"tag":"div","content":"total das Notas / nº disciplinas"},{"tag":"div","attr":{"class":"progress progress-xs my-2"},"children":{"tag":"div","attr":{"class":"progress-bar bg-success","role":"progressbar","style":"width: 80%","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}}},{"tag":"small","content":"Lorem ipsum dolor sit amet enim.","attr":{"class":"text-muted"}}]}}}}}]}},{"tag":"div","attr":{"class":"col-md-4"},"children":{"tag":"table","attr":{"class":"table table-condensed"},"children":[{"tag":"thead","children":{"tag":"tr","children":{"tag":"th","content":"Avaliação Global [Comportamento]","attr":{"class":"text-center"}}}},{"tag":"tbody","children":{"tag":"tr","children":{"tag":"td","attr":{"style":"border: solid 1px green; background-color: aliceblue"},"children":{"tag":"div","attr":{"class":"card","style":"border: none; background-color: aliceblue"},"children":{"tag":"div","attr":{"class":"card-body"},"children":[{"tag":"div","content":"100%","attr":{"class":"text-value"}},{"tag":"div","content":"Pontos de Indisciplina / nº de Aulas"},{"tag":"div","attr":{"class":"progress progress-xs my-2"},"children":{"tag":"div","attr":{"class":"progress-bar bg-success","role":"progressbar","style":"width: 100%","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}}},{"tag":"small","content":"Lorem ipsum dolor sit amet enim.","attr":{"class":"text-muted"}}]}}}}}]}},{"tag":"div","attr":{"class":"col-md-4"},"children":{"tag":"table","attr":{"class":"table table-condensed"},"children":[{"tag":"thead","children":{"tag":"tr","children":{"tag":"th","content":"Em Relação ao Trimestre anterior","attr":{"class":"text-center"}}}},{"tag":"tbody","children":{"tag":"tr","children":{"tag":"td","attr":{"style":"border: solid 1px lightblue"},"children":{"tag":"div","attr":{"class":"card","style":"border: none"},"children":{"tag":"div","attr":{"class":"card-body"},"children":[{"tag":"div","content":"25%","attr":{"class":"text-value"}},{"tag":"div","content":"Total notas / % do Trimestre anterior"},{"tag":"div","attr":{"class":"progress progress-xs my-2"},"children":{"tag":"div","attr":{"class":"progress-bar bg-warning","role":"progressbar","style":"width: 25%","aria-valuenow":"25","aria-valuemin":"0","aria-valuemax":"100"}}},{"tag":"small","content":"Lorem ipsum dolor sit amet enim.","attr":{"class":"text-muted"}}]}}}}}]}}]}}]}},{"tag":"div","attr":{"class":"modal-footer","style":"padding:0x "},"children":{"tag":"a","content":"Próximo","attr":{"onclick":"ChangeEle()"}}}]}}};
}
/*****************************************************************
All the javascript written bellows deals with dynamic manipulation
******************************************************************/
const socket = io();

nacionalidade = {
  Angolana : "flag-icon-ao",
  Portuguesa : "",
  Francesa : "",
  Americana : "",
  Brasileira : "",
  "Moçambicana" : "",
  "Alemã" : "",
  Holandesa : "",
  Checa : ""
};

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

var table = document.querySelector("table"),
    app = document.querySelector(".app-body");

socket.on('students', function(data) {

  for (var x = 0; Number(table.attributes[1].value) > x; x++) {
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
                  class : `flag-icon ${nacionalidade[`Angolana`]} h4 mb-0`,
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
                    class : "btn btn-primary btn-sm reportStudent",
                    "data-toggle" : "modal",
                    "data-target" : `#modal`,
                    "data-list" : x
                  }
                }
              ]
            }
          ]
        }
      ));

  }

  document.querySelectorAll(".reportStudent").forEach((each)=> {
    each.addEventListener('click', hi, false)
  });

  function hi() {
    //console.log(this.getAttribute("data-list"));
    //console.log(data[this.getAttribute("data-list")].nome);
    //console.log(data[this.getAttribute("data-list")].sobrenome);
    //console.log();

    document.querySelector(".studentModal .modal-body .photo_holder img").src = "public/photo-storage/"+data[this.getAttribute("data-list")].foto;
    document.querySelector(".studentModal .modal-body .name-holder h3").innerHTML = `${Number(this.getAttribute("data-list")) + 1} | ${data[this.getAttribute("data-list")].nome}  ${data[this.getAttribute("data-list")].sobrenome}`


  }



});

app.appendChild(objectToHTML(
  modalUI(`01 | Luis Valdenecio`, "01")
));

var ulList = document.querySelector(".subjectList");

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
        //run the subject array and place each of them at the right place
        ulList.appendChild(objectToHTML({
          tag : "li",
          attr : {
            class : "nav-item"
          },
          children : {
            tag : "a",
            attr : {
              class : "nav-link",
              href : `${"/"}${data[index].nome_disciplina}${"."}`
            },
            children : [
              {
                tag : "i",
                attr : {
                  class : "nav-icon icon-pencil"
                }
              },
              {
                tag : "span",
                content :  ` ${subjectUtf[`${data[index].nome_disciplina}`]}`
              }
            ]

            //content : ` ${subjectUtf[`${data[index].nome_disciplina}`]}`
          }
        }));
    }
});
