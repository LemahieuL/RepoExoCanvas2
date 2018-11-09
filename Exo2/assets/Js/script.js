var myCanvas = document.getElementById('exo2Canvas')
var canvas = myCanvas.getContext('2d')

// Début du canvas //
canvas.beginPath();
canvas.fillStyle='#0000ff';
canvas.fillRect(0,0,300,300);

canvas.beginPath();
canvas.fillStyle='#ffffff';
canvas.moveTo(100,180);
canvas.quadraticCurveTo(125,100,150,180);
canvas.fill();

canvas.beginPath()
canvas.fillStyle='#e0e1f3';
canvas.moveTo(50,200);
canvas.quadraticCurveTo(125,150,200,200);
canvas.moveTo(50,200);
canvas.quadraticCurveTo(125,240,200,200);
canvas.fill();
