

var adj = {
	r:25,
	g:255,
	growth:0,
	change:0

};


function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
	
}
function setup(){
	createCanvas(windowWidth, windowHeight);
	background(0,0,0);

}

function draw(){
	smooth();
	adj.growth = random(0, 20);
	adj.change = random(0, 255);

	frameRate(80);
	stroke(255, 255, 255);
	strokeWeight(1);
	fill(255, 255, 255, 10);
	ellipse(mouseX, mouseY, 120, 120);

}

function mousePressed() {
filter(INVERT);
  }
