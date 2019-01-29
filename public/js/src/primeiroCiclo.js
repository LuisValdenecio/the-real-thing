/*
  template format logic
  author: Luís Valdenêncio
  Date : 08/12/2018
*/

const UIelements = [

    {

      tag:"div","attr":{"class":"container"},"children":[{"tag":"div","attr":{"class":""},"children":{"tag":"div","attr":{"class":"row","style":"padding-top:20px"},"children":{"tag":"div","attr":{"class":"col-md-12 col-lg-12"},"children":{"tag":"div","attr":{"class":"alert alert-warning"},"children":[{"tag":"h4","children":[{"tag":"i","attr":{"class":"fa fa-warning"}},{"tag":"span","content":"\"Aviso!\""}]},{"tag":"h6","content":"Clique em um retângulo para criar uma turma nova, para ver turmas existentes, clique no eclipse no canto superior esquerdo."}]}}}},{"tag":"div","attr":{"class":"row","style":"padding-top: 20px"},"children":[{"tag":"div","attr":{"class":"col-md-4 col-lg-4"},"children":{"tag":"div","attr":{"class":"well","id":"electr"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12"},"children":{"tag":"a","attr":{"href":"/turmas","class":"searchTurma"},"children":{"tag":"i","attr":{"class":"icon-options corner-icon-option"}}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"icon-puzzle"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"7ª Classe","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-4 col-lg-4"},"children":{"tag":"div","attr":{"class":"well","id":"electr"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12"},"children":{"tag":"a","attr":{"href":"/turmas","class":"searchTurma"},"children":{"tag":"i","attr":{"class":"icon-options corner-icon-option"}}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"icon-puzzle"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"8ª Classe","attr":{"class":"course-title"}}}}]}}},{"tag":"div","attr":{"class":"col-md-4 col-lg-4"},"children":{"tag":"div","attr":{"class":"well","id":"electr"},"children":{"tag":"div","children":[{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12"},"children":{"tag":"a","attr":{"href":"/turmas","class":"searchTurma"},"children":{"tag":"i","attr":{"class":"icon-options corner-icon-option"}}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12  course-icon","style":"padding: 0px"},"children":{"tag":"i","attr":{"class":"icon-puzzle"}}}},{"tag":"div","attr":{"class":"row"},"children":{"tag":"div","attr":{"class":"col-lg-12 col-md-12","style":"padding: 0px"},"children":{"tag":"span","content":"9ª Classe","attr":{"class":"course-title"}}}}]}}}]}]

    }

]

document.querySelector(".container-fluid").appendChild(objectToHTML(
  UIelements[0]
));


/**********************************************************************************

**********************************************************************************/


