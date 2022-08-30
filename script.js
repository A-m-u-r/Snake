const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 900;
canvas.height = 900;

ctx.rect(0, 0, 900, 900);
ctx.lineWidth = 5;
ctx.stroke();
let i = "ArrowUp";
let cub = 30;

function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) * cub; //Рандомные числа
}

let food = {
  x: getRandomInRange(0, 29),
  y: getRandomInRange(0, 29),
};

ctx.fillStyle = "Red";
ctx.fillRect(food.x, food.y, 30, 30);

let snake = [];
snake[0] = {
  x: 14 * cub,
  y: 14 * cub,
};

document.addEventListener("keyup", function () {
  if (event.key == "ArrowUp") {
    i = "ArrowUp";
  }
  if (event.key == "ArrowDown") {
    i = "ArrowDown";
  }
  if (event.key == "ArrowLeft") {
    i = "ArrowLeft";
  }
  if (event.key == "ArrowRight") {
    i = "ArrowRight";
  }
});

function draw() {
  //ctx.fillStyle = "Green";
  //ctx.fillRect(snake[0].x, snake[0].y, cub, cub);
  console.log(i);

  //let last = snake.length - 1;
  //ctx.clearRect(snake[last].x, snake[last].y, cub, cub);

  //for (l = 0; l < snake.length; l++) {
  if (i == "ArrowUp") {
    ctx.fillStyle = "Green";
    snake[0].y -= 30;
    ctx.fillRect(snake[0].x, snake[0].y, cub, cub);
  }
  if (i == "ArrowDown") {
    ctx.fillStyle = "Green";
    snake[0].y += 30;
    ctx.fillRect(snake[0].x, snake[0].y, cub, cub);
  }
  if (i == "ArrowLeft") {
    ctx.fillStyle = "Green";
    snake[0].x -= 30;
    ctx.fillRect(snake[0].x, snake[0].y, cub, cub);
  }
  if (i == "ArrowRight") {
    ctx.fillStyle = "Green";
    snake[0].x += 30;
    ctx.fillRect(snake[0].x, snake[0].y, cub, cub);
  }

  if (snake[0].x == food.x && snake[0].y == food.y) {
    food = {
      x: getRandomInRange(0, 29),
      y: getRandomInRange(0, 29),
    };
    ctx.fillStyle = "Red";
    ctx.fillRect(food.x, food.y, 30, 30);
  } /*else {
    snake.pop();
  }*/
}
setInterval(draw, 100);
