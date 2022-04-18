let pressed = false;
let img;

function setup() {
  createCanvas(400, 500);
  img = loadImage("bongo_cat2.jpeg");
}

function draw() {
  if (pressed === false) {
    closedDoor(10, 10);
  } else if (pressed === true) {
    openDoor();
    img.resize(150, 150);
    image(img, 130, 318);
  }
  //mousePressed()
  //openDoor()
  /*if (mouseClicked === false){
    
  }*/
}

function mousePressed() {
  if (pressed === true) {
    pressed = false;
  } else if (pressed === false) {
    pressed = true;
  }
}

function openDoor() {
  //if (mouseClicked === true) {
  background(230);
  color(160, 82, 45);
  fill("rgb(139, 69, 19)");
  stroke("black");
  rect(0, 430, 400, 400);

  color(139, 69, 19);
  fill("rgb(139,69, 19)");
  stroke("black");
  rect(70, 20, 260, 450);

  color("white");
  fill("white");
  stroke("black");
  rect(90, 41, 220, 450);

  color(160, 82, 45);
  fill("rgb(139, 69, 19)");
  stroke("black");
  rect(310, 41, 220, 450);

  color(160, 82, 45);
  fill("rgb(139, 69, 19)");
  stroke("black");
  rect(340, 60, 160, 220);

  color(160, 82, 45);
  fill("rgb(139, 69, 19)");
  stroke("black");
  rect(340, 300, 160, 120);

  color(248, 248, 225);
  fill("rgb(248, 248, 225)");
  rect(25, 210, 20, 30);

  color(248, 248, 225);
  fill("rgb(248, 248, 225)");
  rect(30, 215, 10, 20);

  color(160, 82, 45);
  fill("rgb(139, 69, 19)");
  stroke("black");
  rect(0, 470, 500, 120);

  //}
}

function closedDoor() {
  background(230);
  color(160, 82, 45);
  fill("rgb(139, 69, 19)");
  stroke("black");
  rect(0, 430, 400, 400);

  color(139, 69, 19);
  fill("rgb(139,69, 19)");
  stroke("black");
  rect(70, 20, 260, 450);

  color(160, 82, 45);
  fill("rgb(139, 69, 19)");
  stroke("black");
  rect(90, 41, 220, 450);

  color(160, 82, 45);
  fill("rgb(139, 69, 19)");
  stroke("black");
  rect(120, 60, 160, 220);

  color(160, 82, 45);
  fill("rgb(139, 69, 19)");
  stroke("black");
  rect(120, 300, 160, 120);

  color("black");
  fill("black");
  rect(100, 280, 10, 20);

  color("black");
  fill("black");
  rect(100, 286, 25, 7);

  color(248, 248, 225);
  fill("rgb(248, 248, 225)");
  rect(25, 210, 20, 30);

  color(248, 248, 225);
  fill("rgb(248, 248, 225)");
  rect(30, 215, 10, 20);

  color(160, 82, 45);
  fill("rgb(139, 69, 19)");
  stroke("black");
  rect(0, 470, 500, 120);

  color("black");
  fill("black");
  rect(350, 100, 100, 335);

  color("white");
  fill("white");
  rect(370, 120, 150, 300);

  color(105, 105, 105);
  fill("rgb(40, 40, 40)");
  noStroke();
  circle(105, 289, 8);
}
