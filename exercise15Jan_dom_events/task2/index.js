// this is stuck for now

console.log("DOM event - ex 2");

function charReplace() {
    var typedChars = document.getElementById("typeHere").childNodes[0]
        .nodeValue;
    var preparedChars = document.getElementById("hiddenArea").childNodes[0]
        .nodeValue;
    var typedLength = typedChars.split("").length;

    typedChars.addEventListener("change", function () {
        typedChars = preparedChars.split("").slice(0, typedLength - 1);
    });
}
charReplace();
