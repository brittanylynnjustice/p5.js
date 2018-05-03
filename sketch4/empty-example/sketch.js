// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

stroke(255);
strokeWeight(4);
noFill();

if (mouseX > windowWidth/2){
fill(255);
}
ellipse(windowWidth/2,windowHeight/2,300,300);


ellipse(windowWidth/8,windowHeight/8,100,100);
ellipse(windowWidth/1.2,windowHeight/8,100,100);
ellipse(windowWidth/8,windowHeight/1.2,100,100);
ellipse(windowWidth/1.2,windowHeight/1.2,100,100);
}
