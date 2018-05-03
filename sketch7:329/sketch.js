// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
var go = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {

	speedAdjust();

	dotsDancing();

}

function speedAdjust(){
var sp = map(mouseY, 0, height, 0, 40);
frameRate(sp);
}

function dotsDancing(){

	var cola = map(mouseX, 0, width, 0, 255);

	background(255);
	noStroke();
	for (var x = 0; x <= width; x = x += 50) {
	for (var y = 0; y <= height; y += 50) {
	if(go) {
		fill(255, cola, random(255));
	} else {
		fill(0);
	}

	rect(x,y,random(width),100);
 }
}

}

function mousePressed() {
	go = !go;
}

function windowResized() {
	resizeCanvas(windowWidth,windowHeight);
}