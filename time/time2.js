
var c,d;

function setup() {
	createCanvas(windowWidth,windowHeight);
}



function draw(){

var c = color(255,204,0);
var d = color(255,204,0);

	 //go = map(mouseX, b, c, d);
	 c = map(mouseX, 0, windowWidth, 300, 0);
	 d = map(mouseX, 100, windowWidth, 400, 255);


	smooth();
	background(c,d);

}