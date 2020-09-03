
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bucket,ball

function preload()
{
	
}



function setup() {
	createCanvas(800, 700);
 

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bucket=new Box(700,320,70,70);
	
    ball = new Ball  (100,100);



	Engine.run(engine);
  
}


function draw() {
 
  background(255);

  bird.display();
  bucket.display();
  
  drawSprites();
 
}



