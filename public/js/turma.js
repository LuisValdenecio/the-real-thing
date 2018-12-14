/*

  The logic behind turma.js
  author  : Luís Valdenêncio
  Date    : 08/12/2018

*/


// for path retrieval
var windows = this;

const UIelements = [

    {
      tag:"div","attr":{"class":"teachers"},"children":{"tag":"div","attr":{"class":"container"},"children":{"tag":"div","attr":{"class":"row teachers_row"}}}
    }

];

document.querySelector(".container-fluid").appendChild(objectToHTML(
  UIelements[0]
));

socket.on('turmaInfo', function(data){
  for (let subjectData = 0; subjectData < data.length; subjectData++) {

    document.querySelector(".teachers_row").appendChild(objectToHTML(

      {
        tag : "div",
        attr : {
          class : "col-lg-4 col-md-6"
        },
        children : {
          tag : "div",
          attr : {
            class : "teacher d-flex flex-row align-items-center justify-content-start"
          },
          children : [
            {
              tag : "div",
              attr : {
                class : "teacher_image"
              },
              children : {
                tag : "div",
                children : {
                  tag : "img",
                  attr : {
                    src : "public/images/instructor_4.jpg"
                  }
                }
              }
            },
            {
              tag : "div",
              attr : {
                class : "teacher_content"
              },
              children: [
                {
                  tag : "div",
                  attr : {
                    class : "teacher_name",
                  },
                  children : {
                    tag : "a",
                    content : `Professor/a de:`,
                    attr : {
                      class : "formMOdal"
                    }
                  }
                },
                {
                  tag : "div",
                  content : data[subjectData]["disciplina_nome"],
                  attr : {
                    class : "teacher_title"
                  }

                }
              ]
            }
          ]
        }
      }

    ));

  }
});

// atach the modal button
document.querySelector(".teachers_row").appendChild(objectToHTML(
  {
    tag : "button",
    attr : {
      class : "btn btn-primary btn-lg formModalBttn",
      "data-toggle" : "modal",
      "data-target" : "#myModal",
      style : "display:none"
    }
  }
));

var subject_name;


document.querySelector("body").onload = function() {

  var links = document.querySelectorAll(".formMOdal");
  for (let index = 0; index < links.length; index++) {
    links[index].onclick = function() {
        document.querySelector(".formModalBttn").click();
        document.querySelectorAll(".hidden-group input")[0].value = document.querySelectorAll(".formMOdal")[index].parentElement.parentElement.childNodes[1].innerText;
    }
  }

}

// class registration modal
document.querySelector(".teachers_row").appendChild(objectToHTML(
  {

    tag:"div","attr":{"class":"modal fade","id":"myModal","tabindex":"-1","role":"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true","style":"display: none;"},"children":{"tag":"div","attr":{"class":"modal-dialog"},"children":{"tag":"div","attr":{"class":"modal-content"},"children":{"tag":"div","attr":{"class":"modal-body"},"children":{"tag":"div","attr":{"class":"container-fluid"},"children":[{"tag":"div","attr":{"class":"row photo-stuff"},"children":{"tag":"div","attr":{"class":"col-lg-12"},"children":[{"tag":"div","attr":{"id":"profile","class":""},"children":{"tag":"label","content":"Click para carregar uma fotografia"}},{"tag":"div","attr":{"class":"subject_name"},"children":{"tag":"span"}}]}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12"},"children":{"tag":"div","attr":{"class":"editable"},"children":{"tag":"form","attr":{"class":"form-horizontal","role":"form","action":"/","method":"post","enctype":"multipart/form-data"},"children":[{"tag":"div","attr":{"class":"input-group mb-3"},"children":[{"tag":"div","attr":{"class":"input-group-prepend"},"children":{"tag":"span","attr":{"class":"input-group-text"},"children":{"tag":"i","content":"\n                                                    ","attr":{"class":"icon-credit-card"}}}},{"tag":"input","attr":{"type":"text","class":"form-control","placeholder":"primeiro e último nome","name":"name"}}]},{"tag":"div","attr":{"class":"input-group mb-3"},"children":[{"tag":"div","attr":{"class":"input-group-prepend"},"children":{"tag":"span","attr":{"class":"input-group-text"},"children":{"tag":"i","content":"\n                                                        @\n                                                    ","attr":{"class":""}}}},{"tag":"input","attr":{"type":"text","class":"form-control","placeholder":"correio electrónico","name":"email"}}]},{"tag":"div","attr":{"class":"input-group mb-3"},"children":[{"tag":"div","attr":{"class":"input-group-prepend"},"children":{"tag":"span","attr":{"class":"input-group-text"},"children":{"tag":"i","content":"\n                                                    ","attr":{"class":"icon-user"}}}},{"tag":"input","attr":{"type":"text","class":"form-control","placeholder":"eg. Luis200","name":"username"}}]},{"tag":"div","attr":{"class":"input-group mb-3"},"children":[{"tag":"div","attr":{"class":"input-group-prepend"},"children":{"tag":"span","attr":{"class":"input-group-text"},"children":{"tag":"i","content":"\n                                                    ","attr":{"class":"icon-lock"}}}},{"tag":"input","attr":{"type":"password","class":"form-control","placeholder":"Insira a palavra passe","name":"password"}}]},{"tag":"div","attr":{"class":"form-group hidden-group"},"children":[{"tag":"input","attr":{"type":"text","class":"form-control","name":"subjectName"}},{"tag":"input","attr":{"type":"text","class":"form-control","name":"courseName"}},{"tag":"input","attr":{"type":"text","class":"form-control","name":"classCod"}},{"tag":"input","attr":{"type":"text","class":"form-control","name":"className"}}]},{"tag":"button","content":"Salvar professor","attr":{"type":"submit","class":"btn"}},{"tag":"div","attr":{"class":"form-group"},"children":{"tag":"input","attr":{"id":"mediaFile","type":"file","name":"imageupload"}}}]}}}}]}}}}


  }
));

socket.on('classesInfo', function(data){

  var thisClass = data.filter((each)=>{
      return each["turma_id"] == windows.location.pathname.split("_")[1]
  });

  console.log(thisClass[0]);

  // setar os restantes valores dos hidden inputs
  document.querySelectorAll(".hidden-group input")[1].value = thisClass[0]["curso_nome"];
  document.querySelectorAll(".hidden-group input")[2].value = thisClass[0]["turma_id"];
  document.querySelectorAll(".hidden-group input")[3].value = thisClass[0]["nome_class"];

  document.querySelector(".form-horizontal").setAttribute("action", "/turma_"+data[0]["turma_id"]);
});
