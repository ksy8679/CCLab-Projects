let angle = 0;
let x;
let y;
let speed;

function setup() {
  createCanvas(500, 500);

  x = -250;
  y = 75;
  speed = 10;
}

function draw() {
  
  //R = RED, r = radius
  R = random(-60, 355);
  g = random(-60, 355);
  b = random(-80, 355);

  translate(200, 200);
  fill(R, g, b);
  noStroke();
  let r = map(sin(angle), -1, 1, 20, 400);
  circle(50, 50, r * 2);

  let increment = TWO_PI / 60;
  angle += increment;
  console.log(x);
  
  x = x + speed;
  fill("black");
  stroke("white");
  strokeWeight(3);
  ellipse(x, y, 50, 50);
  
  fill("black");
  stroke("white");
  strokeWeight(3);
  ellipse(-x, -y, 50, 50);
  
  if (x < 0) {
    x = x + speed;
  } else if (x > 300) {
    x = -250;
  }
}
