const canvasContainerDiv = document.querySelector('#canvas-container');
const resetButton = document.querySelector('#reset-button')
resetButton.addEventListener('click', resetCanvas);
let canvasSize = 16;

function initializeCanvas(canvasSize) {
    let canvasSizeRoot = Math.sqrt(canvasSize);
    canvasContainerDiv.style.gridTemplateColumns = `repeat(${canvasSizeRoot}, 
        1fr)`;
    canvasContainerDiv.style.gridTemplateRows = `repeat(${canvasSizeRoot}, 
        1fr)`;
    
    for (let i = 0; i < canvasSize; i++) {
        let currentCell = document.createElement('div');
        currentCell.id = `${i + 1}`;
        currentCell.className = "cell-new";
        canvasContainerDiv.appendChild(currentCell);
    }

    let canvasCells = document.querySelectorAll('.cell-new');
    canvasCells.forEach(cell => cell.addEventListener('mouseenter', draw));
}
   
function draw(cell) {
    cell.target.classList.add('cell-drawn')
    cell.target.classList.remove('cell-new');
}

function resetCanvas() {
    const canvasListClear = document.querySelector('#canvas-container');
    canvasListClear.innerHTML = '';
    initializeCanvas(userInputSize());
}

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



initializeCanvas(36);

