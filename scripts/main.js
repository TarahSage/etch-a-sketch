let currentGridSize = 16;
let gridElements;
let div = document.createElement('div');
div.className = "panel";

const container = document.querySelector('#container');
const button = document.querySelector("#button");

function init() {
  addEventListenerToButton();

  createGrid(currentGridSize);
};

function createGrid(gridSize) {
  gridElements = "auto ".repeat(gridSize).trim();
  setGrid();

  for (let i = 0; i < gridSize * gridSize; i++) {
    div = document.createElement('div');
    div.className = "panel";
    div.setAttribute('style', 'opacity: 0.1');
    container.appendChild(div);
  }

  addEventListenersToPanels();
}

function setGrid() {
  container.setAttribute('style', `grid-template-columns: ${gridElements}; grid-template-rows: ${gridElements};`);
}

function addEventListenerToButton() {
  button.addEventListener("click", clearScreen);
}

function addEventListenersToPanels() {
  let divPanels = document.querySelectorAll("div.panel");

  for (let i = 0; i < divPanels.length; i++) {
    divPanels[i].addEventListener("mouseover", darkenPanel);
  }
}

function darkenPanel() {
  let startingOpacity = parseFloat(this.getAttribute('style').slice(-1));
  // For Debugging
  // console.log(startingOpacity);
  let opacity = startingOpacity;
  opacity !== 9 ? opacity = parseFloat(`0.${opacity + 1}`) : opacity = 9;
  this.setAttribute('style', `opacity: ${opacity}`);
  // For Debugging
  // console.log(opacity);
}

function clearScreen() {

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  currentGridSize = parseInt(prompt("How many rows and columns should the new board be?", "16"));

  createGrid(currentGridSize);
}

init();
