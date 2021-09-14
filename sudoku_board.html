
var cells = [];
canvas = document.getElementById("gameArea");
var currentCellIndex = null;
var cellsPerAxis = 9;
var cellWidth = (canvas.width) / cellsPerAxis;
var cellHeight = (canvas.width) / cellsPerAxis;
var mouse_x = 0;
var mouse_y = 0;
var CSS_dimension = 360;
var canvas_dimension = canvas.width;
var CSSratio=  canvas_dimension/CSS_dimension;
var highlightColor = "blue";
var correctHighlight = "#58cc77";
var falseHighlight = "#ed7c6d";
var shouldCheckAnswers = false;

function loadCellVals(){
	cells = [];
	for (let i = 0; i<sb.cells.length; i++){
	cells.push(sb.cells[i].val);
}
}
function checkAnswers(){
	let compareWithSolution = [];
	for (let i =0; i<sb.cells.length;i++){
		if(sb.solution[i] == cells[i]){
			compareWithSolution.push(1);
		} else {compareWithSolution.push(0);}
	}

	for (let i=0; i<compareWithSolution.length;i++){
		let row = Math.floor(i / 9);
		let col = i - (row*9);
		let strtx = col * cellWidth;
		let strty = row * cellHeight;
		ctx.lineWidth = 3*CSSratio;
		canvas = document.getElementById("gameArea");
		ctx = canvas.getContext('2d');
		if (compareWithSolution[i] == 1){
		ctx.fillStyle =correctHighlight;} else {ctx.fillStyle =falseHighlight;}
		ctx.beginPath();
		ctx.rect(strtx, strty, cellWidth, cellHeight);
		ctx.fill();
	}
}

function drawBoard(){
	canvas = document.getElementById("gameArea");
	ctx = canvas.getContext('2d');
	ctx.fillStyle = 'white';
	ctx.beginPath();
	ctx.rect(0,0,(canvas.width),(canvas.height));
	ctx.fill();
	if (shouldCheckAnswers){checkAnswers()}
	for(let i =0; i <3; i++){
		ctx.strokeStyle ="grey";
		ctx.lineWidth = 1*CSSratio;
		ctx.beginPath();
		ctx.rect(0,(canvas.height/9) + ((canvas.height/3)*i),(canvas.width),(canvas.height)/9);
		ctx.stroke();
		ctx.beginPath();
		ctx.rect((canvas.width/9) + ((canvas.width/3)*i),0,(canvas.width/9),(canvas.height));
		ctx.stroke();
	}
	ctx.strokeStyle ="black";
	ctx.lineWidth = 3*CSSratio;
	ctx.beginPath();
	ctx.rect((canvas.width)/3,0,(canvas.width)/3,(canvas.height));
	ctx.stroke();
	ctx.beginPath();
	ctx.rect(0,0,(canvas.width),(canvas.height));
	ctx.stroke();
	ctx.beginPath();
	ctx.rect(0,(canvas.height)/3,(canvas.width),(canvas.height)/3);
	ctx.stroke();
}
function getCellIndex(){ //later this should only update if there is a mouse click
	//may seem unnecessary since the col and row are recalculated later, but the cell index is used in the logic script!
	let column = Math.floor(mouse_x / cellWidth);
	let row    = Math.floor(mouse_y / cellHeight);
	let cell_index = row*9 + column;
	if (cell_index< cells.length){
		console.log(cells[cell_index]);
	}
	return cell_index;
}

function highlightSelectedCell(){
	if (currentCellIndex !=null){
	let row = Math.floor(currentCellIndex / 9);
	let col = currentCellIndex - (row*9);
	let strtx = col * cellWidth;
	let strty = row * cellHeight;
	ctx.lineWidth = 3*CSSratio;
	canvas = document.getElementById("gameArea");
	ctx = canvas.getContext('2d');
	ctx.strokeStyle =highlightColor;
	ctx.beginPath();
	ctx.rect(strtx, strty, cellWidth, cellHeight);
	ctx.stroke();
	}
}


function displayNumbers(){
	loadCellVals();
	for (let i =0 ; i<cells.length; i++){
		let row = Math.floor(i / 9);
		let col = i - (row*9);
		let strtx = (col + 0.3) * cellWidth ;
		let strty = (row + 0.8) * cellHeight;
		if (sb.cells[i].isComputerAssigned){
		ctx.fillStyle = 'black';} else {ctx.fillStyle = 'grey';}
		let text = cells[i];
		if (text!=0){
		ctx.fillText(text, strtx, strty); 
		ctx.fillStyle = 'white';}
	}
}

function play(){
	drawBoard();

	highlightSelectedCell();
	displayNumbers();



}

function main(){
	canv=document.getElementById("gameArea");
	ctx=canv.getContext("2d");
	setInterval(play,1/10);
}

window.onLoad = main();



