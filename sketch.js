let snake;
function setup() {
  createCanvas(400, 400);
  
  snake = new Snake();
}

function draw() {
  background(255, 0, 0);

  snake.tampilkan();
  snake.gerak();
  snake.tembus();
}

function keyPressed() {
  if(key === 'w') {
    snake.atas = true;
    snake.bawah = false;
    snake.kanan = false;
    snake.kiri = false;
  }
  if(key === 's') {
    snake.bawah = true;
    snake.atas = false;
    snake.kanan = false;
    snake.kiri = false;
  }
  if(key === 'a') {
    snake.kiri = true;
    snake.atas = false;
    snake.kanan = false;
    snake.bawah = false;
  }
  if(key === 'd') {
    snake.kanan = true;
    snake.atas = false;
    snake.bawah = false;
    snake.kiri = false;
  }
}



