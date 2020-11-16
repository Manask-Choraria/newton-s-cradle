
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof (width/2,200,width/3,20)
	bob1 = new Bob (285,400)
	rope1 = new Rope (bob1.body,{x:285,y:200})
	bob2 = new  Bob (345,400);
	rope2 = new Rope (bob2.body,{x:345,y:200})
	bob3 = new Bob (405,400);
	rope3 = new Rope (bob3.body,{x:405, y:200})
	bob4 = new Bob (465,400)
	rope4 = new Rope (bob4.body,{x:465,y:200})
	bob5 = new Bob (525,400);
	rope5 = new Rope (bob5.body,{x:525,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  
  rope2.display();
  
  rope3.display();
  
  rope4.display(); 
  
  rope5.display();
 
  

}
function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:-80});
	}

}



