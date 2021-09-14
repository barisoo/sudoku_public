
const message = "Hello, World!";
var canvas = document.getElementById("gameArea");
var ctx = canvas.getContext("2d");
var fontSize =Math.floor(canvas.height / 11);
console.log(`${fontSize}px Arial`);

ctx.font = `${fontSize}px Arial`;

function play(){
	ctx.fillText(message, 10, 50); 
}
function main(){
	canv=document.getElementById("gameArea");
	ctx=canv.getContext("2d");
	setInterval(play,1/10);
}