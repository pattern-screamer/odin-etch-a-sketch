const container = document.querySelector('div.container');
const sketchpad = document.querySelector('div#sketchpad');

function setResolution(resWidth, resHeight) {
  container.style.width = resWidth + 'px';
  container.style.height = resHeight + 'px';
}

function renderSketchpad(gridWidth, gridHeight, resWidth, resHeight) {
  sketchpad.innerHTML = '';
  for (let row = 0; row < gridHeight; row++) {
    const rowElement = document.createElement('div');
    rowElement.classList.add('row');
    for (let column = 0; column < gridWidth; column++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.style.width = Math.floor(resWidth / gridWidth) + 'px';
      cell.style.height = Math.floor(resHeight / gridHeight) + 'px';
      rowElement.appendChild(cell);
    }
    sketchpad.appendChild(rowElement);
  }
  setResolution(resWidth, resHeight);
}

let resX = 500;
let resY = 500;
let gridX = 16;
let gridY = 16;

renderSketchpad(gridY, gridX, resX, resY);