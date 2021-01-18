function charReplace() {
    var typedChars = document.getElementById("typeHere").childNodes[0]
        .nodeValue;
    var preparedChars = document.getElementById("hiddenArea").childNodes[0]
        .nodeValue;
    var typedLength = typedChars.length;
    console.log(typedChars);
    typedChars.addEventListener("change", function (event) {
        typedChars = preparedChars.slice(0, typedLength - 1);
    });
}
charReplace();
