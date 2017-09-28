
var rays = 8;
var length = 200;
var points = 40;


var mySeed = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//some practical settings
	angleMode(DEGREES);
	colorMode(HSB, 360, 100, 100, 1);
}

function draw() {
	background(0, 0, 100);

	//calculate angle between rays
	var degrees = 360/rays;

	push() //just in case
	//translate coordinate to middle of canvas
	translate(width/2, height/2);

	//create for loop that repeats as many times as there are rays
	for(var i = 0; i < rays; i=i+1) {
		//rotate coordinate system around 0, 0
		rotate(degrees);

		strokeWeight(2);
		stroke(0);
		//draw a horizontal line
		line(0, 0, length, 0);	

		strokeWeight(random(points));
		stroke(0, 100, 100);
		//draw a point
		point(length, 0); 		
	}
	pop();

	noLoop();	
}

function mousePressed() {
	rays = round(random(64));
	length = random(width/3)	
	loop();
}

function keyTyped() {
	if (key == 's') save("star.jpg");
}