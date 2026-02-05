const resolution = document.querySelector('#resolution');
const sketchpad = document.querySelector('.sketchpad');

let side = 16;

function addHoverEffect(row) {
  row.addEventListener('mouseover', colorCell);
}

function wipeHoverEffect(row) {
  row.addEventListener('mouseout', wipeCell);
}

function colorCell(event) {
  event.target.style.backgroundColor = '#f00';
}

function wipeCell(event) {
  event.target.style.backgroundColor = '#fff';
}

function drawGrid() {
  sketchpad.innerHTML = '';
  for (let i = 0; i < side; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.style.height = String(100 / side) + '%';
    for (let i = 0; i < side; i++) {
      const cell = document.createElement('div');
      row.appendChild(cell);
      cell.classList.add('cell');
    }
    addHoverEffect(row);
    sketchpad.appendChild(row);
  }
}

resolution.addEventListener('click', () => {
  do {
    side =  prompt("What should be the new height and width of the grid in cells? (MAX 100)", 16);
  } while (side > 100)
  drawGrid();
});

drawGrid();