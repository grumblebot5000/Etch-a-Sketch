// GLOBAL VARIABLES //
let paperResolution; // how many columns (and rows) user wants

// WHEN PAGE IS LOADED, GET A GRID SIZE
window.addEventListener('load', initPage);

// RESET THE PAGE and GET RESOLUTION FOR NEXT PAGE //
function initPage(){
	paperResolution = prompt('How many columns/rows would you like?');
	drawGrid(paperResolution);
}

// Create blank grid on page
function drawGrid(num){
	// 960/(num of columns = gridBox width & height)
	let gridHW = 960/num;
	console.log('gridHW: ' + gridHW);
	console.log('paperResolution: ' + paperResolution);
	console.log('num: ' + num);

	//for each row, create a gridLineContainer
	for(let i=1; i<=paperResolution; i++){
		let gridLineContainer = document.createElement('div');
		gridLineContainer.className = 'gridLineContainer';
		gridLineContainer.height = gridHW + 'px';

		// fill each row with the correct number/size of boxes
		for(let x=1; x<=num; x++){
			let gridBox = document.createElement('div')
			gridBox.className = 'gridBoxInit';
			gridBox.id = x;
			gridBox.textContent = x-x;
			gridBox.style.color = 'white';
			gridBox.height = gridHW + 'px';
			gridBox.style.lineHeight = gridHW + 'px';
			console.log('grid Height = ' + gridHW + 'px');
			gridLineContainer.appendChild(gridBox);
		}

		// append row to gridContainer div
		document.getElementById('gridContainer').appendChild(gridLineContainer);
	}
}