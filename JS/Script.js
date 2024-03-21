const snakeElement = document.getElementById('snake');
const eggElement = document.getElementById('egg');
const frogElement = document.getElementById('frog');
const mouseElement = document.getElementById('mouse');

let score = 0;
let mouseSpawnRate = 20; // 20% chance of mouse spawn

function updateScore(points) {
    score += points;
    console.log('Score:', score);
}

function spawnFood(foodElement) {
    const x = Math.floor(Math.random() * 20) * 20;
    const y = Math.floor(Math.random() * 20) * 20;
    foodElement.style.left = x + 'px';
    foodElement.style.top = y + 'px';
}

function checkFoodCollision(foodElement) {
    const snakeRect = snakeElement.getBoundingClientRect();
    const foodRect = foodElement.getBoundingClientRect();

    return (
        snakeRect.left === foodRect.left &&
        snakeRect.top === foodRect.top
    );
}

function gameLoop() {
    if (checkFoodCollision(eggElement)) {
        updateScore(10);
        spawnFood(eggElement);
    } else if (checkFoodCollision(frogElement)) {
        updateScore(5);
        spawnFood(frogElement);
    } else if (Math.floor(Math.random() * 100) < mouseSpawnRate && checkFoodCollision(mouseElement)) {
        updateScore(20);
        spawnFood(mouseElement);
    }
}

spawnFood(eggElement);
spawnFood(frogElement);
spawnFood(mouseElement);

setInterval(gameLoop, 1000);
