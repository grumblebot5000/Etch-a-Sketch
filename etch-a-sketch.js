//***DOM STUFF**//
let totalNumColumns = prompt('How many columns should your Etch-a-Sketch have:');
let totalNumGridBoxes = totalNumColumns ** 2;
console.log('total box: ' + totalNumGridBoxes);

const gridContainer = document.getElementsByClassName('gridContainer');

createTheGrid(totalNumColumns);


// window.addEventListener('load', createTheGrid(16));

document.addEventListener('mousemove', function(e){
	console.log('e.id = ' + e);
	if(e.target.className == 'gridBox-white'){
		let theBox = e.target.id;
		document.getElementById(theBox).className = 'gridBox-color';
	}
})

// create reset button and insert into page
const resetButton = document.createElement('button');
resetButton.id = 'resetButton';
resetButton.textContent = 'Clear Screen';
const buttonDiv = document.createElement('div');
document.getElementById('projectTitle').appendChild(buttonDiv);
buttonDiv.appendChild(resetButton);

// reset screen to white background
resetButton.addEventListener('click', function(){
	console.log('CLICKED');
	let divsToChange = [];
	divsToChange = document.getElementsByClassName('gridBox-color');
	console.log(divsToChange.length);
	for(let i=0; i<divsToChange.length-1; i++){
		console.log('changing grid index: ' + divsToChange[i]);
		divsToChange[i].className = 'gridBox-white';
	}
})

//***FUNCTIONS***//

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
	// box.textContent = label;
	return box;
}

// appends contents of array to parent node; called by createTheGrid
function appendChildren(parent, children){
	children.forEach(function(child){
		parent.appendChild(child);
	});
}