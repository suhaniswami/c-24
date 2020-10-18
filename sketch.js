
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 paper= new Paper(100,480,100,100);
	 bucket= new Bucket (400,500,120,10);
	 bucket2= new Bucket(340,480,10,50);
	 bucket3= new Bucket (460,480,10,50);
     ground= new Ground (300,580,600,10);

	Engine.run(engine);
  
}


function draw() {
 if(keyCode===UP_ARROW){
	 Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:85});
 }

  rectMode(CENTER);
  background(0);
  paper.display();
  bucket.display();
  bucket2.display();
  ground.display();
  bucket3.display();
}



