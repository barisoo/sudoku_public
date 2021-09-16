

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


canvas.addEventListener("click", function(e) { 
	var cRect = canvas.getBoundingClientRect();        // Gets CSS pos, and width/height
	var canvasX = Math.round(CSSratio*(e.clientX - cRect.left));
	// console.log(cRect.left);  // Subtract the 'left' of the canvas 
	var canvasY = Math.round(CSSratio*(e.clientY - cRect.top));
	mouse_x = canvasX;
	mouse_y = canvasY;
	currentCellIndex = getCellIndex();
    // from the X/Y positions to make  
	//ctx.clearRect(0, 0, canvas.width, canvas.height);  // (0,0) the top left of the canvas
	//ctx.fillText("X: "+canvasX+", Y: "+canvasY, 10, 20);
});

window.addEventListener("keyup",function(e){
	let val = e.keyCode - 48;
	if (val == -40){val = 0};
	//console.log(sb.cells[currentCellIndex].isComputerAssigned);
	insertValFromInput(val);

	if (e.keyCode ==27){//escape key
		currentCellIndex = null;
	}
	if (e.keyCode ==39){currentCellIndex = currentCellIndex+1; currentCellIndex = currentCellIndex%81}
	if (e.keyCode ==40){currentCellIndex = currentCellIndex+9; currentCellIndex = currentCellIndex%81}
	if (e.keyCode ==38){currentCellIndex = currentCellIndex-9+81; currentCellIndex = currentCellIndex%81}
	if (e.keyCode ==37){currentCellIndex = currentCellIndex-1+81; currentCellIndex = currentCellIndex%81}
	console.log(e.keyCode);
})

function insertValFromInput(val){
	if ((val>=0 &&val<=9)&&!(sb.cells[currentCellIndex].isComputerAssigned)){
		console.log(val);
		sb.cells[currentCellIndex].assign_value(val);
	}
}
function clear_i(){
	for (let cleari=0; cleari<sb.cells.length; cleari++){
		if (!(sb.cells[cleari].isComputerAssigned)){
			sb.cells[cleari].assign_value(0);
		}
	}
}
