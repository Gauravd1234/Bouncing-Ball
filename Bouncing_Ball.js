
var xval = 400;
var speed = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255, 0, 0);
  ellipse(200, xval, 25);
  if (xval > width - 100){   
    speed -= 1;   
    
  } else{
    
  speed += 0.5;
    
  }
  
  
  xval += speed;
  
  
}


