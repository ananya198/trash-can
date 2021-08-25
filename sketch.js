
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var groundObj;
var leftside;
var rightside;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	groundObj=new ground(width/2,670,width,20);
	leftside=new ground(1100,600,20,120);
	rightside=new ground(1100,600,20,120);

	ball.mouseClicked(keyPressed)



	
	var ball_options={
		IsStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.
	ball=Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  
  drawSprites();
 
}

function keypressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});
	}
}



