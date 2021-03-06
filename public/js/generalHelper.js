/*
  Author : Luís Valdenêncio
  Date : Nov/2018
  purpose : place all helper functions solely in one place
*/

const socket = io();

// contabilidade e gestão
const cursos = {

  "Contabilidade" : [

     [
       "Língua Portuguêsa",
       "Língua Inglesa",
       "FAI",
       "Contabilidade Financeira",
       "Economia",
       "Matemática",
       "IAC",
       "DLC",
       "TCE",
       "Educação Física",
       "Empreendedorismo",
       "OGE"
     ],

     [
       "Língua Portuguêsa",
       "Língua Inglesa",
       "Direito",
       "FAI",
       "Educação Física",
       "Matemática",
       "IAC",
       "Contabilidade Financeira",
       "Administração de Empresas",
       "DLC"
     ],

     [
       "Matemática",
       "Direito",
       "Sociologia",
       "Contabilidade Financeira",
       "Contabilidade Analítica",
       "AEF",
       "Projécto Tecnológico",
       "DLF"
     ],

     [

       "História Económica e Social",
       "Matemática",
       "Projecto Tecnológico",
       "Estágio Currícular Supervisionado"
     ]

   ],

   "Informática" : [

     [
       "Língua Portuguêsa",
       "Língua Inglesa",
       "FAI",
       "SEAC",
       "TIC",
       "Matemática",
       "TLP",
       "Electrotecnia",
       "Física",
       "Química",
       "Educação Física",
       "Empreendedorismo"
     ],

     [
       "Língua Portuguêsa",
       "Língua Inglesa",
       "FAI",
       "Educação Física",
       "Matemática",
       "Física",
       "Química",
       "Electrotecnia",
       "Empreendedorismo",
       "Desenho Técnico",
       "TLP",
       "SEAC"
     ],

     [
       "Matemática",
       "Física",
       "OGI",
       "Empreendedorismo",
       "TLP",
       "TREI",
       "SEAC",
       "Projécto Tecnológico"
     ],

     [
       "Estágio Currícular Supervisionado",
       "Projécto Tecnológico",
       "Química",
       "Física",
       "Matemática"
     ]
  ],

  "OCC" : [
     [
       "Língua Portuguêsa",
       "Língua Inglesa",
       "FAI",
       "Educação Física",
       "Matemática",
       "Física",
       "Química",
       "Informática",
       "Empreendedorismo",
       "DCC",
       "TCC",
       "TCOE",
       "POL"
     ],

     [
       "Língua Portuguêsa",
       "Língua Inglesa",
       "FAI",
       "Educação Física",
       "Matemática",
       "Física",
       "Química",
       "Empreendedorismo",
       "DCC",
       "TCC",
       "TCOE",
       "POL"
     ],

     [
       "Matemática",
       "Física",
       "OGI",
       "Empreendedorismo",
       "DCC",
       "TCC",
       "TCOE",
       "TCO-IEU",
       "Técnicas de Topografia",
       "POL",
       "Projécto Tecnológico"
     ],

     [
       "Estágio Curricular Supervisionado",
       "Química",
       "Física",
       "Matemática",
       "Projecto Tecnológico",
       "T.Medições O",
     ]
  ],

  "Iniciação" : [
   "Comunicação Linguística",
   "Representação Matemática",
   "Aulas Práticas",
   "Psicomotricidade",
   "Língua Inglesa",
   "Expressão Musical",
   "Educação Manual e Plástica",
   "Meio Físico e Social",
   "Actividades Lúdicas"
  ],

  "1ª Classe" : [
   "Língua Portuguesa",
   "Matemática",
   "Educação Física",
   "Actividades Extracurriculares",
   "EMP",
   "Estudo do Meio",
   "Língua Inglesa",
   "Iniciação à Informática",
   "Aulas Práticas",
   "Educação Musical"
  ],

  "2ª Classe": [
   "Língua Portuguesa",
   "Língua Inglesa",
   "Aulas Práticas",
   "Matemática",
   "Iniciação à Informática",
   "EMP",
   "Estudo do Meio",
   "Actividades Extracurriculares",
   "Educação Física",
   "Educação Musical"
  ],

  "3ª Classe" : [
   "Língua Portuguesa",
   "Matemática",
   "Estudo do Meio",
   "EMP",
   "Educação Física",
   "Educação Musical",
   "Iniciação à Informática",
   "Aulas Práticas",
   "Actividades Extracurriculares",
   "Língua Inglesa"
  ],

  "4ª Classe" : [
   "Língua Portuguesa",
   "Matemática",
   "Aulas Práticas",
   "Estudo do Meio",
   "Actividades Extracurriculares",
   "EMP",
   "Ed. Musical",
   "Língua Inglesa",
   "Iniciação à Informática",
   "Educação Física"
  ],

  "5ª Classe" : [
    "Geografia",
    "Historia",
    "Língua Portuguesa",
    "EMC",
    "Língua Inglesa",
    "Matemática",
    "Ciências da Natureza",
    "Ed. Musical",
    "EMP",
    "Informática",
    "Educação Física"
  ],

  "6ª Classe" : [
   "Língua Portuguesa",
   "Língua Inglesa",
   "Matemática",
   "Ciências da Natureza",
   "História",
   "Geografia",
   "Educação Moral e Cívica",
   "Educação Manual e Plástica",
   "Educação Musical",
   "Educação Física",
   "Informática"
  ],

  "7ª Classe" : [
   "Língua Portuguesa",
   "Língua Inglesa",
   "Matemática",
   "Biologia",
   "Química",
   "Física",
   "História",
   "Geografia",
   "Educação Moral e Cívica",
   "Educação Visual e Plástica",
   "Educação Laboral",
   "Educação Musical",
   "Educação Física",
   "Informática"
  ],

  "8ª Classe" : [
   "Língua Portuguesa",
   "Língua Inglesa",
   "Matemática",
   "Biologia",
   "Química",
   "Física",
   "História",
   "Geografia",
   "Educação Moral e Cívica",
   "Educação Visual e Plástica",
   "Educação Laboral",
   "Educação Musical",
   "Educação Física",
   "Informática"
  ],

  "9ª Classe" : [
   "Língua Portuguesa",
   "Língua Inglesa",
   "Matemática",
   "Biologia",
   "Química",
   "Física",
   "História",
   "Geografia",
   "Educação Moral e Cívica",
   "Educação Visual e Plástica",
   "Educação Laboral",
   "Educação Musical",
   "Educação Física",
   "Informática"
  ]

};


