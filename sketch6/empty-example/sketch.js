// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
var not = second();
not = not * 25;

  background(255);
  stroke(0);
  strokeWeight(10);

  fill(255,255,0);
  rectMode(CENTER);
  rect(width/1.5,height/1.5, not, not);
  fill(0,0,255);
  rect(width/3,height/3, not, not);
    fill(255,0,0);
  ellipse(width/2,height/2, 300, 300);


    if (mouseX < windowWidth * .25){
    	 fill(255);
  rect(width/1.5,height/1.5, not, not);
  rect(width/3,height/3, not, not);
  ellipse(width/2,height/2, 300, 300);


} else if (mouseX < windowWidth * .7){
background(0);
 fill(0);
  rectMode(CENTER); // check rectMode in p5 doc
  rect(width/1.5,height/1.5, not, not);
  rect(width/3,height/3, not, not);
  ellipse(width/2,height/2, 300, 300);

}
fill(255);
textSize(100);
text(not/25, width/2.18, height/1.85)

}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}