import { randomElementFromArray, wait } from './utils.js';

const foodItemsArray = [
  '🐁',
  '🍇',
  '🍉',
  '🍈',
  '🍓',
  '🍍',
  '🍌',
  '🥝',
  '🍏',
  '🍎',
  '🍔',
  '🍅',
  '🥚',
];

// game display elements
const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('span');
const startBtn = document.querySelector('.start-btn');
const keyBtns = document.querySelectorAll('.keys-container button');

// game variables
const width = 10;
const numCells = width * width;
let currentSnake = [2, 1, 0];
let snakeColor = Math.floor(Math.random() * 360);
let snakeColorIncrement = 10;
let direction = 1;
let intervalTime = 200; // determines speed - frequency of game loop calls
let interval = 0;
let foodItemIndex = 0; // first cell
let score = 0;

grid.style.width = `${width * 10 * 2}px`;
grid.style.height = `${width * 10 * 2}px`;

// create grid cells
for (let i = 0; i < width * width; i++) {
  const cell = document.createElement('div');
  cell.style.width = `${width * 2}px`;
  cell.style.height = `${width * 2}px`;
  grid.appendChild(cell);
}
const cells = document.querySelectorAll('.grid div');

async function createFood() {
  foodItemIndex = Math.floor(Math.random() * numCells);
  if (currentSnake.includes(foodItemIndex)) {
    await wait(100);
    createFood();
  } else {
    cells[foodItemIndex].classList.add('food-item');
    cells[foodItemIndex].innerText = randomElementFromArray(foodItemsArray);
  }
}

function startGame() {
  grid.classList.remove('shake');
  currentSnake.forEach(i => {
    cells[i].style.background = 'none';
    cells[i].classList.remove('snake');
    cells[i].innerText = '';
  });
  clearInterval(interval);
  direction = 1;
  currentSnake = [2, 1, 0];
  currentSnake.forEach(i => {
    snakeColor += snakeColorIncrement % 360;
    cells[i].style.background = `hsl(${snakeColor}, 100%, 50%)`;
    cells[i].classList.add('snake');
  });
}