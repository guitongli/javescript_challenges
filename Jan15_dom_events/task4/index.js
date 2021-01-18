console.log("DOM Events - ex 4");
var smallDiv = document.getElementById("innerDiv");
var bigDiv = document.getElementById("outerDiv");

function genRandomColor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    return "rgb(" + R + "," + G + "," + B + ")";
}

smallDiv.addEventListener("mousemove", function (e) {
    smallDiv.style.backgroundColor = genRandomColor();
    e.stopPropagation();
});

bigDiv.addEventListener("mousemove", function () {
    bigDiv.style.backgroundColor = genRandomColor();
});
