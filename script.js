const sketchpad = document.querySelector('.sketchpad');

const side = 16;

for (let i = 0; i < side; i++) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let i = 0; i < side; i++) {
    const cell = document.createElement('div');
    row.appendChild(cell);
    cell.classList.add('cell');
  }
  sketchpad.appendChild(row);
}