const nacionalidade = {
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

const subjectUtf = {
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

// this function convert html into JSON like database
function htmlToObject(htmlElement, objectToReturn) {
    objectToReturn["tag"] = htmlElement.tagName.toLocaleLowerCase();

    // content attr
    if (htmlElement.innerText && htmlElement.children.length == 0) objectToReturn["content"] = htmlElement.innerText;

    // attr attr
    if (htmlElement.attributes.length) {
        objectToReturn["attr"] = {};

        for (var x of htmlElement.attributes) {
            objectToReturn["attr"][x.localName] = x.value;
        }
    }

    // children with recursion
    if (htmlElement.children.length) {
        // more than one children
        if (htmlElement.children.length > 1) {
            // recursion -- for tree structure creation
            objectToReturn["children"] = [];

            for (var child of htmlElement.children) {
                objectToReturn["children"].push(htmlToObject(child, {}));
            }

        }
        // just one child
        else if (htmlElement.children.length == 1) {
            var onlyChild = htmlToObject(htmlElement.children[0], {});
            objectToReturn["children"] = onlyChild;
        }
    }
    return objectToReturn;
}

// this function convert JSON like data into html
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

// this function deletes entirely every element of an array
function deleteHtmlArray(htmlArray) {
  for (let counter = 0; counter < htmlArray.length; counter++) {
    htmlArray[counter].remove();
  }

  if (htmlArray.length > 0) {
    deleteHtmlArray(htmlArray);
  }
}

// this function is pivotal when it comes to faultsData manipulation
function faultsDataManipulation(arrOfObj, studList) {

  // if data faults are non-existent, then do not continue
  if (arrOfObj.length == 0 ||  studList[0]["studentNumber"] == 0) return;

  // gather the estudante_cod of every student
  var arrayOfCods = [],
      studentFaults = [];

  // iterate over the number of students and fill in the arrayOfCods
  for (let counter = 0; counter < studList[0]["studentNumber"]; counter++) {
    arrayOfCods.push(arrOfObj[counter]["estudante_cod"]);
  }

  // for each particular "estudante_cod" associate a set of faults
  for (let counter = 0; counter < arrOfObj.length; counter++) {
    for (let innerCounter = 0; innerCounter < studList[0]["studentNumber"]; innerCounter++) {

      if (arrOfObj[counter]["estudante_cod"] == arrayOfCods[innerCounter]) {

          // first insertion
          if (studentFaults[innerCounter] || studentFaults[innerCounter] == 0) {
            studentFaults[innerCounter][arrayOfCods[innerCounter]] += sum(
              [
                arrOfObj[counter]["falta_indisciplinada"],
                arrOfObj[counter]["falta_ausencia"],
                arrOfObj[counter]["falta_material"]
              ]
            );
          }

          // non-first insertion
          else {
            studentFaults[innerCounter] = {};
            studentFaults[innerCounter][arrayOfCods[innerCounter]] = sum(
              [
                arrOfObj[counter]["falta_indisciplinada"],
                arrOfObj[counter]["falta_ausencia"],
                arrOfObj[counter]["falta_material"]
              ]
            );

          }
      }

    }
  }

  return [
    studentFaults
  ];
}

// this function sums a set of elements in a set
function sum(arr) {
  var sum = 0;
  for (let counter = 0; counter < arr.length; counter++) {
    sum += arr[counter];
  }
  return sum;
}

// this function is useful with indexes
function indexMirror(start, end, ele) {
  var eleIndex = start,
      plusCounter = 0;

  for (let counter = start; counter < end; counter++) {
    // return the ele index exactly when the element matches
    if (eleIndex == ele) {
      return plusCounter;
    }
    // increment the index so that it matches the ele
    eleIndex++;
    plusCounter++;
  }
}

/*
  this function creates a form and sends to the server the information it
  receives as an argument
*/
function dynamicForm(toSend, route) {

  var classes  = ["10ª", "11ª", "12ª", "13ª"];

  // create the form
  var formToSend = objectToHTML({
    tag : "form",
    attr : {
      "method" : "POST",
      "style" : "display : none",
      "action" : `${'/'}${route}`
    }
  });

  //////////////////////////////////////////////
  if (toSend == '') {


  }

  // 10ª Classe
  if (toSend[0].length > 0 && typeof toSend[0] != "string") {

    for (let innerCounter = 0; innerCounter < toSend[0].length; innerCounter++) {
      formToSend.appendChild(objectToHTML({
        tag : "input",
        attr : {
          type : "text",
          name : classes[0],
          value : toSend[0][innerCounter]
        }
      }));
    }

  }

  // 11ª classe
  if (toSend[1].length > 0 && typeof toSend[1] != "string") {

    for (let innerCounter = 0; innerCounter < toSend[1].length; innerCounter++) {

      formToSend.appendChild(objectToHTML({
        tag : "input",
        attr : {
          type : "text",
          name : classes[1],
          value : toSend[1][innerCounter]
        }
      }));
    }

  }

  // 11ª classe
  if (toSend[2].length > 0 && typeof toSend[1] != "string") {

    for (let innerCounter = 0; innerCounter < toSend[2].length; innerCounter++) {

      formToSend.appendChild(objectToHTML({
        tag : "input",
        attr : {
          type : "text",
          name : classes[2],
          value : toSend[2][innerCounter]
        }
      }));
    }

  }

  // 12ª classe
  if (toSend[3].length > 0 && typeof toSend[1] != "string") {

    for (let innerCounter = 0; innerCounter < toSend[3].length; innerCounter++) {

      formToSend.appendChild(objectToHTML({
        tag : "input",
        attr : {
          type : "text",
          name : classes[3],
          value : toSend[3][innerCounter]
        }
      }));

    }

  }

  return formToSend;

}


/*******************************************************************************
Esta função cria formulários do ensino primário e do primeiro ciclo
*******************************************************************************/
function otherForms(toSend, curso, route) {

    // create the form
    var formToSend = objectToHTML({
      tag : "form",
      attr : {
        "method" : "POST",
        "style" : "display : none",
        "action" : `${'/'}${route}`
      }
    });

    var classes  = [
        "Iniciação",
        "1ª Classe",
        "2ª Classe",
        "3ª Classe",
        "4ª Classe",
        "5ª Classe",
        "6ª Classe",
        "7ª Classe",
        "8ª Classe",
        "9ª Classe"
      ];

    if (toSend[0].length > 0 && typeof toSend[0] != "string") {

      for (let innerCounter = 0; innerCounter < toSend[0].length; innerCounter++) {

        formToSend.appendChild(objectToHTML({
          tag : "input",
          attr : {
            type : "text",
            name : curso,
            value : toSend[0][innerCounter]
          }
        }));

      }

    }

    return formToSend;
}
