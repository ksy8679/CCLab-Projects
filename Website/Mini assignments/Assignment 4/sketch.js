let angle = 0;
let angleVel = 20;

let colBlue = "#87CEFA";
let colCoral = "#F08080";

let x;
let y;
let r;
let b;
let g;
let size;

function setup() {
  //noLoop();
  createCanvas(500, 500);
  rectMode(CENTER);
  frameRate(0.9);
  
  r = (random(-60, 255));
  b = (random(-60, 255));
  g = (random(-60, 255));
  
  angle+=angleVel
  
  x = 40;
  y = 40;
  size = random(19, 29);
  size1 = random(9, 19);

  background(40);
  for (let i = 0; i < 25; i++) {
  console.log(i);
      for (let k = 0; k < 15; k++) {
         for (let l = 0; l < 25; l+=1.3) {
  
  noStroke();
  fill(colBlue);
  circle(i*x+20, k*y, 40);
 
  push();
  translate(l*20, k*40);
  rotate(PI/3.5);
  rotate(radians(angle)); //(uncomment if you want them to rotate)
  stroke(2);
  fill(r, g, b);
  rect(0, 0, size, size);
  pop();
   
  push();
  translate(l*20, k*40);
  rotate(PI/3.5);
  rotate(radians(-angle)); //(uncomment if you want them to rotate)
  stroke(2);
  fill("white");
  rect(0, 0, size1, size1);
  pop();
        }
      } 
    }
  
  //saveCanvas('Kimberly Yau', 'png');
}