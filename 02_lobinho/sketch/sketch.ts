class Entity {
  x: number; 
  y: number;
  step: number;
  image: p5.Image;
  alive: boolean;
            
  constructor(x: number, y: number, step: number, image: p5.Image) {
      this.x = x;
      this.y = y;
      this.step = step;
      this.image = image;
      this.alive = true;

      ]
  }
  
  draw(): void {
    if(!this.alive){
      return;
    }
      image(this.image, this.x * this.step, this.y * this.step, this.step, this.step);
  }
}

class Board {
  nl: number; 
  nc: number;
  step: number;
  background: p5.Image;

  constructor(nc: number, nl: number, step: number, background: p5.Image) {
      this.nc = nc
      this.nl = nl
      this.step = step
      this.background = background;
  }

  draw(): void {
      image(this.background, 0, 0, this.nc * this.step, this.nl * this.step);
      for (let x = 0; x < this.nc; x++) {
          for (let y = 0; y < this.nl; y++) {
              noFill();
              stroke(0);
              strokeWeight(2);
              rect(x * this.step, y * this.step, this.step, this.step);
          }
      }
  }
}

let tubara_img: p5.Image;
let marlin_img: p5.Image;
let board_img: p5.Image;

let tubarao: Entity;
let marlin: Entity;
let board: Board;

function marlin_loop() {
  if(marlin.x == board.nc){
    marlin.x = 0;
}
  if(marlin.y == board.nl){
    marlin.y = 0;
}
  if(marlin.x == -1){
    marlin.x = board.nc -1;
}
  if(marlin.y == -1){
    marlin.y = board.nl -1;
}

}
function tubarao_loop() {
  if(tubarao.x == board.nc){
    tubarao.x = 0;
}
  if(tubarao.y == board.nl){
    tubarao.y = 0;
}
  if(tubarao.x == -1){
    tubarao.x = board.nc -1;
}
  if(tubarao.y == -1){
    tubarao.y = board.nl -1;
}

}
function loadImg(path: string): p5.Image {
  return loadImage(
      path,
      () => console.log("Loading " + path + " ok"),
      () => console.log("Loading " + path + " error")
  );
}

function preload() {
  tubara_img = loadImg('../sketch/tubarao.png');
  marlin_img = loadImg('../sketch/marlin.png');
  board_img = loadImg('../sketch/mar.jpg');
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
      tubarao.x--;
  } else if (keyCode === RIGHT_ARROW) {
      tubarao.x++;
  } else if (keyCode === UP_ARROW) {
      tubarao.y--;
  } else if (keyCode === DOWN_ARROW) {
      tubarao.y++;
  }

  if (keyCode === "A".charCodeAt(0)) {
      marlin.x--;
  } else if (keyCode === "D".charCodeAt(0)) {
      marlin.x++;
  } else if (keyCode === "W".charCodeAt(0)) {
      marlin.y--;
  } else if (keyCode === "S".charCodeAt(0)) {
      marlin.y++;
  }
}

function setup() {
  let size = 100;
  tubarao = new Entity(2, 2, size, tubara_img);
  marlin = new Entity(1, 1, size, marlin_img);
  board = new Board(6, 4, size, board_img);
  createCanvas(board.nc * size, board.nl * size);
}

function draw() {
  marlin_loop();
  tubarao_loop();
  board.draw();
  tubarao.draw();
  marlin.draw();
}