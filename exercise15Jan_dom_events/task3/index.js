console.log("DOM Events - ex 3");
var colorDiv = document.getElementById("colorDiv");

function genRandomColor() {
    var R = Math.floor(Math.random() * 256);
    var G = Math.floor(Math.random() * 256);
    var B = Math.floor(Math.random() * 256);
    return R + "," + G + "," + B;
}

colorDiv.addEventListener("mousedown", function () {
    colorDiv.style.backgroundColor = geRandomColor();
});

colorDiv.addEventListener("mouseup", function () {
    colorDiv.style.backgroundColor = geRandomColor();
});
