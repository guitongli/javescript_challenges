var bigCanvas = document.getElementById("bigCanvas");
var ctx = smallCanvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.arc(100, 100, 30, 0, Math.PI * 2);
