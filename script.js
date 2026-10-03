const container = document.querySelector('div.container');
const sketchpad = document.querySelector('div#sketchpad');
const colorPicker = document.querySelector('input#color-picker');
const mouseMenu = document.querySelector('div.mouse-menu');
const hoverButton = document.querySelector('button#hover');
const clickButton = document.querySelector('button#click');
const gridSizeButton = document.querySelector('button#grid-size');
const randomModeButton = document.querySelector('button#random-mode');

let resWidth = 700;
let resHeight = 700;
let gridWidth = 16;
let gridHeight = 16;
let color = '#fff'
let eventType = 'mouseenter';
let randomMode = false;

function setResolution() {
  container.style.width = resWidth + 'px';
  container.style.height = resHeight + 'px';
}

function renderSketchpad() {
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
  setResolution();
}

function colorCell(event) {
  const cell = event.target;
  if (randomMode) {
    let newOpacity = +cell.style.opacity + .1;
    cell.style.opacity = newOpacity;
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const newColor = `rgb(${red}, ${green}, ${blue})`
    color = newColor;
    colorPicker.value = newColor;
  }
  if (event.type === eventType) {
    cell.style['background-color'] = color;
  }
}

function setCellEventListeners() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => cell.addEventListener('mouseenter', (event) => colorCell(event)));
  cells.forEach((cell) => cell.addEventListener('click', (event) => colorCell(event)));
}

function setColor() {
  color = colorPicker.value;
  setCellEventListeners();
}

function toggleInputType() {
  if (!randomMode) {
    if (hoverButton.disabled) {
      hoverButton.disabled = false;
      clickButton.disabled = true;
      eventType = 'click';
    } else {
      hoverButton.disabled = true;
      clickButton.disabled = false;
      eventType = 'mouseenter';
    }
  }
}

function changeGridSize() {
  const newGridSize = +prompt("What should be the next gridSize? (min. 1, max. 100)");
  if (isNaN(newGridSize) || Math.floor(newGridSize) !== newGridSize) {
    alert("Input must be an integer!");
    return;
  }
  if (newGridSize < 1 || newGridSize > 100) {
    alert("Input must be integer between 1 and 100!");
    return;
  }
  gridWidth = newGridSize;
  gridHeight = newGridSize;
  renderSketchpad();
  setCellEventListeners();
}

renderSketchpad();
setCellEventListeners();
colorPicker.addEventListener('change', setColor);
mouseMenu.addEventListener('click', toggleInputType);
gridSizeButton.addEventListener('click', changeGridSize);

function toggleRandomMode() {
  if (randomMode) {
    colorPicker.disabled = false;
    clickButton.disabled = false;
    colorPicker.classList.toggle('truly-disabled');
    hoverButton.classList.toggle('truly-disabled');
    clickButton.classList.toggle('truly-disabled');
  } else {
    colorPicker.disabled = true;
    hoverButton.disabled = true;
    clickButton.disabled = true;
    colorPicker.classList.toggle('truly-disabled');
    hoverButton.classList.toggle('truly-disabled');
    clickButton.classList.toggle('truly-disabled');
    eventType = 'mouseenter';
  }
  randomMode = !randomMode;
  color = "#fff";
  colorPicker.value = "#ffffff";
  renderSketchpad();
  setCellEventListeners();
}

randomModeButton.addEventListener('click', toggleRandomMode);