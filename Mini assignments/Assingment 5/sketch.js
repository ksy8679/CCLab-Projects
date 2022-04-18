//colors
let purple = "#7B68EE";
let lightBlue = "#87CEEB";
let pink = "#FFC0CB";
let lightGreen = "#98FB98";
let orange = "#FFA500";
let darkOrange = "#FF4500";
let colorArray = []; //initialize color array
let c = 0;
let img;

let luckyguy; //font name

let angle = 0;

let ghost = []; //initialize ghost array
//let ghost2 = [];

function setup() {
  createCanvas(400, 400);
  //in charge of image used for background
  img = loadImage("haunted_house.jpeg"); //loads the image that is called

  //color array
  colorArray = [purple, pink, lightGreen, lightBlue, orange, darkOrange];

  // for loop used to create various ghosts
  for (var i = 0; i < 10; i++) {
    ghost[i] = new Ghost(random(50, 350), random(50, 350));
  }
  /*for (var g = 0; g < 4; g++) {
    ghost2[g] = new Ghost(random(50, 250), random(50, 350));
  }*/
  
  //in charge of loading the font type fron file that is uploaded
  luckyguy = loadFont("LuckiestGuy-Regular.ttf");//load this type of font
}

function draw() {
  background(0);
  
  img.resize(400, 400); //resizes the image
  image(img, 0, 0); //places the image at a certain location

  for (var i = 0; i < 10; i++) {
    ghost[i].update();
    ghost[i].display(colorArray[c],1);
    ghost[i].bounce();
    let increment = 1;
    angle += increment;
  }
  /*
  for (var g = 0; g < 10; g++) {
    ghost2[g].update();
    ghost2[g].display();
    ghost2[g].bounce();
  }*/
}

function Ghost(x, y) {
  //setting up variables
  this.x = x;
  this.y = y;
  this.xDir = random(-5, 5);
  this.yDir = random(-5, 5);

  //this function creates the ghost's movement
  this.update = function () {
    this.x += this.xDir;
    this.y += this.yDir;
  }

  //the display function is in charge of showing what shapes (objects) are drawn
  this.display = function (colorFill,scl) {
  
    // -------------- (Back/Atras Arms) ------------
    push();
    fill(colorFill);
    stroke(4);
    translate(this.x-3, this.y+25);
    rotate(radians(angle));
    ellipse(0, 0, 40, 13);
    pop();
    // ---------------------------------------
    
    scale(scl);
    fill(colorFill);
    noStroke(0);
    rect(this.x, this.y, 50, 50);
    ellipse(this.x + 25, this.y, 50, 50);
    
    // ------------- (Front/Enfrente Arms) ------------
    push();
    fill(colorFill);
    stroke(4);
    translate(this.x+25, this.y+25);
    rotate(radians(angle));
    ellipse(0, 0, 40, 13);
    pop();
    // ---------------------------------------
    
    fill("black");
    ellipse(this.x + 15, this.y, 7, 15);
    ellipse(this.x, this.y, 7, 15);
    ellipse(this.x + 7, this.y + 15, 7, 7);

}


  //this defines the object's borders & what happens if it touches a border = change ghost's color and shows words
    this.bounce = function () {
    lastXDir = this.xDir;
    lastYDir = this.yDir;

    if (this.x > 360 || this.x < 0) {
      this.xDir = -this.xDir;
     // console.log(lastXDir);
     // console.log(this.xDir);
      if (lastXDir != this.xDir) {
        Ghost(this.x, this.y, colorArray[c]);
        fill("white");
        textSize(60);
        textFont(luckyguy);
        text("BOO", 30, 350);//creates the words on the screen
        text("BOO", 250, 250);
        c += 1;
        if (c > 5) {
          c = 0;
        }
      }
    } else if (this.y > 360 || this.y < 0) {
      this.yDir = -this.yDir;
      //console.log(this.lastYDir); (just to check if it is working)
      //console.log(this.yDir);
      if (lastYDir != this.yDir) {
        Ghost(this.x, this.y, colorArray[c]);
        fill("white");
        textSize(60);
        textFont(luckyguy);
        text("BOO", 100, 100);//creates the words on the screen
        c += 1;
        if (c > 5) {
          c = 0;
        }
      }
    }
  }
}