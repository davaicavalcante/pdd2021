const NL = 6;
const NC = 6;
const LADO = 50;
let snake_x = 2;
let snake_y = 0;
let snake_vx = 0;
let snake_vy = 0;
let snake_color;
let cell_color;
let timer = 0;
let food_count = 0;
let food_x = 0;
let food_y = 0;
let food_color;
let food_xtwo = 0;
let food_ytwo = 0;
let food_colortwo

function food_generate(){
    food_x = parseInt(random(0, NC));
    food_y = parseInt(random(0, NL));
  
}

function foodtwo(){
    food_xtwo = parseInt(random(0, NC));
    food_ytwo = parseInt(random(0, NL));
}

function setup() {
  createCanvas(NL*LADO, NC*LADO);
  frameRate(30);
  snake_color = color ("yellow")
  cell_color = color ("green")
  food_color = color ("blue");
  food_generate;
  food_colortwo = color ("blue")
}


function cell(x,y, color){
   noStroke();
  fill(color)
   square(x * LADO + 1, y * LADO + 1, LADO - 1);
}

function matriz(){
  fill(155);
  for(let c = 0; c < NC; c++)
    for(let l = 0; l < NL; l++)
      cell(c, l, cell_color);
}

function snake_loop(){
    if(snake_x == NC)
     snake_x = 0;
  if(snake_y == NL)
    snake_y = 0;
  if(snake_x == -1)
     snake_x = NC -1;
   if(snake_y == -1)
     snake_y = NL -1;
  
}

function snake_walk() {
  if (frameCount - timer > 10){
    timer = frameCount;
    snake_x += snake_vx;
    snake_y += snake_vy;
  }
}

function draw() {
  snake_walk();
  snake_loop();
  
  if(snake_x == food_x && snake_y == food_y){
    food_generate();
    food_count += 1;
    foodtwo()
    food_count += 0;
  }
   if(snake_x == food_x && snake_y == food_y){
    foodtwo()
    food_count -= 1;
  }
  background(255);
  matriz();
  cell(food_x, food_y, food_color);
  cell(food_xtwo, food_ytwo, food_colortwo);
  cell(snake_x, snake_y, snake_color);

  fill(0);
  textSize(20);
  text(food_count, 10,30);
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
    snake_vx = -1;
    snake_vy = 0;
  } else if(keyCode === RIGHT_ARROW){
     snake_vx = 1;
     snake_vy = 0;
  }else if(keyCode === UP_ARROW){
     snake_vx = 0;
     snake_vy = -1;
}else if(keyCode === DOWN_ARROW){
     snake_vx = 0;
     snake_vy = 1;
}
 } 
    