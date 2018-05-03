// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var glow = false;
var x = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
 
}

function draw() {
  background(0,0,255);
  noStroke();
if (glow) {
	fill(255,255,0);
} else {
	fill(255,255,0,100);
}


  for (x = 0; x < width; x = x + 40) { //loop
  ellipse(x,200,30,30);
  }

}

function mousePressed(){
	glow = !glow;
}