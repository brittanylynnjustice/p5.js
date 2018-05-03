// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var circle ={
A: 0,
B: 0,
C: 0,
D: 0,
};

var r = 255;
var b = 0;

var speed = 3;

function setup() {
  createCanvas(windowWidth, windowHeight);


  }

function draw() {

	b = map(mouseX, 0, windowWidth, 0, 255);
	r = map(mouseX, 0, windowWidth, 255, 0);
  background(20, r, 170);

noStroke();
 fill(r,b);
 ellipse(circle.A, 100, 80, 80);
  ellipse(circle.B, 300, 80, 80);
   ellipse(circle.C, 500, 80, 80);
    ellipse(circle.D, 700, 80, 80);
     ellipse(mouseX, mouseY, 250, 250);


 circle.A = circle.A +7;
  circle.B = circle.B +2;
   circle.C = circle.C +10;
    circle.D = circle.D +3;

}