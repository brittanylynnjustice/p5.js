
var go = 0;
var night = 255;
var day = 255;
var morning = 255;

function preload(){
  sound1 = loadSound('morning.mp3');
  //sound2 = loadSound('afternoon.mp3');
  sound3 = loadSound('evening.mp3');
  //sound4 = loadSound('night.mp3');
} 

function setup() {
	createCanvas(windowWidth,windowHeight);

}


function draw(){

  go = map(mouseX, 0, windowWidth, 120, 80);
	 morning = map(mouseX, 0, windowWidth, 255, 0);
	 day = map(mouseX, 100, windowWidth, 255, 150);
	 night = map(mouseX, 0, windowWidth, 0, 900);

	smooth();
	background(morning, day, night);
	fill(255, go);
	ellipse(mouseX, 400, 400, 400);

      if(mouseX > windowWidth/4){
     sound1.play();
    }else{
    sound3.play();
  }

}

 //if(mouseX < windowWidth/1){
  //  sound1.play();
  //}
