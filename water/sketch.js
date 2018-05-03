
var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;      // Start angle at 0
var amplitude = 75.0; // Height of wave
var period = 500.0;   // How many pixels before the wave repeats
var dx;               // Value for incrementing x
var yvalues;  // Using an array to store height values for the wave


var r = 255;
var b = 0;


function setup() {

  createCanvas(windowWidth, windowHeight);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));

}

function draw() {

b = map(mouseX, 0, windowWidth, 0, 200);
r = map(mouseX, 0, windowWidth, 180, 0);
  background(20, r, 200);
  calcWave();
  renderWave();

 stroke(0);
strokeWeight(20);
fill(255);
ellipse(windowWidth/2, windowHeight/2, 500,250);
fill(0);
ellipse(windowWidth/2, windowHeight/2, 100, 100);
}


function calcWave() {
  // Increment theta (try different values for 
  // 'angular velocity' here
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {
noStroke(0);
  fill(255);
  // A simple way to draw the wave with an ellipse at each location
  for (var x = 0; x < yvalues.length; x++) {
  	fill(200, 0, 255);
  	    ellipse(x*xspacing, height/1+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/1.2+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/1.4+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/1.6+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/1.8+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/2+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/2.2+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/2.4+yvalues[x], 2, 2);
	ellipse(x*xspacing, height/2.6+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/2.8+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/3+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/3.2+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/3.4+yvalues[x], 2, 2);
	ellipse(x*xspacing, height/3.6+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/3.8+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/4+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/4.2+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/4.4+yvalues[x], 2, 2);
	ellipse(x*xspacing, height/4.6+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/4.8+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/5+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/5.2+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/5.4+yvalues[x], 2, 2);
	ellipse(x*xspacing, height/5.6+yvalues[x], 2, 2);
    ellipse(x*xspacing, height/5.8+yvalues[x], 2, 2);
  }

  function mousePressed(){
	stroke(0);
	noFill();
	strokeWeight(20);
	arc(windowWidth/2, windowHeight/2, 400, 400, 10, 100);
	ellipse(50,50,30,30);
}
}