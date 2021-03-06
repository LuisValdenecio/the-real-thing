/*
  the presentation login behind the searchCursos
*/

const UIelements = [

    {

      tag:"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-md-12"},"children":{"tag":"div","attr":{"class":"card-body"},"children":{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-sm-12"},"children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-sm-6"},"children":{"tag":"div","attr":{"class":"callout callout-info"},"children":[{"tag":"small","content":"Turmas registadas","attr":{"class":"text-muted"}},{"tag":"br"},{"tag":"strong","content":"2","attr":{"class":"h4"}},{"tag":"div","attr":{"class":"chart-wrapper"},"children":{"tag":"canvas","attr":{"id":"sparkline-chart-1","width":"100","height":"30"}}}]}}},{"tag":"br"},{"tag":"br"},{"tag":"table","attr":{"class":"table table-responsive-sm table-hover table-outline mb-0"},"children":{"tag":"tbody"}}]}}}}

    }

];

document.querySelector(".container-fluid").appendChild(objectToHTML(
  UIelements[0]
));

socket.on('classesInfo', function(data){

  document.querySelector(".callout-info strong").innerText = data.length;

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
              "tag" : "a",
              "attr" : {
                "href" : "/turma_"+data[turmas]["turma_id"]
              },
              "children" :
              {"tag":"td",
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
                      "content":(data[turmas]["nome_class"] == '10ª' || data[turmas]["nome_class"] == '11ª'|| data[turmas]["nome_class"] == '12ª' || data[turmas]["nome_class"] == '13ª') ? data[turmas]["nome_class"]+"Classe" : data[turmas]["nome_class"]
                    },
                    {
                      "tag":"span"
                    }
                  ]
                }
              ]}
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
                  "content":"Nome do Curso"
                },
                {
                  "tag":"div",
                  "attr":{
                    "class":"small text-muted"
                  },
                  "children":[
                    {
                      "tag":"span",
                      "content":data[turmas]["curso_nome"]
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

  // inicialmente so para a criacao dos links
  document.querySelectorAll(".class-entry-row").forEach((each)=>{
    // create a link fo each row on the table
    document.querySelector(".container-fluid").appendChild(objectToHTML(
      {
        tag : "a",
        attr : {
          "href" : "/turma_"+each.getAttribute("turma-id"),
          "class" : "linkToTurma"
        }
      }
    ));

  });

  // ligar os links com as linhas da tabela
  var rowsLenght = document.querySelectorAll(".class-entry-row");
  for (let counter = 0; counter < rowsLenght.length; counter++) {
    rowsLenght[counter].onclick = function() {
      document.querySelectorAll(".linkToTurma")[counter].click();
    }
  }
}
