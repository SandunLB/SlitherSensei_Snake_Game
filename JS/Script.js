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
let interval = 0;



grid.style.width = `${width * 10 * 2}px`;
grid.style.height = `${width * 10 * 2}px`;

