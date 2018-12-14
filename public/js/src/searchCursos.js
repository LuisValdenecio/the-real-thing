/*
  the presentation login behind the searchCursos
*/

const UIelements = [

    {

      tag:"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12"},"children":{"tag":"div","attr":{"class":"card-body"},"children":{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-sm-12"},"children":[{"tag":"div","attr":{"class":"row"},"children":[{"tag":"div","attr":{"class":"col-sm-6"},"children":{"tag":"div","attr":{"class":"callout callout-info"},"children":[{"tag":"small","content":"Turmas registadas","attr":{"class":"text-muted"}},{"tag":"br"},{"tag":"strong","content":"2","attr":{"class":"h4"}},{"tag":"div","attr":{"class":"chart-wrapper"},"children":{"tag":"canvas","attr":{"id":"sparkline-chart-1","width":"100","height":"30"}}}]}},{"tag":"div","attr":{"class":"col-sm-6"},"children":{"tag":"div","attr":{"class":"callout callout-danger"},"children":[{"tag":"small","content":"curso:","attr":{"class":"text-muted"}},{"tag":"br"},{"tag":"strong","content":"Obras de construção civíl","attr":{"class":"h4"}},{"tag":"div","attr":{"class":"chart-wrapper"},"children":{"tag":"canvas","attr":{"id":"sparkline-chart-2","width":"100","height":"30"}}}]}}]},{"tag":"br"},{"tag":"br"},{"tag":"table","attr":{"class":"table table-responsive-sm table-hover table-outline mb-0"},"children":{"tag":"tbody"}}]}}}}
    }

];

document.querySelector(".container-fluid").appendChild(objectToHTML(
  UIelements[0]
));

socket.on('classesInfo', function(data){

  for (let turmas = 0; turmas < data.length; turmas++) {

    document.querySelector(".table-responsive-sm").appendChild(objectToHTML(

      {

        tag:"tr",
        "attr":
          {
            "class":"class-entry-row",
            "turma-id" : data[turmas]["turma_id"]
          },
          "children": [
            {
              "tag":"td",
              "children": [
                {
                  "tag":"div",
                  "content":"Nome da turma"
                },
                {
                  "tag":"div",
                  "attr":{"class":"small text-muted"},
                  "children": [
                    {
                      "tag":"span",
                      "content":data[turmas]["nome_class"]+"Classe"
                    },
                    {
                      "tag":"span"
                    }
                  ]
                }
              ]
            },
            {
              "tag":"td",
              "attr":{
                "class":"text-left"
              },
              "children":[
                {
                  "tag":"div",
                  "content":"Data de criação"
                },
                {
                  "tag":"div",
                  "attr":{
                    "class":"small text-muted"
                  },
                  "children":[
                    {
                      "tag":"span",
                      "content":data[turmas]["data_criacao"]
                    },
                    {
                      "tag":"span"
                    }
                  ]
                }
              ]
            },
            {
              "tag":"td",
              "attr":{
                "class":"text-left"
              },
              "children":[
                {
                  "tag":"div",
                  "content":"classe"
                },
                {
                  "tag":"div",
                  "attr":{
                    "class":"small text-muted"
                  },
                  "children":[
                    {
                      "tag":"span",
                      "content":data[turmas]["nome_class"]
                    },
                    {
                      "tag":"span"
                    }
                  ]
                }
              ]
            },
            {
              "tag":"td",
              "attr":{
                "class":"text-left"
              },
              "children":[
                {
                  "tag":"div",
                  "content":"Número de Estudantes"
                },
                {
                  "tag":"div",
                  "attr":{
                    "class":"small text-muted"
                  },
                  "children":[
                    {
                      "tag":"span",
                      "content":"New"
                    },
                    {
                      "tag":"span"
                    }
                  ]
                }
              ]
            }
          ]
      }

    ));
  }
});

document.querySelector("body").onload = function() {

  document.querySelectorAll(".class-entry-row").forEach((each)=>{
      each.addEventListener('click', function() {

        var linkToTurma = objectToHTML({
          tag : "a",
          attr : {
            href : "/turma_"+each.getAttribute("turma-id")
          }
        });

        linkToTurma.click();

      });
  });

}
