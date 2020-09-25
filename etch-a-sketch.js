// GLOBAL VARIABLES //
let paperResolution; // how many columns (and rows) user wants

// Create and insert the Reset button on the page
const resetButton = document.createElement('button');
resetButton.id = 'resetButton';
resetButton.textContent = 'Reset';

// Create div to append to h1 and hold button
const buttonContainer = document.createElement('div');
buttonContainer.id = 'buttonContainer';
buttonContainer.appendChild(resetButton);
document.getElementById('projectTitle').appendChild(buttonContainer);

// WHEN PAGE IS LOADED, GET A GRID SIZE
window.addEventListener('load', initPage);

// When mouse enters gridBox, change the background color
document.addEventListener('mousemove', function(e){
	if(e.target.className == 'gridBoxInit'){
		let idNum = e.target.id;
		drawLine(idNum);
	}
})

// Draw line on screen with mouse pointer
function drawLine(idNum){
	document.getElementById(idNum).className = 'gridBoxDrawn';
	let bgColor = getRandomColor();
	document.getElementById(idNum).style.backgroundColor = `hsl(${bgColor} 50% 50%)`;
	document.getElementById(idNum).style.color = `hsl(${bgColor} 50% 50%)`;
}

function getRandomColor(){
	let randomColor = Math.floor(Math.random()*360) + 1;
	return randomColor;
}

// Click button to reset page
resetButton.addEventListener('click', function(){
	deleteGridBoxes();
})

// RESET THE PAGE and GET RESOLUTION FOR NEXT PAGE //
function initPage(){
	paperResolution = prompt('How many columns/rows would you like?');
	drawGrid(paperResolution);
}

// Create blank grid on page
function drawGrid(num){
	// 960/(num of columns = gridBox width & height)
	let gridHW = 960/num;

	//for each row, create a gridLineContainer
	for(let i=1; i<=paperResolution; i++){
		let gridLineContainer = document.createElement('div');
		gridLineContainer.className = 'gridLineContainer';
		gridLineContainer.height = gridHW + 'px';

		// fill each girdLineContainer with the correct number/size of boxes
		for(let x=1; x<=num; x++){
			let gridBox = document.createElement('div')
			gridBox.className = 'gridBoxInit';
			gridBox.textContent = '.';
			gridBox.style.lineHeight = gridHW + 'px';
			gridLineContainer.appendChild(gridBox);
			gridBox.id = i+'-'+x;
		}
		// append row to gridContainer div
		document.getElementById('gridContainer').appendChild(gridLineContainer);
	}
}

// delete gridLineContainers; init page
function deleteGridBoxes(){
	let parent = document.getElementById('gridContainer')
	while(parent.firstChild){
		parent.removeChild(parent.firstChild);	
	}
	initPage();
}