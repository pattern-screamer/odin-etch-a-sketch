const resolution = document.querySelector('#resolution');
const sketchpad = document.querySelector('.sketchpad');

let side = 16;

function addHoverEffect(row) {
  row.addEventListener('mouseover', colorCell);
}

function colorCell(event) {
  event.target.setAttribute('customopacity', String(Number(event.target.getAttribute('customopacity')) + 0.1));
  newOpacity = Number(event.target.getAttribute('customopacity'));
  if (newOpacity > 1) {
    newOpacity = 1;
  }

  color = randomRGB();
  event.target.style.backgroundColor = `rgb(${color[0]}, ${color[1]}, ${color[2]}, ${newOpacity})`;
}

function randomRGB() {
  red = Math.floor(Math.random() * 256);
  green = Math.floor(Math.random() * 256);
  blue = Math.floor(Math.random() * 256);
  return [red, green, blue];
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
      cell.setAttribute('customopacity', 0);
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