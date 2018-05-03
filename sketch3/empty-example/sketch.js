// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
var spot ={
	x: 100,
	y: 50,
}

var col = {
	r: 255,
	g: 0,
	b: 0,
}
function setup() {
  createCanvas(windowWidth, windowHeight);
background(0);
}

function draw() {
	 noStroke();
 col.r = random (30, 90);
 col.g = 170;
 col.b = random(100, 200);
 spot.x = random(0, width);
 spot.y = random(0, height);
 fill(col.r, col.g, col.b);
 ellipse(spot.x, spot.y, 50, 50);
 filter(ERODE,5);
 frameRate(80);
}