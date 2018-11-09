var myCanvas = document.getElementById('exo3Canvas')
var canvas = myCanvas.getContext('2d')

// Début du canvas //
canvas.beginPath();
canvas.fillStyle='#976f0f'
canvas.arc(150,75,40,0,Math.PI*2,true)
canvas.fill()

canvas.beginPath();//corps du bonhome
canvas.lineWidth="3";
canvas.fillStyle='#976f0f'
canvas.moveTo(50,100);
canvas.lineTo(250,100);
canvas.quadraticCurveTo(270,115,250,130);//main droite
canvas.lineTo(180,130);
canvas.lineTo(180,330);
canvas.quadraticCurveTo(170,340,155,330);//pied droit
canvas.lineTo(155,300);
canvas.quadraticCurveTo(145,280,135,300)//entre jambe
canvas.lineTo(135,330);
canvas.quadraticCurveTo(125,340,110,330);//pied gauche
canvas.lineTo(115,130);
canvas.lineTo(50,130);
canvas.quadraticCurveTo(30,115,50,100)//main gauche
canvas.fill();

canvas.beginPath();
canvas.fillStyle='#7a2976'
canvas.arc(150,160,10,0,Math.PI*2,true)
canvas.fill()
canvas.beginPath();
canvas.fillStyle='#7a2976'
canvas.arc(150,200,10,0,Math.PI*2,true)
canvas.fill()

canvas.beginPath();
canvas.fillStyle='#ffffff'
canvas.arc(135,70,10,0,Math.PI*2,true)
canvas.fill()
canvas.fillStyle='#ffffff'
canvas.arc(165,70,10,0,Math.PI*2,true)
canvas.fill()

canvas.beginPath();
canvas.strokeStyle='#ffffff'
canvas.moveTo(125,55)
canvas.quadraticCurveTo(135,45,145,55)
canvas.stroke()
canvas.beginPath();
canvas.moveTo(155,55)
canvas.quadraticCurveTo(165,45,175,55)
canvas.stroke()

canvas.beginPath();
canvas.strokeStyle='#ed1001'
canvas.moveTo(135,90)
canvas.quadraticCurveTo(150,100,165,90)
canvas.stroke()
