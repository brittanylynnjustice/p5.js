// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

var x = 100;
var y = 100;
var xspeed = 9;
var yspeed = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {


  background(0);
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(x, y, 100, 100);
    ellipse(y, x, 100, 100);

      ellipse(400, x, 100, 100);
    ellipse(y, x, 100, 100);
    ellipse(y, 800, 100, 100);
    ellipse(x, 600, 100, 100);
   

  	//bouncing horizontally
 	 x = x + xspeed;
  	
  	 if (x > windowWidth || x < 0)  {
     	xspeed = -xspeed;
  	}

  	//bouncing veritcally
  	y = y + yspeed;

  	if (y > windowHeight || y < 0) {
	 	  yspeed = -yspeed;
  	}

}