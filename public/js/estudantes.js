/*

  The logic behind estudantes.js
  author : Luís Valdenêncio
  Date : 20/12/2018

*/

const windows = this;
const linkURL = windows.location.pathname.split("_")[1];

var actualLinks = document.querySelectorAll(".option-card-link");

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

  console.log(estaTurma);

  if (estaTurma.length) {

    // número de estudantes registados para esta turma
    infoDeClasse[2].innerText = (!estaTurma.length) ? 0 : estaTurma.length;

    // caso existam estudantes registados, elimine o Aviso
    document.querySelector(".warning-row").remove();

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
                  "attr" : {
                    "class" : "student_name_holder"
                  },
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
              "attr":{"class":"text-center actual-number-holder"},
              "children":{
                "tag":"strong",
                "content":`${counter+1}`
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
                      "children":{"tag":"strong","content":"0%"}
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
                      "style":"width: 0%",
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
              "attr":{"class":"text-center falta_container", "student_cod" : estaTurma[counter]["estudantecod"]},
              "children":{
                "tag":"strong",
                "content":`${0}`
              }
              },
              {
                "tag":"td",
                "attr" : {
                  "class":"text-center"
                },
                "children":
                  {
                    "tag":"div",
                    "attr" : {
                      "class" : "modal-btn-holder"
                    },
                    "children" : {
                        "tag" : "button",
                        "content" : "ver relatório",
                        "attr" : {
                          "class" : "modal-btn"
                        }
                    }

                  }
              }
            ]

      }

    ));

  }

});

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

