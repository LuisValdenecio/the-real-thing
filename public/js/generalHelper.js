/*
  Author : Luís Valdenêncio
  Date : Nov/2018
  purpose : place all helper functions solely in one place
*/

const socket = io();




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
