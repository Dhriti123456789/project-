
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1;
var box1;
var box2;
var box3;
var paperball;



function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new ground(400,700);
	
	box1 = new box(600,645,10,100);
	box2 = new box(750,645,10,100);
	box3 = new box(675,690,150,10);

	paperball = new paper(200,650);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
  
  ground1.display();
  box1.display();
  box2.display();
  box3.display();
  paperball.display();
  
  keyPressed();
  drawSprites();
   
}
function keyPressed(){
  if (keycode === UP_ARROW){
      Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:-85});
  }
}




