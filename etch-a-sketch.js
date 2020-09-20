//***FUNCTIONS & Global Variables***//

// initialize the page with a grid of square divs
function createTheGrid(gridSize){
	gridSize *= gridSize;
	console.log('grid size squared: ' + gridSize);
	let allBoxes = [];
	for(let i=0; i<=gridSize-1; i++){
		allBoxes[i] = createGridDivs(i); // create a gridBox, append to array
	}

	let container = document.querySelector('.gridContainer');
	appendChildren(container, allBoxes);
}

// creates <div className='gridBox'></div>
function createGridDivs(label){
	let box = document.createElement('div');
	box.className = 'gridBox-white';
	box.id = label;
	return box;
}

// appends contents of array to parent node; called by createTheGrid
function appendChildren(parent, children){
	children.forEach(function(child){
		parent.appendChild(child);
	});
}

//***DOM STUFF**//
window.addEventListener('load', createTheGrid(16));

document.addEventListener('mousemove', function(e){
	console.log('e.id = ' + e);
	if(e.target.className == 'gridBox-white'){
		let theBox = e.target.id;
		document.getElementById(theBox).className = 'gridBox-color';
	}
})
