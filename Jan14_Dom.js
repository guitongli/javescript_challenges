//1.  Write a function that expects a string representing a selector to be passed as a parameter.
//The function should find all the elements in the document that match the selector and change their style so that the text they contain is italic, underlined, and bold.

function changeStyle(str) {
    var selectedElements = document.querySelectorAll(str);
    for (var i = 0; i < selectedElements.length; i++) {
        selectedElements[i].style.fontStyle = "italic";
        selectedElements[i].style.textDecoration = "underline";
        selectedElements[i].style.fontWeight = "bold";
    }
}
//2. Write a function that expects a string representing a class name to be passed as a parameter. The function should return an array containing all the elements in the document that have the class that was passed in.
function makeArr(str) {
    var foundElements = document.querySelectorAll(str);
    for (var i = 0; i < foundElements.length; i++) {
        var showElements = [];
        showElements.push(foundElements[i]);
    }
    return showElements;
}
//3. Write a function that inserts an element into the body of the currently loaded page. That element should have fixed position, z-index of 2147483647, left of 20px, top of 100px, font-size of 200px, and contain the text 'AWESOME'.
funtion insertElem ()  {  
    var newElem = document.createElement("newElement");
    var newText = document.createTextNode("AWESOME");
    newElem.appendChild(newText);
    document.body.appendChild(newElem);
    newElem.style.position = "fixed";
    newElem.style.zIndex = "2147483647";
    newElem.style.left = "20px";
    newElem.style.fontSize = "200px";
}