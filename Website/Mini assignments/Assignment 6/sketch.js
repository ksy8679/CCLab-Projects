/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 32).
  2. adjust line 19 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  createCanvas(400, 400);
  // ...except to adjust the dancer's name on the next line:
  dancer = new KimberlyDancer(width / 2, height / 2);
  
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  dancer.display();
  dancer.update();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. AliciaDancer.
class KimberlyDancer {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.angle = 0;
    //this.song = loadSound("Chicken Wing.mp3");
  }

  update() {
    if (mouseIsPressed === true) {
      push();
      translate(this.x, this.y);
      drawingContext.shadowBlur = 32;
      push();
      rotate(cos(this.angle));
      drawingContext.shadowColor = color(255);
      colorMode(HSB);
      noStroke();
      fill(color(random(150), random(50), random(60)));
      ellipse(0, 0, 30, 150); //sausage
      pop();
      noStroke();
      drawingContext.shadowColor = color(200);
      fill(color(0, random(255), random(255)));
      ellipse(15, this.y1, 30, 150); //bun#1
      ellipse(-15, this.y1, 30, 150); //bun#2
      fill(color(random(255), 0, random(255)));
      ellipse(0, -this.y1, 30, 150); //sausage
      fill("white");
      ellipse(10, -this.y1 - 15, 15, 30); //eyes white part
      ellipse(-10, -this.y1 - 15, 15, 30);
      fill("black");
      ellipse(-10, -this.y1 - 10, 10, 20); //eye black part
      ellipse(10, -this.y1 - 10, 10, 20);
      arc(0, -this.y1 + 15, 15, 15, 0, PI + QUARTER_PI);
      this.angleVel = 1.5;
      pop();
    }
    
    //sin motion
    this.angle = this.angle + this.angleVel;
    this.angleVel = 0.5;
    this.y1 = map(sin(this.angle * 0.3), -1, 1, -15, 15);
    this.angle = this.angle + this.angleVel;
    //console.log(this.y1);

    // Esta seccion de codigo es para verificar si el valor de this.angle es indeterminado (NaN). En caso de que si lo sea, equivaler el valor de this.angle = 0 para evitar errores con el programa.
    if (isNaN(this.angle) === true) {
      this.angle = 0;
    }

    // update properties here to achieve
    // your dancer's desired moves and behaviour
  }

  display() {
    // the push and pop, along with the translate
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    this.angleVel = 0.05;
    translate(this.x, this.y);
    drawingContext.shadowBlur = 32;
    drawingContext.shadowColor = color(220, 20, 60);
    //this.drawReferenceShapes();
    push();
    rotate(sin(this.angle*this.angleVel));
    stroke(220, 20, 60);
    strokeWeight(5);
    line(-70,0,70,0);//arms
    pop();
    drawingContext.shadowColor = color(255, 215, 0);
    noStroke();
    fill(255, 215, 0);
    //console.log(this.y1);
    ellipse(15, this.y1, 30, 150); //bun#1
    ellipse(-15, this.y1, 30, 150); //bun#2
    fill(220, 20, 60);
    drawingContext.shadowColor = color(220, 20, 60);
    ellipse(0, -this.y1, 30, 150); //sausage
    drawingContext.shadowColor = color(200);
    fill("white");
    ellipse(10, -this.y1 - 15, 15, 30); //eyes white part
    ellipse(-10, -this.y1 - 15, 15, 30);
    fill("black");
    ellipse(-10, -this.y1 - 10, 10, 20); //eye black part
    ellipse(10, -this.y1 - 10, 10, 20);
    stroke(220, 20, 60);
    strokeWeight(5);
    drawingContext.shadowColor = color(220, 20, 60);
    line(5, 40, 15, 90); //right leg
    line(-5, 40, -15, 90); //left leg
    ellipse(-20, 90, 10, 5);
    ellipse(20, 90, 10, 5);
    noStroke();
    rotate();
    arc(0, -this.y1 + 15, 15, 15, 0, PI + QUARTER_PI, CHORD);
    fill(220, 20, 60);
    drawingContext.shadowColor = color(220, 20, 60);
    rotate(sin(this.angle*this.angleVel));
    ellipse(-70,8,10,20);
    ellipse(70,-8,10,20);
    pop();
  }

/*  drawReferenceShapes() {
    noFill();
    stroke(255, 0, 0);
    line(-5, 0, 5, 0);
    line(0, -5, 0, 5);
    stroke(255);
    rect(-100, -100, 200, 200);
    fill(255);
    stroke(0);
  }*/
}

/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmomize once on the same canvas, please don't make your dancer bigger than 200x200 pixels.
*/