var wells = document.querySelectorAll(".well"),
    home_button = document.querySelector(".home_button");

    for (let counter = 0; counter < wells.length; counter++) {
    //wells.forEach((each) => {
        wells[counter].addEventListener('click', () => {
            var classRegs = objectToHTML({
              tag : "button",
              attr : {
                class : "btn btn-primary btn-lg",
                "data-toggle" : "modal",
                "data-target" : "#myModal",
                style : "display:none"
              }
            });

            // class registration modal
            var theModal = objectToHTML({

              tag:"div","attr":{"class":"modal fade","id":"myModal","tabindex":"-1","role":"dialog","aria-labelledby":"myModalLabel","aria-hidden":"true","style":"display: none;"},"children":{"tag":"div","attr":{"class":"modal-dialog","role":"document"},"children":{"tag":"div","attr":{"class":"modal-content"},"children":[{"tag":"div","attr":{"class":"modal-header"},"children":{"tag":"div","children":[{"tag":"h4","content":"Crie uma turma","attr":{"class":"modal-title"}},{"tag":"span","content":"selecione uma classe para criar uma turma do curso técnico de"},{"tag":"span","attr":{"class":"modal-title course-holder"}}]}},{"tag":"div","attr":{"class":"modal-body"},"children":{"tag":"form","attr":{"role":"form","method":"post","action":"/tecnico"},"children":[{"tag":"div","attr":{"class":"form-group"},"children":{"tag":"div","attr":{"class":"alert alert-warning"},"children":[{"tag":"h4","children":[{"tag":"i","attr":{"class":"fa fa-warning"}},{"tag":"span","content":"\"Aviso!\""}]},{"tag":"h6","content":"\n                                        As turmas da mesma classe e curso, serão\n                                        nomeadas por ordem de criação.\"\n                                    "}]}},{"tag":"div","attr":{"class":"form-group"},"children":[{"tag":"label","content":"Selecione uma classe","attr":{"for":"name","class":"classe", "style" : "display:none"}},{"tag":"div","attr":{"class":"form-group", "style" : "display:none"},"children":[{"tag":"label","attr":{"class":"checkbox-inline"},"children":[{"tag":"input","attr":{"type":"checkbox","id":"inlineCheckbox1","value":"option1","name":"10ªClasse"}},{"tag":"span","content":"10ª Classe"}]},{"tag":"label","attr":{"class":"checkbox-inline"},"children":[{"tag":"input","attr":{"type":"checkbox","id":"inlineCheckbox2","value":"option2","name":"11ªClasse"}},{"tag":"span","content":"11ª Classe"}]},{"tag":"label","attr":{"class":"checkbox-inline"},"children":[{"tag":"input","attr":{"type":"checkbox","id":"inlineCheckbox3","value":"option3","name":"12ªClasse"}},{"tag":"span","content":"12ª Classe"}]},{"tag":"label","attr":{"class":"checkbox-inline"},"children":[{"tag":"input","attr":{"type":"checkbox","id":"inlineCheckbox3","value":"option3","name":"13ªClasse"}},{"tag":"span","content":"13ª Classe"}]}]},{"tag":"div","attr":{"class":"form-group hidden-form"},"children":[{"tag":"input","attr":{"type":"text","value":"option1","name":"classe"}},{"tag":"input","attr":{"type":"text","value":"option1","name":"curso"}}]}]}]}},{"tag":"div","attr":{"class":"modal-footer"},"children":[{"tag":"button","content":"Cancelar","attr":{"class":"btn btn-secondary","type":"button","data-dismiss":"modal"}},{"tag":"button","content":"Criar turma","attr":{"class":"btn btn-primary","type":"button"}}]}]}}


            });

            document.querySelector("body").appendChild(theModal);
            document.querySelector("body").appendChild(classRegs);
            document.querySelector(".course-holder").innerText = ""+wells[counter].innerText;

            // seta o valor do input nome do curso
            document.querySelectorAll(".hidden-form input")[0].value = document.querySelector(".course-holder").innerText.slice(0, document.querySelector(".course-holder").innerText.length - 1);
            document.querySelectorAll(".hidden-form input")[1].value = document.querySelector(".course-holder").innerText.slice(0, document.querySelector(".course-holder").innerText.length - 1);
            // seta o valor do input nome da classes

            var checks = document.querySelectorAll(".checkbox-inline input");

            // esse formGroup é para os inputs dos nomes das disciplinas
            var hiddenInputs = objectToHTML({
              tag : "div",
              attr : {
                class : "form-group",
                style : "display:none"
              }
            });

            classRegs.click();

            getTheInput(
              otherForms(
                [
                  cursos[document.querySelector(".course-holder").innerText.slice(0, document.querySelector(".course-holder").innerText.length - 1)]
                ],
                document.querySelector(".course-holder").innerText.slice(0, document.querySelector(".course-holder").innerText.length - 1),
                null
              )
            ).forEach((each)=>{
              hiddenInputs.appendChild(each);
            });

            document.querySelector("form").appendChild(
              hiddenInputs
            );

            // when the main button is clicked, send the form to the server
            document.querySelector(".btn-primary").onclick = function() {
              document.querySelector("form").submit();

            }

        });
    }

    // this helper function helps to get rid of the header of a form and leave only
    // the input tags
    function getTheInput(form) {
      var inputs = [];

      for (let counter = 0; counter < form.children.length; counter++) {
        inputs.push(form.children[counter]);
      }

      return inputs;
    }
