
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paperball,ground,log,log1,log2;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
	paperball= new Paper (85,85,50);
	ground = new Ground(600,height,1200,20);
	log = new Bin (1000,200,75,250);
	log1 = new Bin (1100,200,250,75);
	log2 = new Bin (900,200,250,75);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
ground.display();
paperball.display();
log.display();
log1.display();
log2.display();

  drawSprites();
 
}
function  keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}

}



