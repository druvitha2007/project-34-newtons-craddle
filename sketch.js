const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var string1,string2,string3,string4,string5;

function setup() {
  createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  bob1 = new Bob(200,100,50,rgb(245,181,23));
	bob2 = new Bob(300,100,50,rgb(253,117,91));
	bob3 = new Bob(400,100,50,rgb(7,153,218));
	bob4 = new Bob(500,100,50,rgb(253,117,91));
  bob5 = new Bob(600,100,50,rgb(245,181,23));
  
  string1 = new Sling(bob1.body,{x:200,y:10});
	string2 = new Sling(bob2.body,{x:300,y:10});
	string3 = new Sling(bob3.body,{x:400,y:10});
	string4 = new Sling(bob4.body,{x:500,y:10});
	string5 = new Sling(bob5.body,{x:600,y:10});
	
}

function draw() {
  background(0);  

  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  string1.display();
  string2.display();
  string3.display();
  string4.display();
  string5.display();

}

function mouseDragged(){
	Matter.Body.setPosition(bob1.body,{x:mouseX,y:mouseY});
}