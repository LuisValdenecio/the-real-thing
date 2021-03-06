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
              "attr":{"class":"text-center"},
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


// modal para estudantes do ensino primário
document.querySelector("body").appendChild(objectToHTML(

  {

    tag:"div","attr":{"class":"container-contact100","style":"display: none;"},"children":{"tag":"div","attr":{"class":"wrap-contact100 row"},"children":[{"tag":"button","attr":{"class":"btn-hide-contact100"},"children":{"tag":"i","attr":{"class":"icon-close"}}},{"tag":"div","attr":{"class":"contact100-form-title","style":"background-image: url(https://defendernetwork.com/wp-content/uploads/2017/07/GroupOfStudents-e1359494542702.jpg);"},"children":{"tag":"span","content":"Relatório académico"}},{"tag":"div","attr":{"class":"swiper-container testimonial-slider"},"children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-12 col-md-6 col-lg-12"},"children":{"tag":"div","attr":{"class":"team-member"},"children":{"tag":"img","attr":{"src":"","alt":"fotografia do Estudante","class":"student_photo"}}}}},{"tag":"div","attr":{"class":"row name-holder"},"children":{"tag":"div","attr":{"class":"col-lg-6 offset-lg-3"},"children":{"tag":"span","content":""}}},{"tag":"div","attr":{"class":"swiper-wrapper"},"children":[{"tag":"div","attr":{"class":"swiper-slide"},"children":{"tag":"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"card"},"children":{"tag":"div","attr":{"class":"card-body p-0 d-flex align-items-center"},"children":[{"tag":"i","attr":{"class":"icon-graph bg-danger p-4 px-5 font-2xl mr-3"}},{"tag":"div","children":{"tag":"div","content":"\n                                                    Desempenho ao nível de notas\n                                                ","attr":{"class":"text-muted text-uppercase font-weight-bold small","style":"font-size:15px"}}}]}}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"card"},"children":{"tag":"div","attr":{"class":"card-body p-0 d-flex align-items-center"},"children":[{"tag":"i","attr":{"class":"fa fa-hand-stop-o bg-danger p-4 px-5 font-2xl mr-3"}},{"tag":"div","children":{"tag":"div","content":"\n                                                Grau de participação nas Aulas\n                                            ","attr":{"class":"text-muted text-uppercase font-weight-bold small","style":"font-size:15px"}}}]}}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"card"},"children":{"tag":"div","attr":{"class":"card-body p-0 d-flex align-items-center"},"children":[{"tag":"i","attr":{"class":"fa fa-calendar-times-o bg-danger p-4 px-5 font-2xl mr-3"}},{"tag":"div","children":{"tag":"div","content":"\n                                                    Situação das Faltas\n                                                ","attr":{"class":"text-muted text-uppercase font-weight-bold small","style":"font-size:15px"}}}]}}}]},{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-layers"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Action","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"Another action","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"Something else here","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart2","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-layers"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"\n                                                                Action\n                                                            ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                                Another action\n                                                            ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                                Something else here\n                                                            ","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart3","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-layers"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Action","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"Another action","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"Something else here","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart4","height":"70"}}}]}}]}]}},{"tag":"div","attr":{"class":"swiper-slide"},"children":[{"tag":"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"card"},"children":{"tag":"div","attr":{"class":"card-body p-0 d-flex align-items-center"},"children":[{"tag":"i","attr":{"class":"icon-graph bg-danger p-4 px-5 font-2xl mr-3"}},{"tag":"div","children":{"tag":"div","content":"\n                                                    Avaliação Disciplinar\n                                                ","attr":{"class":"text-muted text-uppercase font-weight-bold small","style":"font-size:15px"}}}]}}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"card"},"children":{"tag":"div","attr":{"class":"card-body p-0 d-flex align-items-center"},"children":[{"tag":"i","attr":{"class":"fa fa-hand-stop-o bg-danger p-4 px-5 font-2xl mr-3"}},{"tag":"div","children":{"tag":"div","content":"\n                                                    Avaliação Global\n                                                ","attr":{"class":"text-muted text-uppercase font-weight-bold small","style":"font-size:15px"}}}]}}},{"tag":"div","attr":{"class":"col-6 col-lg-4"},"children":{"tag":"div","attr":{"class":"card"},"children":{"tag":"div","attr":{"class":"card-body p-0 d-flex align-items-center"},"children":[{"tag":"i","attr":{"class":"fa fa-calendar-times-o bg-danger p-4 px-5 font-2xl mr-3"}},{"tag":"div","children":{"tag":"div","content":"\n                                                   Em relação ao trimestre anterior\n                                                ","attr":{"class":"text-muted text-uppercase font-weight-bold small","style":"font-size:15px"}}}]}}}]},{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-layers"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Action","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"Another action","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"Something else here","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart2","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-layers"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"\n                                                        Action\n                                                    ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                        Another action\n                                                    ","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"\n                                                        Something else here\n                                                    ","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart3","height":"70"}}}]}},{"tag":"div","attr":{"class":"col-lg-4"},"children":{"tag":"div","attr":{"class":"card text-white bg-danger","style":"border: none"},"children":[{"tag":"div","attr":{"class":"card-body pb-0"},"children":[{"tag":"div","attr":{"class":"btn-group float-right"},"children":[{"tag":"button","attr":{"class":"btn btn-transparent dropdown-toggle p-0","type":"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"children":{"tag":"i","attr":{"class":"icon-layers"}}},{"tag":"div","attr":{"class":"dropdown-menu dropdown-menu-right"},"children":[{"tag":"a","content":"Action","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"Another action","attr":{"class":"dropdown-item","href":"#"}},{"tag":"a","content":"Something else here","attr":{"class":"dropdown-item","href":"#"}}]}]},{"tag":"div","content":"9","attr":{"class":"text-value"}},{"tag":"div","content":"Total de Faltas"}]},{"tag":"div","attr":{"class":"chart-wrapper mt-3 mx-3","style":"height:70px;"},"children":{"tag":"canvas","attr":{"class":"chart","id":"chart4","height":"70"}}}]}}]}]},{"tag":"div","content":"\n\n                    ","attr":{"class":"swiper-slide"}}]}]}]}]}



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

        document.querySelector(".table").querySelector("tbody").onclick = function(event) {

          $('.container-contact100').fadeIn(300);

          //////////////////////////////////////////////////////////////////////////
          ///// seta os elementos deste modal para um estudante em particular //////
          //////////////////////////////////////////////////////////////////////////
          document.querySelector(".student_photo").src = event.target.parentElement.parentElement.parentElement.querySelector("img").src;
          document.querySelector(".name-holder span").innerText = event.target.parentElement.parentElement.parentElement.querySelector(".student_name_holder").innerText;

          var thisStudentCode = event.target.parentElement.parentElement.parentElement.querySelector(".falta_container").getAttribute("student_cod");


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
    var thisClass = data.filter((each)=>{
        return each["turma_id"] == windows.location.pathname.split("_")[1];
    });

    console.log(thisClass);

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
