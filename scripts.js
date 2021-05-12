const canvasContainerDiv = document.querySelector('#canvas-container');
let canvasSize;

function initializeCanvas(canvasSize) {
    
    let canvasSizeRoot = Math.sqrt(canvasSize);
    
    canvasContainerDiv.style.gridTemplateColumns = `repeat(${canvasSizeRoot}, 
1fr)`;
    canvasContainerDiv.style.gridTemplateRows = `repeat(${canvasSizeRoot}, 
1fr)`;
    
    for (let i = 0; i < canvasSize; i++) {
        let currentCell = document.createElement('div');
        currentCell.id = `${i + 1}`;
        currentCell.className = "cell";
        canvasContainerDiv.appendChild(currentCell);
    }

}

initializeCanvas(16);

