const sketchpad = document.querySelector('.sketchpad');

const side = 16;

for (let i = 0; i < side; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let i = 0; i < side; i++) {
    const cell = document.createElement('div');
    row.appendChild(cell);
    cell.classList.add('cell');
    cell.id = 'idlol';
  }
  addHoverEffect(row);
  sketchpad.appendChild(row);
}

function addHoverEffect(row) {
  row.addEventListener('mouseover', changeBG)
}

function changeBG(event) {
  event.target.style.backgroundColor = '#f00';
  console.log(event.target.id);
}