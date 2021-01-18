console.log("DOM event - ex 1");

var square = document.getElementById("follow");
function mousemoveHandler(event) {
    var x = event.clientX;
    var y = event.clientY;
    //my browser console always alarms and gets stuck at the square.style.left...
    square.style.left = x - square.offsetWidth / 2 + "px";
    square.style.top = y - square.offsetHeight / 2 + "px";
    document.body.addEventListener("mousemove", mousemoveHandler);
}

//or
var square = document.getElementById("follow");
document.body.addEventListener("mousemove", function (event) {
    var x = event.clientX;
    var y = event.clientY;
    square.style.left = x - square.offsetWidth / 2 + "px";
    square.style.top = y - square.offsetHeight / 2 + "px";
});
