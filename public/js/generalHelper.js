/*
  Author : Luís Valdenêncio
  Date : Nov/2018
  purpose : place all helper functions solely in one place
*/

const socket = io();

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
function faultsDataManipulation(arrOfObj, numberOfStud) {

  var discMaisFaltosas = [];
  var faltasAluno = [];
  var x = 0;

  var addCounter = 0,
      innerCounter = numberOfStud[0]["studentNumber"];

  for (let counter = 0; counter < arrOfObj.length / numberOfStud[0]["studentNumber"]; counter++) {

    for (let inner = addCounter; inner < innerCounter; inner++) {
      if (faltasAluno[indexMirror(addCounter, innerCounter, inner)] || faltasAluno[indexMirror(addCounter, innerCounter, inner)] == 0) {
        faltasAluno[indexMirror(addCounter, innerCounter, inner)] += sum(
          [
            arrOfObj[inner]["falta_indisciplinada"],
            arrOfObj[inner]["falta_ausencia"],
            arrOfObj[inner]["falta_material"]
          ]
        );
      } else {
        faltasAluno[indexMirror(addCounter, innerCounter, inner)] = sum(
          [
            arrOfObj[inner]["falta_indisciplinada"],
            arrOfObj[inner]["falta_ausencia"],
            arrOfObj[inner]["falta_material"]
          ]
        );
      }
    }

    addCounter += numberOfStud[0]["studentNumber"];
    innerCounter += numberOfStud[0]["studentNumber"];

  }

  return [
    discMaisFaltosas,
    faltasAluno
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
