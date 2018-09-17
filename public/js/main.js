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

/*****************************************************************
All the javascript written bellows deals with dynamic manipulation
******************************************************************/
const socket = io();

socket.emit('init', 'Initialization');

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

socket.on('students', data => {

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
                    src : `public/img/avatars/${x+1}.png`
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
                  class : "flag-icon flag-icon-us h4 mb-0",
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
                    class : "btn btn-primary btn-lg",
                    "data-toggle" : "modal",
                    "data-target" : `#modal${x}`
                  }
                }
              ]
            }
          ]
        }
      ));

      app.appendChild(objectToHTML(
        {
          tag : "div",
          attr : {
            class : "modal fade",
            id : `modal${x}`,
            tabindex : "-1",
            role : "dialog",
            "aria-labelledby" : "myModalLabel",
            "aria-hidden" : "true"
          },
          children :
            {
                tag : "div",
                attr : {
                  class : "modal-dialog"
                },
                children : {
                  tag : "div",
                  attr : {
                    class : "modal-content"
                  },
                  children : [
                    {
                      tag : "div",
                      content : `${data[x].nome} ${data[x].sobrenome}`,
                      attr : {
                        class : "modal-header"
                      }
                    },
                    {
                      tag : "div",
                      attr : {
                        class : "modal-body"
                      }
                    },
                    {
                      tag : "div",
                      attr : {
                        class : "modal-footer"
                      }
                    }
                  ]
                }
            }
        }
      ));


  }




});
