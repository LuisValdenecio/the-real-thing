const windows = this;
const linkURL = windows.location.pathname.split("_")[1];


socket.on('livroDPonto', function(data){

  console.log(data);

  if (data.length == 2 && data[1] == true) {

    for (let counter = 0; counter < data[0].length; counter++) {

      document.querySelector(".subject-list-container .center-on-page").appendChild(objectToHTML({

        "tag" : "div",
        "attr" : {
          "class" : "col-lg-3"
        },
        "children" : [

          {

            "tag" : "input",
            "attr" : {
              "type" : "radio",
              "class" : "subjectInputs",
              "name" : "rb",
              "id" : `rb${counter+1}`
            }

          },

          {

            "tag" : "label",
            "content" : data[0][counter]["disciplina_nome"],
            "class" : "subjectLabels",
            "attr" : {
              "for" : `rb${counter+1}`
            }

          }

        ]

      }));

    }

  } else {

    for (let counter = 0; counter < data.length; counter++) {

      document.querySelector(".subject-list-container .center-on-page").appendChild(objectToHTML({

        "tag" : "div",
        "attr" : {
          "class" : "col-lg-3"
        },
        "children" : [

          {

            "tag" : "input",
            "attr" : {
              "type" : "radio",
              "class" : "subjectInputs",
              "name" : "rb",
              "id" : `rb${counter+1}`
            }

          },

          {

            "tag" : "label",
            "content" : data[counter]["disciplina_nome"],
            "class" : "subjectLabels",
            "attr" : {
              "for" : `rb${counter+1}`
            }

          }

        ]

      }));

    }

  }

});

socket.on('allStudents', function(data){

  //const infoDeClasse = document.querySelectorAll(".h4");

  var estaTurma = data.filter((aluno)=>{
    return aluno["turma_id"] == linkURL;
  });

  if (estaTurma.length) {

    // número de estudantes registados para esta turma
    //infoDeClasse[2].innerText = (!estaTurma.length) ? 0 : estaTurma.length;

    // caso existam estudantes registados, elimine o Aviso
    //document.querySelector(".warning-row").remove();

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
							"attr" : {
								"class":"text-center"
							},
							"children":
								{
									"tag":"select",
									"attr" : {
										"class" : "form-control"
									},
                  "children" : [

                    {
                      "tag" : "option",
                      "content" : "Mau"
                    },
                    {
                      "tag" : "option",
                      "content" : "Medíocre"
                    },
                    {
                      "tag" : "option",
                      "content" : "Suficiente"
                    },
                    {
                      "tag" : "option",
                      "content" : "Bom"
                    },
                    {
                      "tag" : "option",
                      "content" : "Muito bom"
                    }
                  ]
								}
						},
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                "tag":"input",
                "attr" : {
                  "type" : "text",
                  "style" : "width:50px"
                }
              }
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                "tag":"input",
                "attr" : {
                  "type" : "text",
                  "style" : "width:50px"
                }
              }
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                "tag":"input",
                "attr" : {
                  "type" : "text",
                  "style" : "width:50px"
                }
              }
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                "tag":"input",
                "attr" : {
                  "type" : "text",
                  "style" : "width:50px"
                }
              }
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                "tag":"input",
                "attr" : {
                  "type" : "text",
                  "style" : "width:50px"
                }
              }
            },
            {
              "tag":"td",
              "attr":{"class":"text-center"},
              "children":{
                "tag":"input",
                "attr" : {
                  "type" : "text",
                  "style" : "width:50px"
                }
              }

            }

            ]

      }

    ));

  }

});




socket.on('classesInfo', function(data){

  var thisClass = data.filter((each)=>{
      return each["turma_id"] == windows.location.pathname.split("_")[1]
  });

  // set the link for the estudante route
  document.querySelector(".breadcrumb").querySelectorAll("li")[0].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"];
  document.querySelector(".breadcrumb").querySelectorAll("li")[1].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_estudantes";
  document.querySelector(".breadcrumb").querySelectorAll("li")[2].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_livrodeponto";
  document.querySelector(".breadcrumb").querySelectorAll("li")[3].querySelector("a").href = "/turma_"+thisClass[0]["turma_id"]+"_minipautas";
  document.querySelector(".breadcrumb").querySelectorAll("li")[4].querySelector("a").href = "#";
  document.querySelector(".breadcrumb").querySelectorAll("li")[5].querySelector("a").href = "#";

});

socket.on('allStudents', function(data){
	console.log(data);
});
