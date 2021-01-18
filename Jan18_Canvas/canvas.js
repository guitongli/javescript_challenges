var stickMan = document.getElementById("stickMan");

var ctx = stickMan.getContext("2d");

ctx.strokeStyle = "black";
ctx.lineWidth = 6;

ctx.beginPath();
ctx.arc(100, 100, 30, 0, Math.PI * 2);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(100, 130);
ctx.lineTo(100, 200);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(20, 110);
ctx.lineTo(100, 150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(180, 110);
ctx.lineTo(100, 150);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(25, 280);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(100, 200);
ctx.lineTo(175, 280);
ctx.stroke();
ctx.closePath();

var bigCanvas = document.getElementById("bigCanvas");
var ctx1 = bigCanvas.getContext("2d");

var dx = 150;
var dy = 150;
function clear() {
    ctx1.clearRect(0, 0, bigCanvas.width, bigCanvas.height);
}
function redraw(dx, dy) {
    ctx1.drawImage(stickMan, dx, dy);
}

window.addEventListener("keydown", function (e) {
    var key = e.key;
    var step = 5;
    if (key === "ArrowDown") {
        clear();
        redraw(dx, (dy += step));
    } else if (key === "ArrowUp") {
        clear();
        redraw(dx, (dy -= step));
    } else if (key === "ArrowLeft") {
        clear();
        redraw((dx -= step), dy);
    } else if (key === "ArrowRight") {
        clear();
        redraw((dx += step), dy);
    }
});