// modal para estudantes do ensino primario
document.querySelector("body").appendChild(objectToHTML(

  {

    tag:"div","attr":{"class":"container-contact100","id":"ens-pri","style":"display: none;"},"children":{"tag":"div","attr":{"class":"wrap-contact100 row"},"children":[{"tag":"button","attr":{"class":"btn-hide-contact100"},"children":{"tag":"i","attr":{"class":"icon-close"}}},{"tag":"div","attr":{"class":"contact100-form-title","style":"background-image: url(public/img/1.GIF);"},"children":{"tag":"span","content":"Relatório académico"}},{"tag":"div","attr":{"class":"swiper-container testimonial-slider"},"children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-12 col-md-6 col-lg-12"},"children":{"tag":"div","attr":{"class":"team-member"},"children":{"tag":"img","attr":{"src":"","alt":"fotografia do Estudante","class":"student_photo"}}}}},{"tag":"div","attr":{"class":"row name-holder"},"children":{"tag":"div","attr":{"class":"col-lg-6 offset-lg-3"},"children":{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-lg-1","style":"background:#ffffff; position: absolute; right:550px; top: 4px ;border-radius: 50%; height:40px;width:40px"},"children":{"tag":"span","content":"20","attr":{"style":"position:absolute;top:10%;left:20%","class":"number-holder"}}},{"tag":"div","attr":{"class":"col-lg-11","style":"position:relative; left:50px"},"children":{"tag":"span","content":"Luís Valenêncio Tchitue Manuel Carlos Afonso","attr":{"class":"name-hold"}}}]}}},{"tag":"div","attr":{"class":"swiper-wrapper"},"children":[{"tag":"div","attr":{"class":"swiper-slide"},"children":{"tag":"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-note"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Desempenho ao nível de notas"}}]}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-trophy"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Actividades Extracurriculares"}}]}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-calendar"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Situação das faltas"}}]}}]},{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Iº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIIº Trimestre","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart2","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"\n                                                        Iº Trimestre\n                                                    ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                        IIº Trimestre\n                                                    ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                        IIIº Trimestre\n                                                    ","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart3","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Iº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIIº Trimestre","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart4","height":"70"}}}]}}]}]}},{"tag":"div","attr":{"class":"swiper-slide"},"children":{"tag":"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-ban"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Avaliação disciplinar"}}]}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-pencil"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Resolução de Tarefas"}}]}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-globe"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Avaliação global"}}]}}]},{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Iº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIIº Trimestre","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart2","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"\n                                                        Iº Trimestre\n                                                    ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                        IIº Trimestre\n                                                    ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                        IIIº Trimestre\n                                                    ","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart3","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Iº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIIº Trimestre","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart4","height":"70"}}}]}}]}]}}]}]},{"tag":"div","attr":{"class":"row","style":"position:relative;top:-60px; left:-60px ;margin-top:25px;margin-left:490px"},"children":[{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"button","attr":{"class":"contact100-btn-show btn-show-0"},"children":{"tag":"i","attr":{"class":"icon-arrow-left arrow-dirc-icons-1","aria-hidden":"true"}}}},{"tag":"div","attr":{"class":"col-lg-4","style":"position:relative;left:10px"},"children":{"tag":"button","attr":{"class":"contact100-btn-show btn-show-1"},"children":{"tag":"i","attr":{"class":"icon-layers arrow-dirc-icons-2","aria-hidden":"true"}}}},{"tag":"div","attr":{"class":"col-lg-4","style":"position:relative;left:20px"},"children":{"tag":"button","attr":{"class":"contact100-btn-show btn-show-2"},"children":{"tag":"i","attr":{"class":"icon-arrow-right arrow-dirc-icons-3","aria-hidden":"true"}}}}]}]}

  }


));


// modal para estudantes do ensino técnico
document.querySelector("body").appendChild(objectToHTML(

  {

    tag:"div","attr":{"class":"container-contact100","id":"ens-tec","style":"display: none;"},"children":{"tag":"div","attr":{"class":"wrap-contact100 row"},"children":[{"tag":"button","attr":{"class":"btn-hide-contact100"},"children":{"tag":"i","attr":{"class":"icon-close"}}},{"tag":"div","attr":{"class":"contact100-form-title","style":"background-image: url(public/img/1.GIF);"},"children":{"tag":"span","content":"Relatório académico"}},{"tag":"div","attr":{"class":"swiper-container testimonial-slider"},"children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-12 col-md-6 col-lg-12"},"children":{"tag":"div","attr":{"class":"team-member"},"children":{"tag":"img","attr":{"src":"","alt":"fotografia do Estudante","class":"student_photo"}}}}},{"tag":"div","attr":{"class":"row name-holder"},"children":{"tag":"div","attr":{"class":"col-lg-6 offset-lg-3"},"children":{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-lg-1","style":"background:#ffffff; position: absolute; right:550px; top: 4px ;border-radius: 50%; height:40px;width:40px"},"children":{"tag":"span","content":"20","attr":{"style":"position:absolute;top:10%;left:20%","class":"number-holder"}}},{"tag":"div","attr":{"class":"col-lg-11","style":"position:relative; left:50px"},"children":{"tag":"span","content":"Luís Valenêncio Tchitue Manuel Carlos Afonso","attr":{"class":"name-hold"}}}]}}},{"tag":"div","attr":{"class":"swiper-wrapper"},"children":[{"tag":"div","attr":{"class":"swiper-slide"},"children":{"tag":"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-note"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Desempenho ao nível de notas"}}]}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-pie-chart"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Grau de participação nas aulas"}}]}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-calendar"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Situação das faltas"}}]}}]},{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Iº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIIº Trimestre","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart2","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"\n                                                                Iº Trimestre\n                                                            ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                                IIº Trimestre\n                                                            ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                                IIIº Trimestre\n                                                            ","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart3","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Iº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIIº Trimestre","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart4","height":"70"}}}]}}]}]}},{"tag":"div","attr":{"class":"swiper-slide"},"children":{"tag":"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-ban"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Avaliação disciplinar"}}]}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-globe"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Avaliação global"}}]}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"row","style":"padding:14px"},"children":[{"tag":"div","attr":{"class":"col-lg-2 rank-icon-class"},"children":{"tag":"span","attr":{"class":"icon-graph"}}},{"tag":"div","attr":{"class":"col-lg-10 rank-holder"},"children":{"tag":"span","content":"Em relação ao trimestre anterior"}}]}}]},{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Iº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIIº Trimestre","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart2","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"\n                                                        Iº Trimestre\n                                                    ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                        IIº Trimestre\n                                                    ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                        IIIº Trimestre\n                                                    ","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart3","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-speedometer"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Iº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIº Trimestre","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"IIIº Trimestre","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart4","height":"70"}}}]}}]}]}}]}]},{"tag":"div","attr":{"class":"row","style":"position:relative;top:-60px; left:-60px ;margin-top:25px;margin-left:490px"},"children":[{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"button","attr":{"class":"contact100-btn-show btn-show-0"},"children":{"tag":"i","attr":{"class":"icon-arrow-left arrow-dirc-icons-1","aria-hidden":"true"}}}},{"tag":"div","attr":{"class":"col-lg-4","style":"position:relative;left:10px"},"children":{"tag":"button","attr":{"class":"contact100-btn-show btn-show-1"},"children":{"tag":"i","attr":{"class":"icon-layers arrow-dirc-icons-2","aria-hidden":"true"}}}},{"tag":"div","attr":{"class":"col-lg-4","style":"position:relative;left:20px"},"children":{"tag":"button","attr":{"class":"contact100-btn-show btn-show-2"},"children":{"tag":"i","attr":{"class":"icon-arrow-right arrow-dirc-icons-3","aria-hidden":"true"}}}}]}]}




  }

));

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
    document.querySelector(".breadcrumb").querySelectorAll("li")[3].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_minipautas";
    document.querySelector(".breadcrumb").querySelectorAll("li")[4].querySelector("a").href = "#";
    document.querySelector(".breadcrumb").querySelectorAll("li")[5].querySelector("a").href = "#";

});

socket.on('dadosFaltas', function(data){

  (function ($) {
      "use strict";


      /*==================================================================
      [ Show / hide contact ]*/
      $('.btn-hide-contact100').on('click', function(){
        $('.container-contact100').fadeOut(300);
      });

      $(document).ready(function(){

        var turma_classe = document.querySelectorAll(".h4")[0].innerText;
        var ensino_tecnico = false, ensino_primario = false;

        if (turma_classe.slice(0,2) == '5ª' || turma_classe.slice(0,2) == '6ª' || turma_classe.slice(0,2) == '7ª'|| turma_classe.slice(0,2) == '8ª' || turma_classe.slice(0,2) == '9ª' || turma_classe.slice(0,3) == '10ª' || turma_classe.slice(0,3) == '11ª' || turma_classe.slice(0,3) == '12ª' || turma_classe.slice(0,3) == '13ª') {

          ensino_tecnico = true;

            $('.modal-btn').on('click', function () {
                $('#ens-tec').fadeIn(300);

                // Testimonial Slider
                var swiper = new Swiper('.testimonial-slider', {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    //effect: 'fade',
                    speed: 800,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                });

            });


        } else  {

          ensino_primario = true;

            $('.modal-btn').on('click', function () {
                $('#ens-pri').fadeIn(300);

                // Testimonial Slider
                var swiper = new Swiper('.testimonial-slider', {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: true,
                    //effect: 'fade',
                    speed: 800,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true
                    }
                });

            });

        }

        document.querySelector(".table").querySelector("tbody").onclick = function(event) {

          //$('.container-contact100').fadeIn(300);
          document.querySelector('.modal-btn').click();

          var clickCount = 1;

          if (ensino_primario) {

              document.querySelector(".student_photo").src = event.target.parentElement.parentElement.parentElement.querySelector("img").src;

              document.querySelectorAll(".name-holder span")[1].innerText = event.target.parentElement.parentElement.parentElement.querySelector(".student_name_holder").innerText;

              document.querySelector(".number-holder").innerText = event.target.parentElement.parentElement.parentElement.querySelector(".actual-number-holder").innerText + "";
              //actual-number-holder

              var thisStudentCode = event.target.parentElement.parentElement.parentElement.querySelector(".falta_container").getAttribute("student_cod");

              // align the Number
              if (event.target.parentElement.parentElement.parentElement.querySelector(".actual-number-holder").innerText < 10) {
                document.querySelector(".number-holder").style.left = "35%"
              } else {
                document.querySelector(".number-holder").style.left = "20%"
              }

          } else if (ensino_tecnico) {

              document.querySelectorAll(".student_photo")[1].src = event.target.parentElement.parentElement.parentElement.querySelector("img").src;

              document.querySelectorAll(".name-holder span")[3].innerText = event.target.parentElement.parentElement.parentElement.querySelector(".student_name_holder").innerText;

              document.querySelectorAll(".number-holder")[1].innerText = event.target.parentElement.parentElement.parentElement.querySelector(".actual-number-holder").innerText + "";
              //actual-number-holder

              ///////////////////////////////////////////////////////////////////////////////////*
              /* Representação dos dados dos estudantes atravéz de gráficos                     */
              //////////////////////////////////////////////////////////////////////////////////*/
              var chartOne = new Chart(document.querySelectorAll("#chart2")[5], {
                type: 'bar',
                data: {
                  labels: ['January', 'February', 'March', 'April'],
                  datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80, 85]
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

              // align the numbers
              alignNumberHolder();

              // Right arrow for the next student
              document.querySelectorAll(".arrow-dirc-icons-3")[1].onclick = function() {
                feedStudentData(event, ((event.target.parentElement.parentElement.parentElement.querySelector(".actual-number-holder").innerText - 1) + clickCount));

                if (clickCount == (event.target.parentElement.parentElement.parentElement.parentElement.children.length - 1)) {
                  ;
                } else {
                  clickCount++;
                }


              }

              // left arrow for previous student
              document.querySelectorAll(".arrow-dirc-icons-1")[1].onclick = function() {
                clickCount--;
                feedStudentData(event, ((event.target.parentElement.parentElement.parentElement.querySelector(".actual-number-holder").innerText - 1) + clickCount));
              }

          }

          function alignNumberHolder() {
            // align the Number
            if (event.target.parentElement.parentElement.parentElement.querySelector(".actual-number-holder").innerText < 10) {
              document.querySelectorAll(".number-holder")[1].style.left = "35%";
            } else {
              document.querySelectorAll(".number-holder")[1].style.left = "20%";
            }
          }

          //////////////////////////////////////////////////////////////////////////
          // Esta função é quem da informações do estudante ao modalWindow       //
          function feedStudentData(event, index) {

            // align the numbers
            if (index >= 9) document.querySelectorAll(".number-holder")[1].style.left = "25%";
            if (index < 9) document.querySelectorAll(".number-holder")[1].style.left = "35%"

            document.querySelectorAll(".student_photo")[1].src = event.target.parentElement.parentElement.parentElement.parentElement.children[index].querySelector("img").src;
            document.querySelectorAll(".name-holder span")[3].innerText = event.target.parentElement.parentElement.parentElement.parentElement.children[index].querySelector(".student_name_holder").innerText;
            document.querySelectorAll(".number-holder")[1].innerText = event.target.parentElement.parentElement.parentElement.parentElement.children[index].querySelector(".actual-number-holder").innerText + "";

            ///////////////////////////////////////////////////////////////////////////////////*
            /* Representação dos dados dos estudantes atravéz de gráficos                     */
            //////////////////////////////////////////////////////////////////////////////////*/
            var chartOne = new Chart(document.querySelectorAll("#chart2")[5], {
              type: 'bar',
              data: {
                labels: ['Matemática', 'Economia', 'DLC', 'AEF'],
                datasets: [{
                  label: 'My First dataset',
                  backgroundColor: 'rgba(255,255,255,.2)',
                  borderColor: 'rgba(255,255,255,.55)',
                  data: [78, 81, 80, 85]
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



          }

          //////////////////////////////////////////////////////////////////////////
          ///// seta os elementos deste modal para um estudante em particular //////
          /////////////////////////////////////////////////////////////////////////

          var thisStudentCode = event.target.parentElement.parentElement.parentElement.querySelector(".falta_container").getAttribute("student_cod");

          var allFaults = data[0].filter((student)=> student['turma_id'] == linkURL);
          var thisStudent = allFaults.filter((student)=> student['estudantecod'] == thisStudentCode);

          // mostra os estudantes desta classe
          console.log(thisStudent);

          // Testimonial Slider
          var swiper = new Swiper('.testimonial-slider', {
              slidesPerView: 1,
              spaceBetween: 0,
              loop: true,
              //effect: 'fade',
              speed: 800,
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true
              }
          });

        };

      });

  })(jQuery);


  if (data.length == 2 && data[1] == true) {

    // filtra as faltas para somente os estudantes desta turma
    var thisClass = data[0].filter((each)=>{
        return each["turma_id"] == windows.location.pathname.split("_")[1] && data[1];
    });

    console.log(thisClass);

    // armazena os dados de todos os estudantes da turma nesta variavel
    var ALL_STUDENTS = document.querySelectorAll(".falta_container");
    var SUM_FAULTS = 0;

    // para cada estudante com base no seu código adicione as suas faltas
    for (let counter = 0; counter < ALL_STUDENTS.length; counter++) {

      var sum = 0;
      var thisStudent = thisClass.filter((each)=>{
        return ALL_STUDENTS[counter].getAttribute("student_cod") == each['estudantecod'];
      });

      thisStudent.forEach((each)=>{
        sum += each['ausencia'] + each['material'] + each['disciplinar'];
      });

      ALL_STUDENTS[counter].innerHTML = sum;

      // pinta o número de faltas a vermelho quando atinjir a sifra
      // de 5 faltas injustificadas
      if (ALL_STUDENTS[counter].innerHTML > 5) {
        ALL_STUDENTS[counter].style.color = "red";
      }
      ALL_STUDENTS[counter].style.fontWeight = "bold";
    }


  } else {

    // filtra as faltas para somente os estudantes desta turma
    var thisClass = data[0].filter((each)=>{
        return each["turma_id"] == windows.location.pathname.split("_")[1];
    });

    // armazena os dados de todos os estudantes da turma nesta variavel
    var ALL_STUDENTS = document.querySelectorAll(".falta_container");
    console.log(ALL_STUDENTS);
    var SUM_FAULTS = 0;

    // para cada estudante com base no seu código adicione as suas faltas
    for (let counter = 0; counter < ALL_STUDENTS.length; counter++) {

      var sum = 0;
      var thisStudent = thisClass.filter((each)=>{
        return ALL_STUDENTS[counter].getAttribute("student_cod") == each['estudantecod'];
      });

      thisStudent.forEach((each)=>{
        sum += each['ausencia'] + each['material'] + each['disciplinar'];
      });

      ALL_STUDENTS[counter].innerHTML = sum;

      // pinta o número de faltas a vermelho quando atinjir a sifra
      // de 5 faltas injustificadas
      if (ALL_STUDENTS[counter].innerHTML > 5) {
        ALL_STUDENTS[counter].style.color = "red";
      }

      ALL_STUDENTS[counter].style.fontWeight = "bold";

    }

  }

});
