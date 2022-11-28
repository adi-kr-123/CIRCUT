var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.beginPath();
var current = () =>{
    var a=30,b=30,c=a;
    for(var i=90;i<145;i+=5){

    ctx.moveTo(a,b);
    ctx.lineTo(a+2,30);
    let animate =10.8
    c=c+animate; // to insert space between dots
    
    ctx.moveTo(c,b);
    ctx.lineTo(c+2,30);

    ctx.strokeStyle='#ff0000';
    ctx.stroke();
    
}
}

current();
function mouse_position()
{
    var e = window.event;

    var posX = e.clientX;
    var posY = e.clientY;

    document.Form1.posx.value = posX;
    document.Form1.posy.value = posY;

    var t = setTimeout(mouse_position,100);

}

ctx.moveTo(30,30);
ctx.lineTo(70,30);

ctx.moveTo(80,30);
ctx.lineTo(130,30);
ctx.moveTo(140,30);
ctx.lineTo(150,30);
ctx.moveTo(30,30);
ctx.lineTo(30,90);
ctx.moveTo(30, 90);
ctx.lineTo(72,90 );
ctx.moveTo(80,90);
ctx.lineTo(130,90);
ctx.moveTo(140,90);
ctx.lineTo(150,90);
ctx.moveTo(120,30);
ctx.lineTo(120,55);
ctx.moveTo(120,65);
ctx.lineTo(120,90);
ctx.moveTo(150,30);
ctx.lineTo(150,56);
ctx.moveTo(150,64);
ctx.lineTo(150,90);
ctx.moveTo(73, 85);
ctx.lineTo(73,95 );
ctx.moveTo(79,85);
ctx.lineTo(79,95);
ctx.moveTo(142,57);
ctx.lineTo(158,57);
ctx.moveTo(144,63);
ctx.lineTo(155,63);
ctx.fillStyle ="red";
ctx.font = "15px";
ctx.fillText("R", 72, 33);
ctx.font = "15px";
ctx.fillText("R", 132, 93);
ctx.font = "15px";
ctx.fillText("L", 117, 63);
ctx.font = "20px";
ctx.fillText("C", 132, 33);
ctx.strokeStyle = '#33ff66';
ctx.stroke();


