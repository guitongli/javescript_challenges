// revised code
console.log("DOM event - ex 2");

var address = "Four score and seven years ago our fath";
var inputArea = document.getElementsByTagName("textarea")[0];

inputArea.addEventListener("input", function () {
    inputArea.value = address.slice(0, inputArea.value.length);
});

//or
document
    .getElementsByTagName("textarea")[0]
    .addEventListener("input", function (event) {
        event.target.value = address.slice(0, event.target.value.length);
    });
