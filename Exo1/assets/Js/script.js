var myCanvas = document.getElementById('exo1Canvas')
var canvas = myCanvas.getContext('2d')

// Début du canvas //

canvas.beginPath();
canvas.moveTo(70,75);
canvas.lineTo(130,75);
canvas.lineTo(100,175);
canvas.closePath();
canvas.fillStyle ='#aa6522'
canvas.fill()

canvas.beginPath();
canvas.fillStyle='#8a0908';
canvas.moveTo(70,75);
canvas.bezierCurveTo(100,35,115,35,130,75);
canvas.fill();
