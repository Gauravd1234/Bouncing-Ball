var x = 200;
var y = 360;
var speed = 12;
var gravity = 0.3;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(225);
  
  stroke(0);
  strokeWeight(5);

  ellipse(x, y, 25);


  y -= speed;
  speed -= gravity;

  if (y > width - 20) {
    speed = 12;
    gravity = 0.3;

  }


}
