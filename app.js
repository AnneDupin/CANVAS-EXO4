let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 400;

ctx.beginPath();
ctx.fillStyle = "burlywood";
ctx.moveTo(50, 160);
ctx.lineTo(200, 160);
ctx.lineTo(125, 400);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "#FFB238"; // quadratic Bézier curve
ctx.moveTo(50, 160);
ctx.quadraticCurveTo(160, 0, 200, 160);
ctx.fill();