//bonus task pending

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
