var Ball,ground,boxRightEdge,boxBottomEdge,boxLeftEdge;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	boxBottomEdge=createSprite(400,665,200,20);
	boxBottomEdge.shapeColor=color(red);

	boxRightEdge=createSprite(390,665,100,20);
	boxRightEdge.shapeColor=color(red);

	boxLeftEdge=createSprite(410,665,100,20);
	boxLeftEdge.shapeColor=color(red);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  boxBottomEdge.display();
  boxRightEdge.display();
  boxLeftEdge.display();

  
  drawSprites();
 
}



