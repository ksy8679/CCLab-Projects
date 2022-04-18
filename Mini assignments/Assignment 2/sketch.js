let pressed = false;
let state = 1;
//let keyPresses = 0;
//let currentMouseX = 0;
//let currentMouseY = 0;
let isBackgroundWhite = false;

//color codes
let colLilac = "#E6E6FA";
let colPink = "#FFC0CB";
let colRed = "#FF0000";
let colBlue = "#87CEFA";
let colGreen = "#00FA9A";
let colMaroon = "#DC143C";
let colYellow = "#FFFF00";

function setup() {
  createCanvas(612, 612);
}

function draw() {
  if (state === 1) {
    isBackgroundWhite = false;
    gradientChange();
  } else if (state === 2) {
    drawPicture();
  }
}

function drawPicture() {
  if (isBackgroundWhite === false || key === "e") {
    background("white");
    isBackgroundWhite = true;
    key = 0;
  }
  if (key === "s") {
    stroke(colBlue);
    fill(colBlue);
    rect(mouseX, mouseY, 80, 80);
    key = 0;
  } else if (key === "r") {
    stroke(colGreen);
    fill(colGreen);
    rect(mouseX, mouseY, 120, 60);
    key = 0;
  } else if (key === "c") {
    stroke(colMaroon);
    fill(colMaroon);
    circle(mouseX, mouseY, 60);
    // Descomentar si se desea parar de aparentar un dibujo continuo.
    key = 0;
  }

  if (mouseIsPressed) {
    stroke("black");
    strokeWeight(7);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }

  fill("black");
  textSize(14);
  noStroke();
  text("Press 'r' to draw rectangles", 10, 20);
  text("Press 's' to draw squares", 10, 40);
  text("Press 'c' to draw circle", 10, 60);
  text("Press 'e' to delete drawings", 10, 80);
  text("Keep mouse pressed to draw lines", 10, 100);

  fill("white");
  stroke("black");
  strokeWeight(2);
  rect(5, 583, 282, 25);

  textSize(16);
  noStroke();
  fill("black");
  text("Press 'g' to go back to previous picture", 10, 600);
}

function mousePressed() {}

function keyPressed() {
  if (key === "d") {
    state = 2;
  }
  if (key === "g") {
    state = 1;
  }
}

function gradientChange() {
  background(colLilac);
  //vertical lines
  stroke("black");
  strokeWeight(4);
  line(52, 0, 52, 612);
  line(102, 0, 102, 612);
  line(154, 0, 154, 612);
  line(206, 0, 206, 612);
  line(256, 0, 256, 612);
  line(308, 0, 308, 612);
  line(360, 0, 360, 612);
  line(410, 0, 410, 612);
  line(462, 0, 462, 612);
  line(512, 0, 512, 612);
  line(562, 0, 562, 612);

  //horizontal lines
  stroke("black");
  strokeWeight(4);
  line(0, 52, 612, 52);
  line(0, 102, 612, 102);
  line(0, 154, 612, 154);
  line(0, 206, 612, 206);
  line(0, 256, 612, 256);
  line(0, 308, 612, 308);
  line(0, 360, 612, 360);
  line(0, 410, 612, 410);
  line(0, 462, 612, 462);
  line(0, 512, 612, 512);
  line(0, 562, 612, 562);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(310, 156, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(361, 104, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(412, 104, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(463, 104, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(513, 156, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(513, 207, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(513, 258, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(464, 310, 46, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(412, 362, 48, 46);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(361, 412, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(310, 464, 48, 46);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(258, 464, 48, 46);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(208, 412, 47, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(156, 362, 48, 46);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(104, 310, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(54, 258, 46, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(54, 207, 46, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(54, 156, 46, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(104, 104, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(207, 104, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(156, 104, 48, 48);

  color(colPink);
  fill(colPink);
  stroke(colPink);
  strokeWeight(0);
  rect(258, 156, 48, 48);

  fill(colLilac);
  stroke("black");
  strokeWeight(2);
  rect(5, 583, 260, 25);

  fill("black");
  noStroke();
  textSize(16);
  text("Press 'd' to switch to drawing board", 10, 600);

  fill(colLilac);
  stroke("black");
  strokeWeight(2);
  rect(290, 8, 318, 25);

  fill("black");
  noStroke();
  textSize(16);
  text("Drag mouse to the left/right to change color", 295, 26);

  //change color of drawing
  if (mouseX > 302) {
    background("black");
    //vertical lines
    stroke("white");
    strokeWeight(4);
    line(52, 0, 52, 612);
    line(102, 0, 102, 612);
    line(154, 0, 154, 612);
    line(206, 0, 206, 612);
    line(256, 0, 256, 612);
    line(308, 0, 308, 612);
    line(360, 0, 360, 612);
    line(410, 0, 410, 612);
    line(462, 0, 462, 612);
    line(512, 0, 512, 612);
    line(562, 0, 562, 612);

    //horizontal lines
    stroke("white");
    strokeWeight(4);
    line(0, 52, 612, 52);
    line(0, 102, 612, 102);
    line(0, 154, 612, 154);
    line(0, 206, 612, 206);
    line(0, 256, 612, 256);
    line(0, 308, 612, 308);
    line(0, 360, 612, 360);
    line(0, 410, 612, 410);
    line(0, 462, 612, 462);
    line(0, 512, 612, 512);
    line(0, 562, 612, 562);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(310, 156, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(361, 104, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(412, 104, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(463, 104, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(513, 156, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(513, 207, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(513, 258, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(464, 310, 46, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(412, 362, 48, 46);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(361, 412, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(310, 464, 48, 46);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(258, 464, 48, 46);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(208, 412, 47, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(156, 362, 48, 46);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(104, 310, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(54, 258, 46, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(54, 207, 46, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(54, 156, 46, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(104, 104, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(207, 104, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(156, 104, 48, 48);

    color(colRed);
    fill(colRed);
    stroke(colRed);
    strokeWeight(0);
    rect(258, 156, 48, 48);

    fill("black");
    stroke("white");
    strokeWeight(2);
    rect(5, 583, 260, 25);

    fill("white");
    noStroke();
    textSize(16);
    text("Press 'd' to switch to drawing board", 10, 600);

    fill("black");
    stroke("white");
    strokeWeight(2);
    rect(290, 8, 318, 25);

    fill("white");
    noStroke();
    textSize(16);
    text("Drag mouse to the left/right to change color", 295, 26);
    
  }

  textSize(14);
  text("X: " + mouseX, 20, 20);
  text("Y: " + mouseY, 20, 40);
}
