//ETCH A SKETCH//

const canvasContainerDiv = document.querySelector('#canvas-container');
//With parameter the square root of canvasSize, initializes the canvas
function initializeCanvas(canvasSize) {
    let canvasSizeRoot = Math.sqrt(canvasSize);

    //These two initialize the size of the grid
    canvasContainerDiv.style.gridTemplateColumns = `repeat(${canvasSizeRoot}, 
        1fr)`;
    canvasContainerDiv.style.gridTemplateRows = `repeat(${canvasSizeRoot}, 
        1fr)`;
    
    //Creates the divs in the canvas-container and adds classes and id's
    for (let i = 0; i < canvasSize; i++) {
        let currentCell = document.createElement('div');
        currentCell.id = `${i + 1}`;
        currentCell.className = "cell-new";
        canvasContainerDiv.appendChild(currentCell);
    }

    //Attaches an 'mouseenter' event listener to each div created above
    let canvasCells = document.querySelectorAll('.cell-new');
    canvasCells.forEach(cell => cell.addEventListener('mouseenter', draw));
}

//Switches the class of 'mouseenter'ed divs from cell-new to cell-drawn (changes color)
function draw(cell) {
    cell.target.classList.add('cell-drawn')
    cell.target.classList.remove('cell-new');
}

const resetButton = document.querySelector('#reset-button')
resetButton.addEventListener('click', resetCanvas);
//START HERE//
//Deletes the HTML of the #canvas containter and then calls initialize Canvas again
function resetCanvas() {
    const canvasListClear = document.querySelector('#canvas-container');
    canvasListClear.innerHTML = '';
    initializeCanvas(16);
}

//Prompts user to decide canvas edge size
//Does not accept strings or integers over 100
function userInputSize() {
    let userCanvasSize = prompt('How many squares would you like per side?');
    console.log(userCanvasSize.typeof);
    if (userCanvasSize.isInteger == false) {
        return userInputSize();
    } else if (userCanvasSize > 100) {
        userCanvasSize = prompt('Make it is less than 100! How many squares?');
    }

    return userCanvasSize;
}

//First initialization
initializeCanvas(36);