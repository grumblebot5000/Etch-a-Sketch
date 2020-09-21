// GLOBAL VARIABLES //
let paperResolution; // how many columns (and rows) user wants

// WHEN PAGE IS LOADED, GET A GRID SIZE
window.addEventListener('load', initPage);

// When mouse enters gridBox, change the background color
document.addEventListener('mousemove', function(e){
	let idNum = e.target.id;
	drawLine(idNum);
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

		// fill each row with the correct number/size of boxes
		for(let x=1; x<=num; x++){
			let gridBox = document.createElement('div')
			gridBox.className = 'gridBoxInit';
			gridBox.textContent = '.';
			gridBox.style.lineHeight = gridHW + 'px';
			gridLineContainer.appendChild(gridBox);
			gridBox.id = i + '-' + x;
		}
		
		// append row to gridContainer div
		document.getElementById('gridContainer').appendChild(gridLineContainer);
	}
}

function drawLine(idNum){
	document.getElementById(idNum).className = 'gridBoxDrawn';
}